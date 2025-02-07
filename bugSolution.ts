function greeter(person: string): string {
  return "Hello, "+ person +"!";
}

let user = [1,2,3];
//console.log(greeter(user)); //This will cause an error because user is an array not a string
console.log(greeter(user.toString()));
// Expected output: Hello, 1,2,3!