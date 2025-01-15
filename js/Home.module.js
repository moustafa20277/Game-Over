import { Details } from "./Details.module.js";
import { Ui } from "./UI.module.js";
export class Home {
    constructor() {
        this.ui = new Ui()
        this.loading=document.querySelector("#loading")
        this.gamesName = document.querySelector("a[name]").name
        this.array = document.querySelectorAll("a[name]")
        for (let i = 0; i < this.array.length; i++) {
            const element = this.array[i];
            element.addEventListener("click",(e)=>{
                this.clearEffect(this.array)
                this.Show(e.target)
            })
            
        }
        this.getApi(this.gamesName)
    }

    async getApi(type){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6bb64c8a8emsh87790f2e8f04a69p1f4fdfjsnad814d703d05',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        this.loading.classList.remove("d-none")
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options);
        let res = await api.json()
        if(api.status == 200){
            this.loading.classList.add("d-none")
            this.ui.displayGames(res)
            this.changePages()
        }
    }

    changePages(){
        let x = document.querySelectorAll(".card")
        for (let i = 0; i < x.length; i++) {
            const element = x[i];
            element.addEventListener("click",()=>this.showDetails(x[i].id))
            
        }
    }

    Show(e){
        e.classList.add("active")
        this.getApi(e.name)
    }
    clearEffect(array){
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.classList.remove("active")
        }
    }

    showDetails(id){
        this.Deta = new Details(id)
        document.querySelector(".home").classList.add("d-none")
        document.querySelector(".details").classList.remove("d-none")
        
    }
}

