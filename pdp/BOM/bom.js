"use strict";

// - Browser BOM
// - Window
// - Screen
// - Location
// - History
// - Navigator
// - Popup Alert / Promt
// - Timing
// - Cookies

console.log(navigator.platform);

const currentBrowser = document.querySelector(".current-browser__content");
currentBrowser.textContent = navigator.userAgent;

const navigatorPlatform = document.querySelector(".navigator-platform__content");
navigatorPlatform.textContent = navigator.platform;

const screenWidth = document.querySelector(".screen-width__content");
screenWidth.textContent = screen.width;

const screenHeight = document.querySelector(".screen-height__content");
screenHeight.textContent = screen.height;
