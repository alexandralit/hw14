// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.element;
  }

  _createClass(App, [{
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
      this.element.classList.add('app');
    }
  }, {
    key: "render",
    value: function render() {
      document.body.appendChild(this.element);
    }
  }, {
    key: "init",
    value: function init() {
      document.querySelector('html').setAttribute('lang', 'en');
      var head = document.querySelector('head');
      var meta = document.createElement('meta');
      meta.setAttribute('charset', 'UTF-8');
      head.appendChild(meta);
      var metaContent = document.createElement('meta');
      metaContent.setAttribute('name', 'author');
      metaContent.setAttribute('content', 'AL');
      head.appendChild(metaContent);
      var title = document.createElement('title');
      title.innerHTML = 'hw14';
      head.appendChild(title);
      var linkFontawesome = document.createElement('link');
      linkFontawesome.setAttribute('rel', 'stylesheet');
      linkFontawesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
      head.appendChild(linkFontawesome);
      var linkFont = document.createElement('link');
      linkFont.setAttribute('rel', 'stylesheet');
      linkFont.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      head.appendChild(linkFont);
      this.create();
      this.render();
    }
  }]);

  return App;
}();

var _default = new App().init();

exports.default = _default;
},{}],"components/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  var response = fetch('https://fakestoreapi.com/products').then(function (res) {
    return res.json();
  });
  return response;
}
},{}],"components/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
  }

  _createClass(Header, [{
    key: "create",
    value: function create() {
      var app = document.querySelector('.app');
      var header = document.createElement('header');
      header.innerHTML = "\n            <div class=\"container-header\">\n                <div class=\"logo\">\n                    <a href=\"#\"><i class=\"fa fa-shopping-bag\"></i></a>\n                </div>\n            </div>";
      app.appendChild(header);
    }
  }, {
    key: "init",
    value: function init() {
      this.create();
    }
  }]);

  return Header;
}();

var _default = new Header().init();

exports.default = _default;
},{}],"components/nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nav = /*#__PURE__*/function () {
  function Nav() {
    _classCallCheck(this, Nav);
  }

  _createClass(Nav, [{
    key: "create",
    value: function create() {
      var nav = [{
        name: 'Home'
      }, {
        name: 'Contacts'
      }, {
        name: 'Cart'
      }];
      var ul = document.createElement('ul');
      document.querySelector('.container-header').appendChild(ul);
      nav.forEach(function (link) {
        var li = document.createElement('li');
        li.innerHTML = link.name;
        ul.appendChild(li);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.create();
    }
  }]);

  return Nav;
}();

var _default = new Nav().init();

exports.default = _default;
},{}],"components/cookie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = setCookie;
exports.getCookie = getCookie;

function setCookie(name, value) {
  var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
  document.cookie = updatedCookie;
}

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}
},{}],"components/amount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.amount = amount;

var _cookie = require("./cookie.js");

function amount() {
  if (document.querySelector('.amount')) document.querySelector('.amount').remove();
  var cookieProducts = (0, _cookie.getCookie)('ProductsCart');
  var amount = 0;
  var amountSpan = document.createElement('span');
  amountSpan.classList.add('amount');
  document.querySelector('.container-header').appendChild(amountSpan);
  amountSpan.innerHTML = amount;

  if (cookieProducts !== undefined) {
    cookieProducts.forEach(function (item) {
      amount += item.count;
      amountSpan.innerHTML = amount;
    });
  }
}
},{"./cookie.js":"components/cookie.js"}],"components/addCookie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProductCookie = addProductCookie;

var _cookie = require("./cookie.js");

var _amount = require("./amount.js");

function addProductCookie(product) {
  product.count += 1;
  var cookieProducts = (0, _cookie.getCookie)('ProductsCart');

  if (cookieProducts !== undefined) {
    for (var i = 0; i < cookieProducts.length; i++) {
      if (cookieProducts[i].index == product.index) {
        cookieProducts.splice(i, 1);
      }
    }

    cookieProducts.push(product);
  }

  (0, _cookie.setCookie)('ProductsCart', cookieProducts || [product]);
  (0, _amount.amount)();
}
},{"./cookie.js":"components/cookie.js","./amount.js":"components/amount.js"}],"components/catalog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catalog = void 0;

