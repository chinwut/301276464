import { halfOf, multiply } from "./lib.js";
import doSomething from "./doSomething.js";
import { flag, touch } from "./validator.js";

console.log(flag);
touch();
console.log(flag);

console.log(halfOf(84));
console.log(multiply(21, 2));
doSomething(); // export default

// Default
function add(x, y = 0) {
  return x + y;
}
add(1);
add(1, 2);

// Rest
function userFriends(user, ...friends) {
  console.log(user + " has " + friends.length + "friends");
}
userFriends("User", "Bob", "Alice");

// Spread
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
  console.log(firstFriend);
  console.log(secondFriend);
  console.log(thirdFriends);
}
userTopFriends(...["Alice", "Bob", "Michelle"]);

// Closures
function parent() {
  const message = "Hello World";
  function child() {
    alert(message);
  }
  return child;
}
const childFN = parent();
childFN();
