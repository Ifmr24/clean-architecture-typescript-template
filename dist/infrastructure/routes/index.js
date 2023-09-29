"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const User_route_1 = require("./User.route");
const registerRoutes = (0, express_1.Router)();
exports.registerRoutes = registerRoutes;
registerRoutes.use('/users', User_route_1.userRouter);
