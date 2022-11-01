
export const lightboxInit = () => { // declaration of a functions
  createLightBox();
  hideLightBox();
}

const createLightBox = () => { // createLightBox
  let divLight = document.createElement("div");
  divLight.className = "light_box";
  divLight.id = "id_lightbox";
  document.body.append(divLight);
  divLight.innerHTML = `
    <div class="light_box_inside">
        <img id="id_light_img" src="https://www.cars-data.com/webp/mazda/mazda-3_4249_5.webp"  alt="car" >
        <h2 id="id_light_name"></h2>
        <div>Email: <span id="id_light_emil"></span> </div>
        <div>Phon: <span id="id_light_phom"></span></div>
        <div>addres: <span id="id_light_addres"></span></div>
       
        <button class="my-3 btn btn-primary" id="close_light_btn">Close</button>
      </div> 
    `
  let closebtn = divLight.querySelector("#close_light_btn");
  closebtn.addEventListener("click", hideLightBox)
}

const hideLightBox = () => { //hide the light box
 
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "none";
}
export const showLightBox = (item) => {  //return the light box
 
  let id_lightbox = document.querySelector("#id_lightbox");
  id_lightbox.style.display = "flex";
console.log(item.first_mame)
  document.querySelector("#id_light_img").src = item.img
  document.querySelector("#id_light_name").innerHTML = item.first_name + " " + item.last_name;
  document.querySelector("#id_light_emil").innerHTML = item.email;
  document.querySelector("#id_light_phom").innerHTML = item.phon;
  document.querySelector("#id_light_addres").innerHTML = item.street_name + " " + item.street_number;


}
