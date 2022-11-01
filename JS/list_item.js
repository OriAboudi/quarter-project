import {  showLightBox } from "./light_box.js";

 export default class ListItem{
    constructor(_parent,_item){
        this.parent = _parent;
        this.img =_item.picture.large;
        this.first_name = _item.name.first;
        this.last_name = _item.name.last;
        this.city = _item.location.city;
        this.age = _item.dob.age;
        this.email = _item.email;
        this.phon = _item.phone;
        this.street_name = _item.location.street.name; 
        this.street_number = _item.location.street.number; 

    }
    render(){
        let div = document.createElement("div");
        div.className = 'col-sm-6 col-md-4 cardd mt-5 d-flex justify-content-center ';
        document.querySelector(this.parent).append(div);
        div.innerHTML+=
        `
        <div class="card " style="width: 18rem;">
        <img src="${this.img}" class="card-img-top"
            alt="${this.name}">
        <div class="card-body">
            <h5 class="card-title">${this.first_name +" "+ this.last_name}</h5>
            <p class="card-text">
            <div>City: ${this.city}</div>
            <div>Age: ${this.age}</div>
                </p>
           <button class="btn btn-primary myBtn">Know More</button>
        </div>
    </div>
        
        `
// create btn for more info
    let myBtn = div.querySelector(".myBtn");
    myBtn.addEventListener("click", () => {
        
        showLightBox(this);
    });
    }
}