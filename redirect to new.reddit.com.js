// ==UserScript==
// @name               redirect to new.reddit.com
// @namespace          https://discord.gg/zRFUpx6
// @description        Always redirects to new.reddit.com, avoiding Reddit's redesign.
// @match            *://www.reddit.com/*
// @exclude            *://www.reddit.com/poll/*
// @version            1.00
// @run-at             document-start
// @author             TheophTTV
// @grant              none
// @icon               https://freelogopng.com/images/all_img/1658834272reddit-logo-transparent.png
// ==/UserScript==

window.location.replace("https://new.reddit.com" + window.location.pathname + window.location.search);