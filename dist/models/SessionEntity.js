"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const typeorm_1 = require("typeorm");
const BookEntity_1 = require("./BookEntity");
const UserEntity_1 = require("./UserEntity");
const CommentEntity_1 = require("./CommentEntity");
let Session = class Session {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Session.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], Session.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Session.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Session.prototype, "pageStart", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Session.prototype, "pageEnd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BookEntity_1.Book, (book) => book.sessions),
    __metadata("design:type", BookEntity_1.Book)
], Session.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.User, (user) => user.sessions),
    __metadata("design:type", UserEntity_1.User)
], Session.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CommentEntity_1.Comment, (comment) => comment.session),
    __metadata("design:type", Array)
], Session.prototype, "comments", void 0);
Session = __decorate([
    (0, typeorm_1.Entity)()
], Session);
exports.Session = Session;
//# sourceMappingURL=SessionEntity.js.map