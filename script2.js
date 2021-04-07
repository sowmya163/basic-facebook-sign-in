var database = [
    {
        username: "sowmyatha",
        password: "secret"
    }
];

var newFeed = [
    {
        username: "bobby",
        timeline: "so tired from all that learning"
    },
    {
        username: "sally",
        timeline: "javascript is so cool"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("what is your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newFeed);
    } else {
        alert("sorry, wrong password");
    }
}

signIn(userNamePrompt, passwordPrompt);