interface IUser {
    name: string;
    getName: (bufName: string) => string;
}

class User implements IUser {
    name: string;
    getName (bufName: string) {
        return `${this.name} (${bufName})`;
    }
}

const user = new User();
user.name = "name taro";
console.log(user.getName("さん"));