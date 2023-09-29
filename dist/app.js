"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const infrastructure_1 = require("./infrastructure");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', infrastructure_1.registerRoutes);
(0, mongoose_1.connect)('mongodb://localhost:27017', {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 15000,
});
app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
    }
    catch (e) {
        console.log(e);
        process.exit(0);
    }
});
