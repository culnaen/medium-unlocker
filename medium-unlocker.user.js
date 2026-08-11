// ==UserScript==
// @name         Medium Unlocker (Medium -> Freedium) / Медиум Анлокер (Medium -> Freedium)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Redirect Medium articles to Freedium for free access / Перенаправляет статьи Medium на Freedium для бесплатного чтения
// @author       culnaen
// @homepageURL  https://github.com/culnaen/medium-unlocker
// @supportURL   https://github.com/culnaen/medium-unlocker/issues
// @updateURL    https://culnaen.github.io/medium-unlocker/medium-unlocker.user.js
// @downloadURL  https://culnaen.github.io/medium-unlocker/medium-unlocker.user.js
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔓</text></svg>
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
