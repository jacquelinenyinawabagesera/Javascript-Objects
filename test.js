
function User(username, email, isActive) {
    this.username = username;
    this.email = email;
    this.isActive = isActive;
}

const users = [
    new User('john_doe', 'john@example.com', true),
    new User('jane_smith', 'jane@example.com', true),
    new User('bob_johnson', 'bob@example.com', true),
    new User('sarah_lee', 'sarah@example.com', true),
    new User('mike_wilson', 'mike@example.com', true)
];


function deactivateInactiveUsers(userList) {
    return userList.map(user => {
        if (Math.random() >= 0.6) {
            user.isActive = false;
        }
        return user;
    });
}


const updatedUsers = deactivateInactiveUsers(users);
updatedUsers.forEach(user => {
    if (user.isActive === true) {
        console.log(user.username);
    }
});

