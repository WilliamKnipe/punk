
class Punk{
    constructor(){
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
            // this.createGlobalTurtleArray(obj); // Create Punk components
            //Should only calculate page split if there is a change.
        })
        .catch(err => {
            console.log(err);
        });
    }
}

let beer = new Punk();

