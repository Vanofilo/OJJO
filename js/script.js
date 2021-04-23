function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();
if(document.querySelector('.product-card__swiper--min')){
    new Swiper('.product-card__swiper--min',{
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 600,
        breakpoints: {
            320: {
              spaceBetween: 5
            },
            480: {
              spaceBetween: 20
            },
            640: {
              spaceBetween: 25
            },
            768: {
                spaceBetween: 30
            },
        }
    })    
}

if(document.querySelector('.popup')){
    const register = document.querySelectorAll('.header__register');
    const overPopup = document.querySelector('.popup');
    const registerPopup = document.querySelector('.popup__register')
    const popupExit = document.querySelector(".popup__close")
    for(let registerButton of register){
        registerButton.addEventListener('click', function(){
            overPopup.classList.add('active')
            registerPopup.classList.add('active')
            if(registerPopup.classList.contains('active')){
                popupExit.addEventListener('click', function(){
                    overPopup.classList.remove('active')
                    registerPopup.classList.remove('active')
                })
            }
        })
    }
}


if(document.querySelectorAll('.offer__list li').length > 0){
    const offerBtns = document.querySelectorAll('.offer__list li')
    for (let offerBtn of offerBtns){
        offerBtn.addEventListener('click', function(){
        let tabId = offerBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)
        let allTabs = document.querySelectorAll('.offer__products')

        for(let item of allTabs){
            item.classList.remove('active')
        }
        for(let item of offerBtns){
            item.classList.remove('active')
        }

        currentTab.classList.remove('active')
        currentTab.classList.add('active')
        offerBtn.classList.add('active')
        })
    }
}


if(document.querySelector('.header__burger')){
    const burgerIcon = document.querySelector('.header__burger')
    const menu = document.querySelector('.menu')
    
    burgerIcon.addEventListener('click', function(){
        burgerIcon.classList.toggle('active')
        menu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
}


if(document.querySelector('.user-info__button')){
    const showTextButton = document.querySelector('.user-info__button')
    const showText = document.querySelector('.user-info__text')

    showTextButton.addEventListener('click', function(){
        showText.classList.toggle('active')
        if (showTextButton.innerHTML == "Читать полностью"){
            showTextButton.innerHTML = "СКРЫТЬ"
        }else {
            showTextButton.innerHTML = "Читать полностью"
        }
    })
}



//CATALOG   
if(document.querySelector('.catalog__button')){
    const catalogBtn = document.querySelector('.catalog__button')
    const catalogList = document.querySelectorAll('#catalog__list')

    catalogBtn.addEventListener('click', function(){

        for(let item of catalogList){
            item.classList.add('active')
        }

    })
}



//PRODUCT   

if(document.querySelectorAll('.product-card__img')){
    const productImgs = document.querySelectorAll('.product-card__img')
    const  productMainImgs = document.querySelectorAll('product-card__main-image')
    for(let productImg of productImgs){
        productImg.addEventListener('click', function(){
            let currentImg = productImg.getAttribute('data-small')
            let productMainImgs = document.querySelectorAll('.product-card__main-image')
            let currentMainImg = document.querySelector(currentImg)


            for(let productMainImg of productMainImgs){
                productMainImg.classList.remove('active')
            }  
            currentMainImg.classList.add('active')
            

            
            
        })
    }
}
