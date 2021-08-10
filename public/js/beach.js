AFRAME.registerComponent('beach', { 
    
   init: function () {
     
      let beachelements = document.querySelectorAll(".beach");
      let fotoplaya = document.querySelector("#fotoplaya");
      let videosphere = document.querySelector("#videosphereentity");
      
      
      let beach = () => {
      fotoplaya.setAttribute("src", "#fotoplaya");
      beachelements.forEach((beachelement) => {
      beachelement.setAttribute("visible", true)})
    }

      this.el.addEventListener('click', beach);
        
   }});