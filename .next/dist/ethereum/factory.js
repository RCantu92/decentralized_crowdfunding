'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creating contract instance from
// already deployed CampaignFactory
// Import created copy of web3
var instance = new _web2.default.eth.Contract(
// First argument is contract ABI
JSON.parse(_CampaignFactory2.default.interface),
// Second argument is the address
'0xbC94Bc9CbDee96365856663695b8681cB3f679F6');

// Exporting contract instance

// Import compiled CampaignFactory contract
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQXFCOzs7Ozs7QUFFNUI7QUFDQTtBQU5BO0FBT0EsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYTtBQUMxQjtBQUNBLEtBQUEsQUFBSyxNQUFNLDBCQUZFLEFBRWIsQUFBMkI7QUFDM0I7QUFISixBQUFpQixBQUliOztBQUdKLEFBQ0E7O0FBYkE7a0JBYUEsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2JlcnRvY2FudHUvdWRlbXlfZXRoX2NvdXJzZS9kZWNlbnRyYWxpemVkX2Nyb3dkX2Z1bmRpbmcifQ==