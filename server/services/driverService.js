
let fakeDb = {
    Drivers: [
        {name: 'Perez', team: 'Redbull', wins: 1, podiums: 4},
        {name: 'Leclerc', team: 'Ferrari', wins: 2, podiums: 4},
        {name: 'Verstappen', team: 'Redbull', wins: 4, podiums: 5},
        {name: 'Russell', team: 'Mercedes', wins: 0, podiums: 2},
        {name: 'Sainz', team: 'Ferrari', wins: 0, podiums: 4}

    ]
}

class DriverService{

async getDriver(){
    return fakeDb.Drivers
}

async  createDriver(driverData){
    fakeDb.Drivers.push(driverData)
    return driverData
}

async deleteDriver(name){
    fakeDb.Drivers = fakeDb.Drivers.filter(d => d.name != name)
    return 'driver has been deleted'
}


}



export const driverService = new DriverService()