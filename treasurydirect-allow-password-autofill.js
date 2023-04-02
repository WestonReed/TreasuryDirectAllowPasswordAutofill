// ==UserScript==
// @name         Treasury Direct Allow Password Autofill
// @namespace    https://www.treasurydirect.gov/*
// @version      0.1
// @description  Removes the readonly attribute on treasurydirect.gov so that password managers can autofill the input.
// @author       Weston Reed
// @match        https://www.treasurydirect.gov/RS/PW-Display.do*
// @icon         https://www.google.com/s2/favicons?domain=treasurydirect.gov
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/WestonReed/TreasuryDirectAllowPasswordAutofill/main/treasurydirect-allow-password-autofill.js
// @updateURL    https://raw.githubusercontent.com/WestonReed/TreasuryDirectAllowPasswordAutofill/main/treasurydirect-allow-password-autofill.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName('pwordinput')[0].removeAttribute('readonly');
})();