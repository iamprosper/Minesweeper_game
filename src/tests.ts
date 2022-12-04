let a: number;
let b: boolean;
let c: string;

// type User = {
//     name: string;
//     surname: string;
//     age: number;
//     isAdmin: boolean;
// };

interface BasicUser {
    name: string;
    surname: string;
    age: number;
    isAdmin: boolean;
    permissions?: string[],
};

// interface UserWithPermissions extends BasicUser{
//     permissions: string[];
// }

const user: BasicUser = {
    name: "Lade",
    surname: "Cruz",
    age: 22,
    isAdmin: true,
};

const user2: BasicUser = {
    name: "Toto",
    surname: "Daniel",
    age: 24,
    isAdmin: true,
    permissions: ['manager', 'operator', 'instructor'],
};

const userArray: BasicUser[] = [user, user, user];

function getFirst<T>(arr: T[]): T{
    return arr[0];
};

getFirst<BasicUser>(userArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;

