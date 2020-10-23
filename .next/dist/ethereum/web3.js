'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declare new web3 variable
var web3 = void 0;

// Conditional that uses the inject web3 from metamask
// under certain conditions. Otherwise, it connects using
// Infura.
// Import the web3 module
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/38c9a150380f4b63be2adf7c4c5501bf');
    web3 = new _web2.default(provider);
}

// Export instance of web3
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7Ozs7O0FBRVA7QUFDQSxJQUFJLFlBQUo7O0FBRUE7QUFDQTtBQUNBO0FBUkE7QUFTQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUNyRTtBQUNBO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUhELE9BR08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2IsQUFFSjtXQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ25COzs7QUFFRCxBQUNBO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9iZXJ0b2NhbnR1L3VkZW15X2V0aF9jb3Vyc2UvZXRoZXJldW1fYW5kX3NvbGlkaXR5LXRoZV9jb21wbGV0ZV9kZXZlbG9wZXJzX2d1aWRlL2RlY2VudHJhbGl6ZWRfY3Jvd2RfZnVuZGluZyJ9