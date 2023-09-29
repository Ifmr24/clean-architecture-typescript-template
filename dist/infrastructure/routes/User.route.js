"use strict";
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
exports.userRouter = void 0;
const di_1 = require("../di");
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield di_1.userController.find(req);
        return res.status(200).json(users);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
}));
userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield di_1.userController.findById(req);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
}));
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield di_1.userController.create(req);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
}));
userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield di_1.userController.delete(req);
        return res.status(200).json({ message: 'User deleted' });
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
}));
userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield di_1.userController.update(req);
        return res.status(200).json(user);
    }
    catch (e) {
        return res.status(500).json({ message: e.message });
    }
}));
