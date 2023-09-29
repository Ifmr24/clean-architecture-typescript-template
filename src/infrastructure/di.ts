import {mongooseModels, UserController, UserRepository} from "./adapters";
import {UserService} from "../application";

// Repositories
export const userRepository = new UserRepository(mongooseModels);

// Services
export const userService = new UserService(userRepository);

// Controllers
export const userController = new UserController(userService);
