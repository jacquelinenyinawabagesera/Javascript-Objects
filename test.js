function User(userName,email,isActive){
    this.username = userName;
    this.email = email;
    this.isActive = isActive;
}

let  users =[new User("Jacky","jacky@gmail.com",true),new User("Jack","jack@gmail.com",false),new User("Jackson","jackson@gmail.com",true),new User("Jane","jane@gmail.com",false),new User("James","james@gmail.com",true)]

function deactivatedUsers(users){
    users.filter(user => {
        if(user.isActive === false){
            return user
        }
    })
}
console.log(deactivatedUsers(users))

// Create an array of users. Write a program that loops through the array and deactivates users who have not logged 
// in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.