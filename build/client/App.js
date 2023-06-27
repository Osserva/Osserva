"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const types = __importStar(require("./src/redux/types/focusTypes"));
const material_1 = require("@mui/material");
//hamburger menu
//open modal
//our focus item groupings
//note
//submit
const App = () => {
    const [modalState, setModalState] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    //! need endpoint from backend team
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fetch('/a', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const focusItems = yield data.json();
                yield dispatch({ type: types.SET_FOCUSES, payload: focusItems });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    function toggleModal() {
        if (modalState)
            setModalState(false);
        else
            setModalState(true);
    }
    const state = (0, react_redux_1.useSelector)((state) => { });
    return (react_1.default.createElement("div", { id: 'mainContainer' },
        react_1.default.createElement("section", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(material_1.Button, { id: 'demo-positioned-button', "aria-controls": open ? 'demo-positioned-menu' : undefined, "aria-haspopup": 'true', "aria-expanded": open ? 'true' : undefined, onClick: toggleModal }, "Menu"),
                react_1.default.createElement(material_1.Menu, { id: 'demo-positioned-menu', "aria-labelledby": 'demo-positioned-button', onClose: toggleModal, anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    }, open: modalState, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    } },
                    react_1.default.createElement(material_1.MenuItem, { onClick: toggleModal }, "Add Focus"),
                    react_1.default.createElement(material_1.MenuItem, { onClick: toggleModal }, "Calendar"),
                    react_1.default.createElement(material_1.MenuItem, { onClick: toggleModal }, "Trends"))))));
};
exports.default = App;
