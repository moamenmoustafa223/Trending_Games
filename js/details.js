import { Ui } from "./UI.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      document.querySelector(".fa-x").addEventListener("click", () => {
         document.querySelector(".home").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }

   async getDetails(idGames) {
    

      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "72e730d04fmsh84f7f79f9bb3f36p147b0cjsn7ec0c09f765d",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };

      const api= await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
      const response = await api.json();
        
      this.ui.displayDetails(response);

         }
   }