var _amount = require("./amount.js");

var _addCookie = require("./addCookie.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Catalog = /*#__PURE__*/function () {
  function Catalog() {
    _classCallCheck(this, Catalog);
  }

  _createClass(Catalog, [{
    key: "create",
    value: function create() {
      var app = document.querySelector('.app');
      var catalog = document.createElement('div');
      catalog.classList.add('container');
      catalog.classList.add('catalog');
      var data = JSON.parse(localStorage.getItem('Products'));
      data.forEach(function (product) {
        catalog.insertAdjacentHTML('beforeend', "\n                <div class=\"product\">\n                    <h2>".concat(product.title, "</h2>\n                    <p>").concat(product.category, "</p>\n                    <img src=\"").concat(product.image, "\" alt=\"").concat(product.category, "\">\n                    <p>$ ").concat(product.price, "</p>\n                    <div>\n                        <button class=\"add\">Add to cart</button>\n                        <button class=\"view\">View <i class=\"fa fa-eye\"></i></button>\n                    </div>\n                </div>\n            "));
      });
      (0, _amount.amount)();
      app.insertBefore(catalog, document.querySelector('footer'));
      var viewProducts = document.querySelectorAll('.view');
      var viewItem = document.createElement('div');
      viewItem.classList.add('container');
      viewProducts.forEach(function (item, index) {
        item.addEventListener('click', function () {
          if (document.querySelector('.container')) document.querySelector('.container').remove();
          location.hash = "product/".concat(index + 1);
          data.forEach(function (product) {
            if (index + 1 == product.id) {
              viewItem.insertAdjacentHTML('beforeend', "\n                            <div class=\"product_item\">\n                                <h2>".concat(product.title, "</h2>\n                                <p>").concat(product.category, "</p>\n                                <img src=\"").concat(product.image, "\" alt=\"").concat(product.category, "\">\n                                <p>").concat(product.description, "</p>\n                                <p>$ ").concat(product.price, "</p>\n                                <button class=\"add\">Add to cart</button>\n                            </div>"));
            }
          });
          app.insertBefore(viewItem, document.querySelector('footer'));
          var buttonAdd = document.querySelector('.add');
          var product = {
            index: index,
            count: 0
          };
          buttonAdd.addEventListener('click', function () {
            (0, _addCookie.addProductCookie)(product);
          });
        });
      });
      var buttonsAdd = document.querySelectorAll('.add');
      buttonsAdd.forEach(function (item, index) {
        var product = {
          index: index,
          count: 0
        };
        item.addEventListener('click', function () {
          (0, _addCookie.addProductCookie)(product);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (document.querySelector('.container')) document.querySelector('.container').remove();
      this.create();
    }
  }]);

  return Catalog;
}();

var catalog = new Catalog();
exports.catalog = catalog;
},{"./amount.js":"components/amount.js","./addCookie.js":"components/addCookie.js"}],"components/contacts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contacts = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contacts = /*#__PURE__*/function () {
  function Contacts() {
    _classCallCheck(this, Contacts);
  }

  _createClass(Contacts, [{
    key: "create",
    value: function create() {
      var app = document.querySelector('.app');
      var contacts = document.createElement('div');
      contacts.classList.add('container');
      contacts.classList.add('container-contacts');
      contacts.insertAdjacentHTML('beforeend', "\n            <div class=\"contacts\">\n                <h2>Contacts</h2>\n                <p>Morbi sapien turpis, commodo vel facilisis a, feugiat sed ipsum. Maecenas sapien ligula, molestie id dapibus sit amet, tincidunt at erat. Vestibulum faucibus, sem nec sollicitudin gravida, nulla mauris ultricies nibh, et pulvinar eros metus sed ligula. Nulla eu nibh orci. Maecenas nec ultricies erat. Integer magna magna, finibus sit amet sem vel, vestibulum posuere eros. Sed metus enim, auctor vitae lacus non, congue vehicula est. Quisque egestas ipsum vel dolor ultrices, non bibendum erat tempor. In ac ornare tellus. Praesent ac fermentum magna, sit amet venenatis diam. Cras ac magna purus. Nullam ac erat quis lacus venenatis bibendum eget in risus. Ut id rhoncus dui, at sollicitudin erat. Aliquam erat volutpat. Aenean vehicula finibus risus, eget tincidunt eros egestas in. Donec eleifend pharetra tortor et hendrerit.</p>\n                <p>Sed lectus velit, mattis in felis sollicitudin, egestas consequat neque. Cras nec quam et lacus faucibus dignissim non vel tellus. Nam arcu justo, scelerisque ac pretium at, lacinia at velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vestibulum nunc tellus. Donec rutrum libero sit amet lacinia scelerisque. Nunc tristique consectetur lectus, at vulputate arcu facilisis id.</p>\n            </div>\n        ");
      app.insertBefore(contacts, document.querySelector('footer'));
    }
  }, {
    key: "init",
    value: function init() {
      if (document.querySelector('.container')) document.querySelector('.container').remove();
      this.create();
    }
  }]);

  return Contacts;
}();

var contacts = new Contacts();
exports.contacts = contacts;
},{}],"components/price.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderPrice = orderPrice;

