# treasurydirect.gov Allow Password Autofill
treasurydirect.gov has this annoying virtual keyboard that prevents password managers ([Bitwarden](https://bitwarden.com/), [1Password](https://1password.com/), etc.) from autofilling the field. This script removes the `readonly` attribute so that you can type the password in, copy + paste it, or use a password manager.

## Installation
1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
2. Open Greasemonkey and click __New user script...__
3. Copy + paste the code from [treasurydirect-allow-password-autofill.js](treasurydirect-allow-password-autofill.js), and save
