// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(someValue) {
   return Math.abs(distanceFromHqInBlocks(someValue) * 264)
  
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(start - destination) * 264
}

// expect(distanceFromHqInBlocks(43)).to.equal(1)
function calculatesFarePrice(start, destination) {
   let totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance <= 400){
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000){
        let totalPrice = (totalDistance - 400)*(.02)
        return totalPrice;
    } else if (totalDistance > 2000 && totalDistance < 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }


}
    
