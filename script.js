(function () {
    try {
        // URL completa con variables ya resueltas
        const rawUrl = pm.request && pm.request.url ? pm.request.url.toString() : '';

        // (Opcional) Limitar longitud para evitar inflar el JSON final
        const MAX = 2000;
        const recorte = rawUrl.length > MAX ? rawUrl.slice(0, MAX) + '...[TRUNCADO]' : rawUrl;

        // Base64 seguro para Unicode
        const base64 = btoa(unescape(encodeURIComponent(recorte)));

        // Patrón: __URL__<requestId>__<iter>__<base64>
        // IMPORTANTE: No insertes segmentos extra con '__' o romperías el parser.
        const reqId = (pm.request && pm.request.id) ? pm.request.id : 'undefined';
        const iter = pm.info && typeof pm.info.iteration !== 'undefined' ? pm.info.iteration : 0;
        const testName = `__URL__${reqId}__${iter}__${base64}`;

        pm.test(testName, function () {
            pm.expect(true).to.be.true;
        });
    } catch (e) {
        console.log('Error creando test __URL__', e);
    }
})();

(function () {
    const raw = pm.response.text() || '';
    // Limitar (por ejemplo) a 4000 caracteres para no inflar demasiado el JSON
    const max = 4000;
    const recorte = raw.length > max ? raw.slice(0, max) + '...[TRUNCADO]' : raw;

    // Codificar para que no rompa el JSON del reporte (Base64)
    const base64 = btoa(unescape(encodeURIComponent(recorte)));

    // Nombre especial de test: __BODY__<requestId>__<iter>__<base64>
    const testName = `__BODY__${pm.request.id}__${pm.info.iteration}__${base64}`;

    pm.test(testName, function () {
        pm.expect(true).to.be.true;
    });
})();