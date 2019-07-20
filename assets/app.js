
class Punk{
    constructor(){
        this.beerData = [];
        this.page = document.getElementById('beer-directory');
        this.title = document.getElementById('beer-title');
        this.tagline = document.getElementById('tagline');
        this.abv = document.getElementById('abv');
        this.description = document.getElementById('beer-description');

        this.init();
    }
    async init() {
        await this.getAPIData();
    }
    async getAPIData() {
        await fetch('https://api.punkapi.com/v2/beers')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let obj = (data);
            console.log(obj);
            this.createBeers(obj); // Create Punk components
        })
        .catch(err => {
            console.log(err);
        });
    }
    createBeers(beers){
        beers.map((beer, index) => {
            this.beerData = [...this.beerData, beer];
            this.createCards(beer);
        });
    }
    createCards(beer){
        let card = document.createElement('div');
        card.innerHTML = beer.name;
        card.className = "beer-card";
        card.id = beer.id;
        this.page.appendChild(card);
        document.getElementById(beer.id).addEventListener( "click", ()=> this.updateInformation(beer));
    }
    updateInformation(beer){
        console.log("click");
        this.description.innerHTML = beer.description;
        this.title.innerHTML = beer.name;
        this.abv.innerHTML = beer.abv;
        this.tagline.innerHTML = beer.tagline;
    }
}

let beer = new Punk();

