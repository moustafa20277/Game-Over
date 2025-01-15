export class Ui {
    constructor(res , Details) {
    }

    displayGames(data ){
        let cartona = ``
        let v = ""
        for (let i = 0; i < data.length; i++) {
            v = data[i].short_description
            let desc = v.split(" ").slice(0 , 10).join(" ")
            cartona+=`
            <div id="${data[i].id}" class="card bg-transparent col-12 col-md-6 col-lg-4 col-xl-3 border-0 px-3 rounded-2">
                        <div class="inner h-100">
                            <div class="card-body p-3 text-white">
                                <figure>
                                    <img class="w-100 h-100 object-fit-cover" src="${data[i].thumbnail}" alt="game photo">
                                </figure>
                                <div class="card-body-header d-flex justify-content-between align-items-center">
                                    <h3 class="card-title h6">${data[i].title}</h3>
                                    <span class="bg-primary p-1 rounded-3">free</span>
                                </div>
                                <div class="card-body-section small text-center opacity-50 mt-2">
                                    <p class="mb-0">${desc}</p>
                                </div>
                            </div>
                            <div class="footer d-flex justify-content-between py-2 px-3">
                                <span class="d-inline-block p-1 rounded-3 text-white small">${data[i].genre}</span>
                                <span class="d-inline-block p-1 rounded-3 text-white small">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>`
            
        }
        document.querySelector("#myData").innerHTML = cartona
    }

    displayDetails(data){        
        const cartona = `
            <div class="d-flex mt-4">
                <figure class="col-12 col-md-4 px-3 mb-0"> <img class="w-100" src="${data.thumbnail}" alt="game photo"></figure>
                <figcaption class="col-12 col-md-8 text-white small px-3">
                    <h3>Title: ${data.title}</h3>
                    <p>Category: <span class="py-1 px-2 text-bg-info fw-bold rounded-3">${data.genre}</span></p>
                    <p>platform: <span class="py-1 px-2 text-bg-info fw-bold rounded-3">${data.platform}</span></p>
                    <p>Status: <span class="py-1 px-2 text-bg-info fw-bold rounded-3">${data.status}</span></p>
                    <p class="small">${data.description}</p>
                        <a class="btn btn-outline-warning text-white" href="${data.game_url}" target="_blank">show game</a>
                </figcaption>
            </div>`
        document.querySelector("#detData").innerHTML=cartona
    }
}