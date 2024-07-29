// Description:
// You have the radius of a circle with the center in point (0,0).

// Write a function that calculates the number of points in the circle where (x,y) - the cartesian coordinates of the points - are integers.

// Example: for radius = 2 the result should be 13.

// 0 <= radius <= 1000

// SOLUTION

function pointsNumber(radius){
    let count = 0;

    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            if (x * x + y * y <= radius * radius) {
                count++;
            }
        }
    }

    return count;
  }
  console.log(pointsNumber(1)); //5
  console.log(pointsNumber(2)); //13
  console.log(pointsNumber(3)); //29
  console.log(pointsNumber(4)); //53
  console.log(pointsNumber(5)); //81