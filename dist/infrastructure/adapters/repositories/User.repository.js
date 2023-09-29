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
exports.UserRepository = void 0;
class UserRepository {
    constructor(mongooseModels) {
        this.mongooseModels = mongooseModels;
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mongooseModels.User.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mongooseModels.User.findById(id);
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mongooseModels.User.create(user);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mongooseModels.User.findByIdAndDelete(id);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mongooseModels.User.findByIdAndUpdate(user._id, user);
        });
    }
}
exports.UserRepository = UserRepository;
