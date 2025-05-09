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
    Object.entries(grades).forEach(([studentName, scores]) => {
        let sum = 0;
        scores.forEach(score => {
            sum += score;
        });

        let average = sum / scores.length;

        if (average > 70) {
            console.log(`${studentName} ${average} pass`);
        } else {
            console.log(`${studentName} ${average} fail`);
        }
    });
}

const grades = {
    Jacky: [70, 80, 90, 80],
    Jack: [60, 60, 60, 60]
};

calculateAverage(grades);



//4. Write a function constructor called User that takes username, email, and isActive (boolean). 
// Create an array of users. Write a program that loops through the array and deactivates users who have not logged 
// in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.
function User(userName,email,isActive){
    this.username = userName;
    this.email = email;
    this.isActive = isActive;
}

let  users =[new User("Jacky","jacky@gmail.com",true),new User("Jack","jack@gmail.com",true),new User("Jackson","jackson@gmail.com",true),new User("Jane","jane@gmail.com",true),new User("James","james@gmail.com",true)]


function deactivateUsers(users) {
    return users.map(user => {
        if (Math.random() >= 0.6) {
            user.isActive = false;
        }
        return user;
    });
}


const changedUsers = deactivateUsers(users);
changedUsers.forEach(activeUser => {
    if (activeUser.isActive) {
        console.log(activeUser.username);
    }
});



//5.You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars).
//  Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford 
// and reach within that distance. If none are found, return "No destinations available under your budget and distance".


function findDestination(maxDistance, maxBudget) {
    let availableDestinations = destinations.filter(destination => 
        destination.distance <= maxDistance && destination.budgetRequired <= maxBudget
    );

    if (availableDestinations.length>0) {
        availableDestinations.forEach(destination => {
            console.log(
                `${destination.name} ${destination.distance} km,$${destination.budgetRequired} USD`
            );
        });
    } else {
        console.log("No destination available under your budget and distance");
    }
}

let destinations = [
    {name: "Kigali", distance: 20000, budgetRequired: 3000},
    {name: "Kampala", distance: 40000, budgetRequired: 5000},
    {name: "Nairobi", distance: 2500, budgetRequired: 500},
    {name: "Bujumbura", distance: 1000, budgetRequired: 2500}
];

findDestination(3000, 2500);

  