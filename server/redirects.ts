import type { Express } from "express";

/**
 * REDIRECCIONES 301 - RECUPERACIÓN SEO
 * Implementado: Noviembre 2025
 * 
 * Propósito: Preservar link equity de backlinks de alta autoridad (DA 90+)
 * que apuntan a URLs antiguas del sitio anterior.
 */

export interface RedirectRule {
  from: string;
  to: string;
  priority: number;
  source: string;
  authorityDomain?: number;
}

/**
 * Redirecciones organizadas por prioridad y fuente
 */
export const REDIRECT_RULES: RedirectRule[] = [
  {
    from: "/cakesuki/2016/03/post-1582.html",
    to: "/truck-storage-solutions/",
    priority: 1,
    source: "Blogs Japoneses (cocolog-nifty.com)",
    authorityDomain: 90
  },
  {
    from: "/top/2008/04/post_4ce2.html",
    to: "/truck-maintenance-guides/",
    priority: 1,
    source: "Blogs Japoneses (cocolog-nifty.com)",
    authorityDomain: 90
  },
  {
    from: "/cakesuki/2016/02/f-51c2.html",
    to: "/spanish-trucking-resources/",
    priority: 1,
    source: "Blogs Japoneses (cocolog-nifty.com)",
    authorityDomain: 90
  },
  {
    from: "/topic/984194-camping-gear/",
    to: "/best-truck-storage-solutions/",
    priority: 2,
    source: "Foros Polacos (home.pl)",
    authorityDomain: 93
  },
  {
    from: "/topic/934517-kptv-news/",
    to: "/trucking-news-updates/",
    priority: 2,
    source: "Foros Polacos (home.pl)",
    authorityDomain: 93
  },
  {
    from: "/topic/1084317-vida-content/",
    to: "/recursos-en-espanol/",
    priority: 2,
    source: "Foros Polacos (home.pl)",
    authorityDomain: 93
  },
];

/**
 * Middleware de Express para manejar redirecciones 301
 * 
 * IMPORTANTE: Este middleware debe registrarse ANTES de las rutas API
 * pero DESPUÉS del middleware de logging/parsing.
 */
export function registerRedirects(app: Express): void {
  app.use((req, res, next) => {
    const requestPath = req.path;
    const fullPath = req.url;
    const queryString = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    
    if (requestPath === "/index.php") {
      const rawQuery = req.url.split('?')[1] ?? '';
      const params = new URLSearchParams(rawQuery);
      if (params.get("option") === "com_booklibrary" && params.get("task") === "view" && params.get("id") === "222") {
        const destination = "/trucker-education-resources/" + queryString;
        console.log(`[301 REDIRECT] ${fullPath} → ${destination} (Source: Plataformas Técnicas (ovh.net), DA: 92)`);
        return res.redirect(301, destination);
      }
    }
    
    for (const rule of REDIRECT_RULES) {
      if (requestPath === rule.from) {
        const destination = rule.to + queryString;
        console.log(`[301 REDIRECT] ${rule.from}${queryString} → ${destination} (Source: ${rule.source}, DA: ${rule.authorityDomain})`);
        return res.redirect(301, destination);
      }
    }
    
    next();
  });
}

/**
 * Obtiene estadísticas de redirecciones configuradas
 */
export function getAllRedirectRules() {
  const indexPhpRule: RedirectRule = {
    from: "/index.php?option=com_booklibrary&task=view&id=222",
    to: "/trucker-education-resources/",
    priority: 3,
    source: "Plataformas Técnicas (ovh.net)",
    authorityDomain: 92
  };
  
  return [...REDIRECT_RULES, indexPhpRule];
}

export function getRedirectStats() {
  const allRules = getAllRedirectRules();
  
  const byPriority = allRules.reduce((acc, rule) => {
    acc[rule.priority] = (acc[rule.priority] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const bySource = allRules.reduce((acc, rule) => {
    acc[rule.source] = (acc[rule.source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const avgDA = allRules.reduce((sum, r) => sum + (r.authorityDomain || 0), 0) / allRules.length;

  return {
    total: allRules.length,
    byPriority,
    bySource,
    averageDA: Math.round(avgDA * 10) / 10
  };
}
