"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.StyledBox = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
// export const StyledBox = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
// `;
exports.StyledBox = styles_1.styled(material_1.Box)(function (_a) {
    var theme = _a.theme;
    return __assign(__assign({}, theme), { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '0.14rem solid #000', boxShadow: 24, p: 4 });
});
