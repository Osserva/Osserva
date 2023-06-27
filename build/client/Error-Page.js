"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ErrorPage = () => {
    const error = (0, react_router_dom_1.useRouteError)();
    console.error(error);
    return (react_1.default.createElement("div", { id: 'error-page' },
        react_1.default.createElement("h1", null, "Oops!"),
        react_1.default.createElement("p", null, "Sorry, an unexpected error has occurred."),
        react_1.default.createElement("p", null,
            react_1.default.createElement("i", null, error.statusText || error.message))));
};
exports.default = ErrorPage;
