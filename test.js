function perfectDestination(destinations, maxDistanceKm, maxBudgetUSD) {
    let availableDestination = destinations.filter(destination => 
        destination.distance <= maxDistanceKm && destination.budgetRequired <= maxBudgetUSD
    );

    if (availableDestination.length > 0) {
        availableDestination.forEach(destination => {
            console.log(
                `${destination.name} - Distance: ${destination.distance} km, Budget Required: $${destination.budgetRequired} USD`
            );
        });
    } else {
        console.log("No destination available under your budget and distance");
    }
}

let destinations = [
    {name: "Maldives", distance: 20000, budgetRequired: 3000},
    {name: "Kyoto", distance: 40000, budgetRequired: 5000},
    {name: "Cayman Islands", distance: 25000, budgetRequired: 4500},
    {name: "Egypt", distance: 1000, budgetRequired: 2500}
];

perfectDestination(destinations, 3000, 2500);
