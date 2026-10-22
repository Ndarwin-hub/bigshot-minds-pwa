# Bigshot Minds PWA

A cross-device installable PWA shell that displays the live published Bigshot Minds Google Sites page.

## Source of truth and automatic updates

The PWA embeds the original published website directly rather than maintaining a second manually copied directory. If the original page can be framed by the browser, its current layout, images, links, embedded content and future published edits come from Google Sites itself; no separate content rebuild is needed.

Source: https://sites.google.com/view/bigshot-minds/home

## Compatibility

Responsive full-viewport layout for Android, iOS/iPadOS, Windows, macOS, Linux, and desktop/mobile browsers. Install support depends on the browser and operating system. On iOS/iPadOS, use Safari's Add to Home Screen. On desktop Chromium browsers, use Install app when available.

## Important browser limitation

Google Sites controls whether its page may be displayed inside an iframe. If Google blocks embedded viewing in a particular browser, the PWA shows a direct link to the official site. That direct link always opens the authoritative live site, but it opens outside the PWA shell. The shell cannot override Google's frame-security policy.

## Updates

PWA shell files deploy to GitHub Pages on pushes to `main`. The service worker uses a versioned cache for the shell only; the official website remains hosted and updated by Google Sites.