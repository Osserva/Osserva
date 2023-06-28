"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const entryRouter_1 = __importDefault(require("./routes/entryRouter"));
const focusRouter_1 = __importDefault(require("./routes/focusRouter"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use('/', () => {console.log('test')});
app.use('/user', userRouter_1.default);
app.use('/entry', entryRouter_1.default);
app.use('/focus', focusRouter_1.default);
app.use(express_1.default.static('../public'));
app.use(express_1.default.static('../client'));
app.get('/test', (req, res) => {
    res.status(200).send('Hello world');
});
/**
 * 404 handler
 */
app.use('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
/**
 * Global error handler
 */
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => console.log('listening on port ', PORT));
exports.default = app;
