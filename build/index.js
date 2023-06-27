"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("./App"));
require("./src/scss/App.scss");
const Main = () => {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(App_1.default, null) }))));
};
const root = (0, client_1.createRoot)(document.getElementById('app'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(Main, null)));
