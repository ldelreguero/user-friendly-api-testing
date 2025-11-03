# API Testing for Users 🚀

## Empoderando a usuarios funcionales para probar APIs sin conocimientos técnicos

Este proyecto nace de un desafío concreto: **acercar las pruebas de APIs a quienes mejor conocen el negocio** — usuarios funcionales, responsables de procesos y equipos de soporte — sin que necesiten aprender conceptos técnicos complejos.

### 🎯 El Problema

En muchos proyectos, especialmente en sistemas legacy, las pruebas no están institucionalizadas. La validación recae en los propios usuarios que solicitan cambios, lo que frecuentemente resulta en:
- Casos reales sin cubrir
- Aumento de incidencias en producción
- Retrabajo constante
- Brecha de comunicación entre usuarios y equipos técnicos

### 💡 La Solución

Un framework completo de dos componentes diseñado con ayuda de IA (ChatGPT y GitHub Copilot) que permite a cualquier persona probar APIs usando herramientas familiares:


#### 1. **Colección de Postman Lista para Usar** 📮
- Endpoints predefinidos con estructura de requests y tests
- Scripts automáticos que registran información relevante de cada prueba
- Ejecuta
- Todo el historial de pruebas se guarda automáticamente

#### 2. **Visualizador HTML Interactivo** 📊
- Transforma el JSON crudo de Postman en reportes claros y visuales
- Cualquier persona puede analizar resultados sin experiencia técnica
- Detecta diferencias entre pruebas, respuestas inesperadas y tendencias
- No requiere instalación ni backend

## 📁 Archivos Incluidos

- **`Postman Echo.postman_collection.json`**: Colección de ejemplo con requests HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`). Incluye scripts de test y post-procesamiento para guardar información relevante de cada request y response.
- **`Postman Echo.postman_test_run.json`**: Ejemplo de archivo de resultados exportado desde Postman (Runner / Collection Run). Contiene el log estructurado de cada request, tests ejecutados y sus resultados; es el insumo que consume el visualizador HTML para generar métricas, comparaciones y reportes.
- **`script.md`**: Documentación del script de test/post-response para Postman, que extrae y codifica información de requests y responses en tests sintéticos.
- **`Visualizador.html`**: Visualizador HTML interactivo para analizar resultados de ejecución de colecciones Postman. Soporta métricas, comparación de iteraciones, detección de flakiness y visualización de diferencias.

## 🚀 Cómo Usar

### Configuración Inicial (solo una vez)

1. **Prepara tu colección de Postman:**
   - Importa tu colección de Postman o usa `Postman Echo.postman_collection.json` como ejemplo
   - Inserta el post-response script de `script.md` a nivel de colección

### Flujo de Pruebas

1. **Ejecuta la colección** en Postman
2. **Exporta los resultados** como archivo JSON
3. **Abre `Visualizador.html`** en tu navegador
4. **Carga el JSON** de resultados y analiza visualmente

## ✨ Características del Visualizador

- 🎨 Temas claro/oscuro
- 📊 Métricas globales y por request (tiempos, éxito/fallo, flakiness)
- 🔍 Exploración de bodies, URLs y headers completos
- 🔄 Comparación entre iteraciones
- 🗺️ Heatmaps de tiempos de respuesta
- 📋 Herramientas de copia y exportación
- 🌐 Sin backend: funciona 100% en el navegador

## 📈 Beneficios Comprobados

### Para Usuarios Funcionales
- ✅ Prueban con sus propios casos sin depender de IT
- ✅ Usan herramientas familiares (Excel por ejemplo para crear datasets a través de macros)
- ✅ Generan evidencias comprensibles
- ✅ Detectan problemas antes de producción

### Para Equipos Técnicos
- ✅ Menos interrupciones por consultas de validación
- ✅ Feedback más rápido y preciso
- ✅ Reportes claros y reproducibles
- ✅ Reducción de retrabajo

### Para la Organización
- ✅ Menos errores en producción
- ✅ Mejor comunicación entre áreas
- ✅ Transición ordenada hacia profesionalización de pruebas
- ✅ Cultura de calidad compartida

## 🔧 Scripts de Postman

El script incluido en `script.md` realiza automáticamente:
- Guarda la URL completa de cada request en un test sintético (`__URL__...`)
- Guarda el body de la request y de la response (`__REQBODY__...`, `__BODY__...`)
- Codifica los datos en Base64 para evitar problemas de caracteres
- Limita la longitud de los datos para optimizar tamaño de archivos
- Permite al visualizador extraer y mostrar toda la información relevante

## 🛠️ Requisitos

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Postman para ejecutar colecciones y exportar resultados

## 🌟 Filosofía del Proyecto

Este proyecto no se trata de quitar responsabilidad a los usuarios ni de delegar todo al equipo técnico. Se trata de:

> **Formalizar y acompañar el proceso de testing, facilitando una transición ordenada que permita capturar casos reales y profesionalizar progresivamente las pruebas.**

Cuando la calidad deja de ser un área aislada y se convierte en un valor compartido, todos ganamos.

## 🤖 Desarrollado con IA

Todo el desarrollo técnico (macros, scripts, visualizador) fue creado con la asistencia de ChatGPT y GitHub Copilot. La estrategia y diseño del framework son 100% personales, pero la ejecución fue potenciada por IA.

**Esto demuestra que la IA nos permite explorar, innovar y mejorar procesos de formas antes impensables.**

## 🔄 Reutilización

Este framework es **completamente reutilizable** para cualquier colección de Postman:

1. Inserta el post-response script a tu colección
2. Ejecuta la colección
3. Exporta los resultados (JSON)
4. Abre el visualizador HTML e importa el JSON
5. ¡Listo! Visualiza resultados profesionales

## 📝 Licencia

Proyecto de código abierto. Puedes modificar y adaptar libremente según tus necesidades.

## 👤 Autor

**Lucas del Reguero Martínez**

- LinkedIn: [lucas-del-reguero-martinez](https://www.linkedin.com/in/lucas-del-reguero-martinez/)
- GitHub: [ldelreguero](https://github.com/ldelreguero)

---

💬 **¿Preguntas o sugerencias?** Siéntete libre de contribuir y mejorar este proyecto.