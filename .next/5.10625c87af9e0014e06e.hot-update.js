webpackHotUpdate(5,{

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(518);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7Ozs7O0FBRVA7QUFDQSxJQUFJLFlBQUo7O0FBRUE7QUFDQTtBQUNBO0FBUkE7QUFTQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUNyRTtBQUNBO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUhELE9BR08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2IsQUFFSjtXQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ25COzs7QUFFRCxBQUNBO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9iZXJ0b2NhbnR1L3VkZW15X2V0aF9jb3Vyc2UvZGVjZW50cmFsaXplZF9jcm93ZF9mdW5kaW5nIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/robertocantu/udemy_eth_course/decentralized_crowd_funding/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/robertocantu/udemy_eth_course/decentralized_crowd_funding/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMDYyNWM4N2FmOWUwMDE0ZTA2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz84NzBhMDhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgd2ViMyBtb2R1bGVcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG4vLyBEZWNsYXJlIG5ldyB3ZWIzIHZhcmlhYmxlXG5sZXQgd2ViMztcblxuLy8gQ29uZGl0aW9uYWwgdGhhdCB1c2VzIHRoZSBpbmplY3Qgd2ViMyBmcm9tIG1ldGFtYXNrXG4vLyB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMuIE90aGVyd2lzZSwgaXQgY29ubmVjdHMgdXNpbmdcbi8vIEluZnVyYS5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2UgYXJlIGluIHRoZSBicm93c2VyIGFuZCBtZXRhbWFzayBpcyBydW5uaW5nLlxuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxuICAgICAgICAnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My8zOGM5YTE1MDM4MGY0YjYzYmUyYWRmN2M0YzU1MDFiZidcbiAgICApO1xuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbi8vIEV4cG9ydCBpbnN0YW5jZSBvZiB3ZWIzXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V0aGVyZXVtL3dlYjMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFTQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFHQTs7O0FBSUE7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9