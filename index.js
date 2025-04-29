// 1. Create a function constructor called Employee that accepts a name, position, and salary. 
// Create an array of 5 employees. Write a program that increases the salary by 10% for employees who
//  have the position "developer" and print the updated employee list

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary; 
}

let employees = [
    new Employee("jacky", "Developer", 1000),
    new Employee("jack", "Researcher", 500),
    new Employee("jackie", "manager", 1000),
    new Employee("Jackson","Doctor",1500),
    new Employee("Jane","developer",2000)
];


function increaseDeveloperSalary(employees) {
    return employees.filter(employee => {
        if (employee.position.toLowerCase() === 'developer') {
            employee.salary += employee.salary * 0.1; 
        }
        return employee;
    });
}

console.log(increaseDeveloperSalary(employees));


//2.  Given an array of product objects (each with name, price, and inStock properties), write a function that returns 
// a new array containing only the products that are inStock: true, and sort the available products by price in ascending order.


function sortingProducts(products) {
    const productsInStock = products.filter(product => product.inStock === true);

  return productsInStock.sort((a, b) => a.price - b.price);

}

const products = [
    { name: "Bottle", price: 1200, inStock: true },
    { name: "Charger", price: 800, inStock: false },
    { name: "Phone", price: 600, inStock: true },
    { name: "Socks", price: 300, inStock: true },
    { name: "Necklace", price: 100, inStock: false }
];

const availableSortedProducts = sortingProducts(products);
console.log(availableSortedProducts);


//3. Create an object called grades where the keys are student names and the values are arrays of their scores.
//  Write a function that calculates and prints each student's average score, and if the average is above 70,
//  print "Pass"; otherwise, print "Fail" next to their name.


function calculateAverage(grades) {
    grades.forEach(student => {
        let sum = 0;
        student.scores.forEach(score => {
            sum += score;
        });
        let average = sum / student.scores.length;

        if (average > 70) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    });
}

const grades = [
    { name: "Jacky", scores: [70,80,90,80]},
    { name: "Jack", scores: [60,60,60,60] }
];

calculateAverage(grades);



//4. Write a function constructor called User that takes username, email, and isActive (boolean). 
// Create an array of users. Write a program that loops through the array and deactivates users who have not logged 
// in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.



//5.You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars).
//  Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford 
// and reach within that distance. If none are found, return "No destinations available under your budget and distance".



function User(userName,email,isActive){
    this.username = userName;
    this.email = email;
    this.isActive = isActive;
}

let  user1 =[new User("Jacky","jacky@gmail.com",true),new User("Jack","jack@gmail.com",false),new User("Jackson","jackson@gmail.com",true),new User("Jane","jane@gmail.com",false),new User("James","james@gmail.com",true)]













4.///////////////////////////////////////////////////////////////


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
        if (Math.random() > 0.5) {
            user.isActive = false;
        }
        return user;
    });
}

// 4. Get updated user list
const updatedUsers = deactivateInactiveUsers(users);

// 5. Print active usernames
console.log("Active Users:");
updatedUsers.forEach(user => {
    if (user.isActive) {
        console.log(user.username);
    }
});

/* Sample Output:
Active Users:
john_doe
sarah_lee
mike_wilson
*/

// Alternative: Filter + Map approach
const activeUsers = updatedUsers
    .filter(user => user.isActive)
    .map(user => user.username);

console.log("\nActive Users (alternative method):");
console.log(activeUsers);






function deactivateInactiveUsersPure(userList) {
    return userList.map(user => {
        const shouldDeactivate = Math.random() > 0.5;
        return new User(
            user.username,
            user.email,
            shouldDeactivate ? false : user.isActive
        );
    });
}



5.///////////////////////////////////////////////////////


function findAvailableDestinations(destinations, maxDistance, maxBudget) {
    const available = destinations.filter(destination => 
        destination.distance <= maxDistance && 
        destination.budgetRequired <= maxBudget
    );
    
    return available.length > 0 
        ? available 
        : "No destinations available under your budget and distance";
}

// Example usage:
const destinations = [
    { name: "Beach Resort", distance: 50, budgetRequired: 1000 },
    { name: "Mountain Cabin", distance: 200, budgetRequired: 800 },
    { name: "City Museum", distance: 10, budgetRequired: 50 },
    { name: "Lake Camp", distance: 150, budgetRequired: 300 }
];

console.log(findAvailableDestinations(destinations, 100, 500));
// Output: [{ name: "City Museum", ... }, { name: "Lake Camp", ... }]

console.log(findAvailableDestinations(destinations, 5, 100));
// Output: "No destinations available under your budget and distance"



function findAvailableDestinations(destinations, maxDistance, maxBudget) {
    const available = [];
    
    destinations.forEach(destination => {
        if(destination.distance <= maxDistance && 
           destination.budgetRequired <= maxBudget) {
            available.push(destination);
        }
    });
    
    return available.length ? available : "No destinations available...";
}



