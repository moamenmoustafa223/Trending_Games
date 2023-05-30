export class Ui {
    displayGames(data) {
       let cartona = ``;
       for (let i = 0; i < data.length; i++) {
          cartona += ` <div class="col-xl-3 col-lg-4 col-md-6">
          <div data-id="${data[i].id}" class="card">
              <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
              <div class="card-body pb-0">
                  <div class="card-headerr mb-2 d-flex justify-content-between align-items-center">
                      <h5 class="card-title">${data[i].title}</h5>
                      <h5><span class="badge bg-primary">Free</span></h5>

                  </div>
                
                <p class="card-text text-muted">${data[i].short_description}</p>
              </div>
             
              <div class="card-body d-flex justify-content-between align-items-center">
                  <h5><span class="badge bg-secondary">${data[i].genre}</span></h5>
                  <h5><span class="badge bg-secondary">${data[i].platform}</span></h5>
              </div>
            </div>
      </div>`;
       }
 
       document.querySelector(".games-row").innerHTML = cartona;
    }
 
    displayDetails(data) {

       const cartona = ` <div class="col-lg-4 col-md-6">
       <img src="${data.thumbnail}" class="img-fluid" alt="">
     </div>
     <div class="col-lg-8 col-md-6">

     <ul class=" list-unstyled mb-3">
       <li><h3>Title: <span>${data.title}</span></h3></li>
       <li> <p>Category: <span class="badge bg-primary">${data.genre}</span></p></li>
       <li> <p>Platform: <span class="badge bg-primary">${data.platform}</span></p></li>

       <li> <p>Status: <span class="badge bg-primary">${data.status}</span></p></li>
       
     </ul>
     <p class="mb-3">${data.description} </p>
     <a type="button" href="${data.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>

     </div>`;
 
       document.querySelector(".gameDetails").innerHTML = cartona;
    }
 }
 