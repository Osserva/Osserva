"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// reducer store
const toolkit_1 = require("@reduxjs/toolkit");
const focusItemReducer_1 = __importDefault(require("../reducer/focusItemReducer"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        focusItems: focusItemReducer_1.default,
    },
});
