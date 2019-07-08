
class Punk{
    constructor(){
        this.beerData = [];
        this.init();
    }
    async init() {
        await this.getAPIData();
    }
    async getAPIData() {
        //await fetch('/my-dashboard/user-targets/TurtleStats?authkey=situtestturtle', 
        await fetch('https://api.punkapi.com/v2/beers')
        //await fetch('turtledata.php')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let obj = (data);
            console.log(obj);
            this.createBeers(obj); // Create Punk components
            //Should only calculate page split if there is a change.
        })
        .catch(err => {
            console.log(err);
        });
    }
    createBeers(beers){
        beers.map((beer, index) => {
            this.beerData = [...this.beerData, beer];
            console.log(this.beerData[index].name);
        });
    }
}

let beer = new Punk();

