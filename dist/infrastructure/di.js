"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.userService = exports.userRepository = void 0;
const adapters_1 = require("./adapters");
const application_1 = require("../application");
// Repositories
exports.userRepository = new adapters_1.UserRepository(adapters_1.mongooseModels);
// Services
exports.userService = new application_1.UserService(exports.userRepository);
// Controllers
exports.userController = new adapters_1.UserController(exports.userService);
