var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getName = function (bufName) {
        return "".concat(this.name, " (").concat(bufName, ")");
    };
    return User;
}());
var user = new User();
user.name = "name taro";
console.log(user.getName("さん"));
