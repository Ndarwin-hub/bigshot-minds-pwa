# Bigshot Minds™ PWA

An installable PWA shell for the published Bigshot Minds™ Google Sites website.

## Live content source

The application displays the original published website at:
https://sites.google.com/view/bigshot-minds/home

The website is loaded live in an embedded browser frame. Published Google Sites changes are therefore sourced from the original site rather than copied into this repository. The service worker deliberately does not cache Google Sites responses.

## Installation

Open the GitHub Pages URL in a supported browser (Android Chrome recommended), then use the browser's Install app / Add to Home screen command. The installed app name is Bigshot Minds™.

## Updates and offline behavior

GitHub Pages serves the PWA shell. The service worker caches only the shell and its assets, checks for updates, and removes older shell caches. Google Sites content requires an internet connection and is requested from the live source.

Google Sites controls whether its pages may be embedded by other origins. If Google blocks framing in a browser, use the visible Open site link; the PWA cannot override Google's frame security policy. Full offline access to the Google Sites content is not guaranteed.

## Branding

The current repository icon asset is retained at icons/icon.svg. Replace it with the exact approved Bigshot Minds website logo asset when that source image is available; no unverified logo artwork is substituted.
