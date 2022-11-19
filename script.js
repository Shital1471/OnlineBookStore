searchform =document.querySelector('.search_box');

document.querySelector('#search_btn').onclick = () =>
{
    searchform.classList.toggle('active');
}

let loginform = document.querySelector('.loginform');
document.querySelector('#loginbtn').onclick = () =>
{
    loginform.classList.toggle('active');
}
document.querySelector('#closelogin').onclick = () =>
{
    loginform.classList.remove('active');
}
window.onscroll =() =>
{
     searchform.classList.remove('active');
    if(window.scrollY >80)
    {
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.add('active');    
    }
    
}
window.onload =() =>
{
    if(window.scrollY >80)
    {
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.remove('active');    
    }
    fadeOut(); 
}
// loader section
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader,4000);
}


var swiper = new Swiper(".bookslider", {
    // slidesPerView: 1,
    // spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction :false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  var swiper = new Swiper(".featured-slider", {
    
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction :false,
    },
    
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      450:{
        slidesPerView:2,
      },
      768: {
        slidesPerView: 3,
       
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction :false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction :false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop : true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction :false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });