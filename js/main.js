"use strict";

const skillsItemImg = document.querySelectorAll(".skills .item__image");                       

skillsItemImg.forEach(elem =>{                                                        
    window.addEventListener("load", () =>{                                          
        const width = elem.naturalWidth;                                        
        const height = elem.naturalHeight;                                      
        const closestImg = elem.closest(".item__image");                  
        if(width == height){                                                   
            closestImg.classList.add("width");                              
        }
        if(width == height && closestImg.classList.contains("item-1__image")){         
            closestImg.classList.remove("width");                           
        }
    })
});

const pricingItemImg = document.querySelectorAll(".pricing .item__img");

pricingItemImg.forEach(elem =>{     
    window.addEventListener("load", () =>{
        const width = elem.naturalWidth;                                        
        const height = elem.naturalHeight;                                      
        const closestImg = elem.closest(".item__img");                  
        if(width !== height){                                                   
            closestImg.classList.add("max-width");                              
        }
    })                                                   
});

window.onload = function checkFooterMenu(){
    const footerMenu = document.querySelector(".footer__menu");
    const footerWrapper = document.querySelector(".footer__wrapper");
    const array = footerMenu.children;
    if(array.length > 3){
        footerMenu.classList.add("menu__flex-column");
        footerWrapper.classList.add("wrapper__flex-column");
    }else{
        footerMenu.classList.remove("menu__flex-column");
        footerWrapper.classList.remove("wrapper__flex-column");
    }
}

const headerMenuClone = document.querySelector(".header__menu").cloneNode(1),
    headerBtnClone = document.querySelector(".header__button").cloneNode(1),
    hamburger = document.querySelector(".hamburger"),
    popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup__content"),
    body = document.querySelector("body");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    popup.classList.toggle("show");
    body.classList.toggle("noscroll");
    popupContent.appendChild(headerMenuClone);
    popupContent.appendChild(headerBtnClone);
})