function orderPrice() {
  var arrPrice = document.querySelectorAll('.products_in_cart div:last-child p span'),
      price = document.querySelector('.price'),
      sum = 0;
  arrPrice.forEach(function (item) {
    sum += parseFloat(item.innerHTML);
  });
  price.innerHTML = "<p>Order Summary: $ ".concat(Math.floor(sum * 100) / 100, "</p>\n                <button class=\"order\">Order</button>");
}
},{}],"components/cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cart = void 0;

var _cookie = require("./cookie.js");

var _amount = require("./amount.js");

var _price = require("./price.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart = /*#__PURE__*/function () {
  function Cart() {
    _classCallCheck(this, Cart);
  }

  _createClass(Cart, [{
    key: "create",
    value: function create() {
      var app = document.querySelector('.app');
      var cart = document.createElement('div');
      cart.classList.add('container');
      cart.classList.add('cart');
      var data = JSON.parse(localStorage.getItem('Products'));
      var cookieProducts = (0, _cookie.getCookie)('ProductsCart') || [];
      if (cookieProducts.length == 0) cart.innerHTML = '<div><h2>The cart is empty</h2><div>';else cart.innerHTML = '<div><h2>Cart</h2><div>';
      cookieProducts.forEach(function (item) {
        data.forEach(function (product) {
          if (product.id == item.index + 1) {
            cart.insertAdjacentHTML('beforeend', "\n                        <div class=\"products_in_cart\">\n                            <div>\n                                <img src=\"".concat(product.image, "\" alt=\"").concat(product.category, "\">\n                                <h2>").concat(product.title, "</h2>\n                                <p>$<span>").concat(product.price, "</span></p>\n                                <i class=\"fa fa-times-circle\"></i>\n                            </div>\n                            <div>\n                                <i class=\"fa fa-plus\"></i>\n                                <p>").concat(item.count, "</p>\n                                <i class=\"fa fa-minus\"></i>\n                            </div>\n                            <div>\n                                <p>$ <span>").concat(Math.floor(product.price * item.count * 100) / 100, "</span></p>\n                            </div>\n                        </div>"));
          }
        });
      });
      app.insertBefore(cart, document.querySelector('footer'));
      var price = document.createElement('div');
      price.classList.add('price');
      cart.appendChild(price);
      (0, _price.orderPrice)();
      (0, _amount.amount)();
      document.querySelector('.order').addEventListener('click', function () {
        if (cookieProducts.length != 0) {
          cart.innerHTML = '<div><h2>Your order is being processed</h2><div>';
          (0, _cookie.setCookie)('ProductsCart', []);
          (0, _amount.amount)();
        }
      });
      var iconeDel = document.querySelectorAll('.fa-times-circle');
      iconeDel.forEach(function (icone, index) {
        icone.addEventListener('click', function () {
          for (var i = 0; i < cookieProducts.length; i++) {
            if (index === i) cookieProducts.splice(i, 1);
          }

          (0, _cookie.setCookie)('ProductsCart', cookieProducts);
          icone.parentNode.parentNode.remove();
          (0, _amount.amount)();
          (0, _price.orderPrice)();
        });
      });
      var counts = document.querySelectorAll('.products_in_cart div:nth-child(2)');
      counts.forEach(function (count, index) {
        var minus = count.querySelector(".fa-minus"),
            p = count.querySelector("p"),
            num = count.querySelector("p").innerText,
            plus = count.querySelector(".fa-plus"),
            productPrice = count.parentNode.querySelector('.products_in_cart div:first-child p span').innerText,
            product = count.parentNode.querySelector('.products_in_cart div:last-child p span');
        plus.addEventListener("click", function () {
          num++;
          p.innerHTML = num;
          product.innerHTML = Math.floor(productPrice * num * 100) / 100;
          cookieProducts.forEach(function (item, i) {
            if (i == index) item.count = num;
          });
          (0, _cookie.setCookie)('ProductsCart', cookieProducts);
          (0, _amount.amount)();
          (0, _price.orderPrice)();
        });
        minus.addEventListener("click", function () {
          if (num > 1) {
            num--;
            p.innerHTML = num;
            product.innerHTML = Math.floor(productPrice * num * 100) / 100;
            cookieProducts.forEach(function (item, i) {
              if (i == index) item.count = num;
            });
            (0, _cookie.setCookie)('ProductsCart', cookieProducts);
            (0, _amount.amount)();
            (0, _price.orderPrice)();
          }
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (document.querySelector('.container')) document.querySelector('.container').remove();
      if (document.querySelector('.amount')) document.querySelector('.amount').remove();
      this.create();
    }
  }]);

  return Cart;
}();

var cart = new Cart();
exports.cart = cart;
},{"./cookie.js":"components/cookie.js","./amount.js":"components/amount.js","./price.js":"components/price.js"}],"components/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
  }

  _createClass(Footer, [{
    key: "create",
    value: function create() {
      var app = document.querySelector('.app');
      var footer = document.createElement('footer');
      footer.insertAdjacentHTML('beforeend', "\n            <div class=\"container-footer\">\n                <div class=\"logo\">\n                    <a href=\"#\"><i class=\"fa fa-shopping-bag\"></i></a>\n                </div>\n                <div class=\"footer-contacts\">\n                    <p><i class=\"fa fa-map\"></i><span> 59 Street, Rose Town, 05 Rive House</span></p>\n                    <p><i class=\"fa fa-phone\"></i><span> +123 345 67890</span></p>\n                    <p><i class=\"fa fa-envelope-open\"></i><span> info@gmail.com</span></p>\n                </div>\n            </div>");
      app.appendChild(footer);
    }
  }, {
    key: "init",
    value: function init() {
      this.create();
    }
  }]);

  return Footer;
}();

