class Trip{
    constructor(name,location,difficulty,length,elevationChange) {
        this.id = Trip.incrementId()
        this.name = name;
        this.location = location;
        this.difficulty = difficulty;
        this.length = length;
        this.elevationChange = elevationChange;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }
}

const Trips = [
    new Trip("Mount Kilimanjaro","Africa",3,"72km",5),
    new Trip("Machu Picchu and the Sacred Valley","Peru",2,"60km",4),
    new Trip("The Scottish Highlands","Scotland’s",4,"90km",2),
    new Trip("Mont Blanc","Europe",3,"120km",4),
    new Trip("Jabl El-Dokhaan","Bahrain",2,"50km",3),
    new Trip("Petra","Jordan",3,"35km",2),
    new Trip("Dipkarpaz","Northern Cyprus",2,"35km",3),
    new Trip("The Basho Wayfarer","Japan",2,"45km",1),
]


export default Trips;