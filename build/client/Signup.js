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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
//import styles from './LoginSignup.scss';
const Signup = () => {
    const [userCreated, setUserCreated] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (userCreated) {
            navigate('/login');
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        const user = {
            username: target.username.value,
            password: target.password.value,
        };
        console.log(user);
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((data) => {
            if (data.status === 201) {
                setUserCreated(true);
            }
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return (react_1.default.createElement("div", { id: 'signupPage' },
        react_1.default.createElement("div", { className: 'ProjectName' }, "Code Snippets"),
        react_1.default.createElement("div", { className: 'credentialBox' },
            react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: 'username' }, "Username"),
                    react_1.default.createElement("input", { type: 'text', name: 'username' })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("label", { htmlFor: 'password' }, "Password"),
                    react_1.default.createElement("input", { type: 'password', name: 'password' })),
                react_1.default.createElement("button", { type: 'submit' }, "Sign Up")),
            react_1.default.createElement("p", null, "Already a user?"),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/login' },
                react_1.default.createElement("button", null, "Login")))));
};
exports.default = Signup;
