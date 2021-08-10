AFRAME.registerComponent('beach', { 
    
   init: function () {
     
      let beachelements = document.querySelectorAll(".beach");
      let fotoplaya = document.querySelector("#fotoplaya");
      let photospheredisplay = document.querySelector("#photophereentity");
      
      
      let beach = () => {
      fotoplaya.setAttribute("src", "#fotoplaya");
      photospheredisplay.setAttribute("radius", ".7");
      beachelements.forEach((beachelement) => {
      beachelement.setAttribute("visible", true)})
    }

      this.el.addEventListener('click', beach);
        
   }});