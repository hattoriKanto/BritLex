"use strict";

const itemImg = document.querySelectorAll(".item__image");                       

itemImg.forEach(elem =>{                                                        
    elem.onload = function checkImg(){                                          
        const width = elem.naturalWidth;                                        
        const height = elem.naturalHeight;                                      
        const closestImg = elem.closest(".item__image");                  
        if(width == height){                                                   
            closestImg.classList.add("width");                              
        }
        if(width == height && closestImg.classList.contains("item-1__image")){         
            closestImg.classList.remove("width");                           
        }
    }
});

window.onload = function myFn(){
    const footerMenu = document.querySelector(".footer__menu");
    const footerWrapper = document.querySelector(".footer__wrapper");
    const array = footerMenu.children;
    if(array.length > 3){
        footerMenu.classList.add("menu__flex-column");
        footerWrapper.classList.add("wrapper__flex-column");
    }else{
        footerMenu.classList.remove("menu__flex-column");
        footerWrapper.classList.add("wrapper__flex-column");
    }
}