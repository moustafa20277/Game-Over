import { Ui } from "./UI.module.js";

export class Details{
    constructor (id){
        this.ui = new Ui()
        this.getDetails(id)
        document.querySelector(".btn-close").addEventListener("click" , () => {            
            document.querySelector(".home").classList.remove("d-none")
            document.querySelector(".details").classList.add("d-none")
        })
        
    }

    async getDetails(id){
        const loading = document.querySelector("#loading")
        loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6bb64c8a8emsh87790f2e8f04a69p1f4fdfjsnad814d703d05',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            let Api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
            let response = await Api.json()
            if(Api.status ==200){
                loading.classList.add("d-none")
                this.ui.displayDetails(response)
            }
        
    }

}