var _default = new Footer().init();

exports.default = _default;
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("./components/app.js"));

var _api = _interopRequireDefault(require("./components/api.js"));

var _header = _interopRequireDefault(require("./components/header.js"));

var _nav = _interopRequireDefault(require("./components/nav.js"));

var _catalog = require("./components/catalog.js");

var _contacts = require("./components/contacts.js");

var _amount = require("./components/amount.js");

var _cart = require("./components/cart.js");

var _footer = _interopRequireDefault(require("./components/footer.js"));

require("./css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (localStorage.getItem('Products') == null) {
  (0, _api.default)().then(function (data) {
    localStorage.setItem('Products', JSON.stringify(data));

    _catalog.catalog.init();
  });
} else {
  _catalog.catalog.init();
}

var links = document.querySelectorAll('li');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    switch (link.innerHTML) {
      case 'Home':
        _catalog.catalog.init();

        history.pushState("", document.title, window.location.pathname);
        break;

      case 'Contacts':
        _contacts.contacts.init();

        location.hash = link.innerHTML;
        break;

      case 'Cart':
        _cart.cart.init();

        location.hash = link.innerHTML;
        break;
    }
  });
});
},{"./components/app.js":"components/app.js","./components/api.js":"components/api.js","./components/header.js":"components/header.js","./components/nav.js":"components/nav.js","./components/catalog.js":"components/catalog.js","./components/contacts.js":"components/contacts.js","./components/amount.js":"components/amount.js","./components/cart.js":"components/cart.js","./components/footer.js":"components/footer.js","./css/style.css":"css/style.css"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57785" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/hw14.e31bb0bc.js.map