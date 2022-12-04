var a;
var b;
var c;
;
// interface UserWithPermissions extends BasicUser{
//     permissions: string[];
// }
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
    permissions: ['manager', 'operator', 'instructor']
};
var userArray = [user, user, user];
function getFirst(arr) {
    return arr[0];
}
;
getFirst(userArray);
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
