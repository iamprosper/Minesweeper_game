//Primitives

let a: number;
let b: boolean;
let c: string;

type Permissions_enum = 'admin' | 'user' | 'manager';
type TuplePermissions = [Permissions_enum, Permissions_enum];

//Customs objects

type BasicUser<A = boolean, P = TuplePermissions> = {
    name: string;
    surname: string;
    age: number;
    isAdmin: A;
    permissions?: P;
};

type AdvancedUser = {
    account: number;
}

type FullUser<A = boolean, P = TuplePermissions> = BasicUser<A, P> & AdvancedUser;

    
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
    permissions: ['admin', 'user'],
};

const user3: FullUser = {
    name: "James",
    surname: "Christopher",
    age: 15,
    isAdmin: true,
    account: 125,
    permissions: ['admin', 'user'],
}

const userArray: BasicUser[] = [user, user, user];

function getFirst<T>(arr: T[]): T{
    return arr[0];
};

getFirst<BasicUser>(userArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;

//Interfaces
interface BUser<A= boolean> {
    name: string;
    surname: string;
    age: number;
    isAdmin: A;
    permissions?: string[],
};

//Interfaces unions
interface BUser{
    account: number;
}

//Unknown, void, never

const logFunction = (data: unknown): void => {
    const data2: unknown = data;
    console.log(data);
    console.log(data2);
    return undefined;
}

