import { Details } from "./details.js";
import { Ui } from "./UI.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".categories a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".categories .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
   
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "72e730d04fmsh84f7f79f9bb3f36p147b0cjsn7ec0c09f765d",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            
         },
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      console.log(response);
      this.ui.displayGames(response);
      this.startEvent();
    



   }

   startEvent() {
      document.querySelectorAll(".card").forEach((card) => {
         card.addEventListener("click", () => {
            const id = card.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const details = new Details(idGame);
      document.querySelector(".home").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
   }
}
