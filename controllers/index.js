var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { USER_DATA_MOCK } from './../mock/user.mock';
var users = USER_DATA_MOCK;
export var getUsers = function (_a) {
    var response = _a.response;
    response.body = users;
};
export var getUser = function (_a) {
    var params = _a.params, response = _a.response;
    console.log(params);
    var user = searchUserById(params.id);
    if (user) {
        response.status = 200;
        response.body = user;
    }
    else {
        response.status = 404;
        response.body = { message: "User: " + params.id + " not found" };
    }
};
export var addUser = function (_a) {
    var request = _a.request, response = _a.response;
    return __awaiter(void 0, void 0, void 0, function () {
        var body, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, request.body()];
                case 1:
                    body = _b.sent();
                    user = body.value;
                    users.push(user);
                    response.body = { message: 'OK added' };
                    response.status = 200;
                    return [2 /*return*/];
            }
        });
    });
};
export var updateUser = function (_a) {
    var params = _a.params, request = _a.request, response = _a.response;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, body, updateInfos;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    user = searchUserById(params.id);
                    if (!user) return [3 /*break*/, 2];
                    return [4 /*yield*/, request.body()];
                case 1:
                    body = _b.sent();
                    updateInfos = body.value;
                    user = __assign(__assign({}, user), updateInfos);
                    users = __spreadArrays(users.filter(function (user) { return user.id !== params.id; }), [user]);
                    response.status = 200;
                    response.body = { message: 'OK updated' };
                    return [3 /*break*/, 3];
                case 2:
                    response.status = 404;
                    response.body = { message: "User not found" };
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
};
export var deleteUser = function (_a) {
    var params = _a.params, response = _a.response;
    var userIndex = users.findIndex(function (user) { return user.id == params.id; });
    if (userIndex) {
        users.splice(userIndex);
    }
    response.body = { message: 'OK' };
    response.status = 200;
};
export var searchUserById = function (id) { return users.filter(function (user) { return user.id == id; })[0]; };
