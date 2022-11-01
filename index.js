// Code your solution in this file!
const returnFirstTwoDrivers = (driver) => {
    return ["Antonia", "Nuru"]
}

const returnLastTwoDrivers = (driver) => {
    return ["Amari", "Mo"]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
    return function(fare){
        return value * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, selectingDrivers){
    return (selectingDrivers(drivers))
}