//Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.


let car = {
    make: 'BMW', 
    model: 'M4',
    color: 'Nardo Grey',
    mileage: 237,    

    driveToWork: () => {
        alert(`Old mileage is ${car.mileage}`);
        car.mileage = car.mileage + 30;
        console.log(`You drove to work, your new mileage is ${car.mileage}`);
    },
    driveAroundTheWorld: () => {
        alert(`Old Mileage ${car.mileage}`);
        car.mileage = car.mileage + 27000;
        console.log(`You drove around the world, your new mileage is ${car.mileage}`);
        
    },
    runErrands: () => {
        alert(`Old mileage is ${car.mileage}`);
        car.mileage = car.mileage + 25;
        console.log(`You ran your errands, your new mileage is ${car.mileage}`);
    }
}
console.log(car.driveToWork);
console.log(car.driveAroundTheWorld);
console.log(car.runErrands);