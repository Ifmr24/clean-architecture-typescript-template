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
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    id: '1',
                    name: 'test',
                    email: ''
                }
            ];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('findbyid: ', id);
            return {
                id: '1',
                name: 'test',
                email: ''
            };
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return user;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('remove: ', id);
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return user;
        });
    }
}
exports.UserRepository = UserRepository;
