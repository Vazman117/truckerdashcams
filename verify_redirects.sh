#!/bin/bash
# =============================================================================
# SCRIPT DE VERIFICACIÓN DE REDIRECCIONES 301
# =============================================================================
# Propósito: Verificar que todas las redirecciones SEO funcionen correctamente
# Uso: bash verify_redirects.sh [URL_BASE]
# Ejemplo: bash verify_redirects.sh https://truckerdashcams.com
# =============================================================================

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# URL base (usar argumento o localhost por defecto)
BASE_URL="${1:-http://localhost:5000}"

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}VERIFICACIÓN DE REDIRECCIONES 301${NC}"
echo -e "${BLUE}=================================${NC}"
echo ""
echo -e "Base URL: ${YELLOW}$BASE_URL${NC}"
echo ""

# Contadores
TOTAL=0
SUCCESS=0
FAILED=0

# Función para verificar una redirección
verify_redirect() {
    local from_url="$1"
    local expected_to="$2"
    local source="$3"
    local da="$4"
    
    TOTAL=$((TOTAL + 1))
    
    echo -e "${BLUE}[$TOTAL]${NC} Testing: ${YELLOW}$from_url${NC}"
    echo -e "    Source: $source (DA: $da)"
    
    # Obtener código de estado y Location header (sin seguir redirecciones)
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$from_url" 2>/dev/null || echo "000")
    LOCATION_HEADER=$(curl -s -I "$BASE_URL$from_url" 2>/dev/null | grep -i "^Location:" | cut -d' ' -f2- | tr -d '\r')
    
    # Verificar que sea un 301 y la Location sea correcta
    if [ "$HTTP_CODE" = "301" ]; then
        if [[ "$LOCATION_HEADER" == "$expected_to"* ]] || [[ "$LOCATION_HEADER" == "$BASE_URL$expected_to"* ]]; then
            echo -e "    ${GREEN}✓ SUCCESS${NC} [HTTP $HTTP_CODE] → $LOCATION_HEADER"
            SUCCESS=$((SUCCESS + 1))
        else
            echo -e "    ${RED}✗ FAILED${NC} [HTTP $HTTP_CODE] → Wrong destination: $LOCATION_HEADER"
            echo -e "    Expected: $expected_to"
            FAILED=$((FAILED + 1))
        fi
    else
        echo -e "    ${RED}✗ FAILED${NC} [HTTP $HTTP_CODE] - Expected 301 redirect"
        FAILED=$((FAILED + 1))
    fi
    
    echo ""
}

# =============================================================================
# PRIORIDAD 1: BLOGS JAPONESES (DA 90+)
# =============================================================================
echo -e "${YELLOW}PRIORIDAD 1: Blogs Japoneses (cocolog-nifty.com)${NC}"
echo "---------------------------------------------------"
verify_redirect "/cakesuki/2016/03/post-1582.html" "/truck-storage-solutions/" "cocolog-nifty.com" "90"
verify_redirect "/top/2008/04/post_4ce2.html" "/truck-maintenance-guides/" "cocolog-nifty.com" "90"
verify_redirect "/cakesuki/2016/02/f-51c2.html" "/spanish-trucking-resources/" "cocolog-nifty.com" "90"

# =============================================================================
# PRIORIDAD 2: FOROS POLACOS (DA 93+)
# =============================================================================
echo -e "${YELLOW}PRIORIDAD 2: Foros Polacos (home.pl)${NC}"
echo "---------------------------------------------------"
verify_redirect "/topic/984194-camping-gear/" "/best-truck-storage-solutions/" "home.pl" "93"
verify_redirect "/topic/934517-kptv-news/" "/trucking-news-updates/" "home.pl" "93"
verify_redirect "/topic/1084317-vida-content/" "/recursos-en-espanol/" "home.pl" "93"

# =============================================================================
# PRIORIDAD 3: PLATAFORMAS TÉCNICAS (DA 92+)
# =============================================================================
echo -e "${YELLOW}PRIORIDAD 3: Plataformas Técnicas (ovh.net)${NC}"
echo "---------------------------------------------------"
verify_redirect "/index.php?option=com_booklibrary&task=view&id=222" "/trucker-education-resources/" "ovh.net" "92"

# =============================================================================
# RESUMEN FINAL
# =============================================================================
echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}RESUMEN DE RESULTADOS${NC}"
echo -e "${BLUE}=================================${NC}"
echo ""
echo -e "Total verificadas:  ${YELLOW}$TOTAL${NC}"
echo -e "Exitosas:          ${GREEN}$SUCCESS${NC}"
echo -e "Fallidas:          ${RED}$FAILED${NC}"
echo ""

# Calcular porcentaje de éxito
if [ $TOTAL -gt 0 ]; then
    SUCCESS_RATE=$((SUCCESS * 100 / TOTAL))
    echo -e "Tasa de éxito:     ${YELLOW}$SUCCESS_RATE%${NC}"
fi

echo ""

# Código de salida
if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ Todas las redirecciones funcionan correctamente${NC}"
    exit 0
else
    echo -e "${RED}✗ Hay redirecciones que requieren atención${NC}"
    exit 1
fi
