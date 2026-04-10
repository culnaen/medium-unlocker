// ==UserScript==
// @name         Medium → Freedium
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Open Medium stories through Freedium
// @author       culnaen
// @match        https://medium.com/*
// @match        https://*.medium.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Auto-redirect current page if it's a Medium story
    const url = new URL(window.location.href);
    if (isMediumStory(url)) {
        const freedium = buildFreediumUrl(url);
        window.location.replace(freedium);
        return;
    }

    // Intercept clicks on Medium story links
    document.addEventListener(
        'click',
        (e) => {
            const a = e.target.closest('a');
            if (!a || !a.href) return;

            const url = new URL(a.href);

            if (!isMediumStory(url)) return;

            e.preventDefault();
            e.stopPropagation();

            const freedium = buildFreediumUrl(url);
            window.open(freedium, '_blank');
            return false;
        },
        true
    );

    function isMediumStory(url) {
        return /-[a-f0-9]{10,}$/.test(url.pathname);
    }

    function buildFreediumUrl(url) {
        let publication = null;

        if (url.hostname === 'medium.com') {
            const parts = url.pathname.split('/');
            if (parts.length > 2) publication = parts[1];
        } else {
            const h = url.hostname.split('.');
            if (h[0] === 'blogs' && h.length >= 3) publication = h[1];
        }

        const slug = url.pathname.split('/').pop();
        const mediumUrl = publication
            ? `https://medium.com/${publication}/${slug}`
            : `https://medium.com/${slug}`;

        return 'https://freedium-mirror.cfd/' + mediumUrl;
    }
})();
