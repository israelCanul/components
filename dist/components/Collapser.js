"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _collapserModule = _interopRequireDefault(require("./styles/collapser.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Collapser = _ref => {
  let {
    children,
    className = "",
    active = true,
    scroll = true
  } = _ref;
  const section = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (active && section.current) {
      setTimeout(() => {
        section.current.scrollIntoView({
          behavior: "smooth"
        });
      }, 200);
    }
  }, [section, active]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: section,
    style: {
      height: active && section.current ? section.current.scrollHeight + "px" : "0px"
    },
    className: "".concat(className, " ").concat(_collapserModule.default.collapser, " ").concat(active === true ? "active" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_collapserModule.default.content)
  }, children, "ssaaasperrito"));
};

var _default = Collapser;
exports.default = _default;