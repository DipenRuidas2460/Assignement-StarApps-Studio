// Logic :- At first, I create two variable first is newReach which defines the new reach airport and second 
// variable is defines the previos reach airport, then create another variable which is count number of 
// planes to reach for the final destination. Then I go to first airport then check the fuel, if fuel is enough
// then go to next airports basis of fuel, when fuel is end I can't go anywhere.
// I create a for loop which is defines atleast the reach of every airports at once except last airport. 
// new Reach destination is desided basis : - sum of reach of every airports  except last airport and these fuel.
// then find maximum new Reach Destination and sum of reach of every airports  except last airport and these fuel.
// when goes through every airports count in series except last airports and old reach airports are same then count
// number of plane and set the old reach airport is new reach airpor.
// Then check the old reach airport is less than every airports count in series except last airports.
// then, return -1 because not reach final destination.

const flyToDestination = function (arr) {
    let newReach = 0
    let oldReach = 0
    let numOfPlane = 0
    for (let i = 0; i < arr.length - 1; i++) {
        newReach = Math.max(newReach, i + arr[i])
        if (i === oldReach) {
            numOfPlane++;
            oldReach = newReach;
        }
        if (oldReach < i + 1) {
            return -1
        } 
    }
    return numOfPlane;
}

console.log(flyToDestination([2, 1, 2, 3, 1]));   // 2 planes needed
console.log(flyToDestination([1, 6, 3, 4, 5, 0, 0, 0, 6])); // 3 planes needed
console.log(flyToDestination([3, 2, 1, 0, 4])); // not reach the destination // return -1.