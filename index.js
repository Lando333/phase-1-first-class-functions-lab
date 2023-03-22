const returnFirstTwoDrivers = (names) => {
    let firstTwo = []
    for (let n = 0; n < 2; n++){
        firstTwo.push(names[n])
    }
    return firstTwo
}

const returnLastTwoDrivers = (names) => {
    let lastTwo = []
    lastTwo.push(names[names.length - 2])
    lastTwo.push(names[names.length - 1])
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) { return fare * multiplier }
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers( names , findDriver) {
    return findDriver(names)
}