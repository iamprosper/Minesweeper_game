//Primitives
var a;
var b;
var c;
var user = {
    name: "Lade",
    surname: "Cruz",
    age: 22,
    isAdmin: true
};
var user2 = {
    name: "Toto",
    surname: "Daniel",
    age: 24,
    isAdmin: true,
    permissions: ['admin', 'user']
};
var user3 = {
    name: "James",
    surname: "Christopher",
    age: 15,
    isAdmin: true,
    account: 125,
    permissions: ['admin', 'user']
};
var userArray = [user, user, user];
function getFirst(arr) {
    return arr[0];
}
;
getFirst(userArray);
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
;
//Unknown, void, never
var logFunction = function (data) {
    var data2 = data;
    console.log(data);
    console.log(data2);
    return undefined;
};
