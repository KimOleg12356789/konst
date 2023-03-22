$(document).ready(function(){

    $(function(){
      $('.slick-vertical').slick({
          vertical: true,
          centerMode:true,
          verticalSwiping: true,
          slidesToShow: 3,
          autoplay: true,
      });
    }); 

    $( ".arr__bt" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main" ).css( "display", "block" ); 
        $( ".privacy__policy" ).css( "display", "none" ); 
        $( ".copyright" ).css( "display", "none" ); 
        $( ".header__about" ).css( "bottom", "250px" ); 
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
       
              
      });

      $( ".main__block" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".slogan" ).css( "opacity", "0.1" ); 

        $( ".header__about" ).css( "opacity", "0.1" ); 
        $( ".section__video-bg" ).css( "opacity", "0" ); 
        $( ".slogan" ).css( "transition", "0.6s" ); 
        $( ".section__video-bg" ).css( "transition", "0.6s" ); 
        $( ".main__block__title" ).css( "transition", "0.6s" ); 
       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
            $( ".slogan" ).css( "opacity", "1" ); 
            $( ".section__video-bg" ).css( "opacity", "1" ); 

            $( ".header__about" ).css( "opacity", "1" ); 
            $( ".slogan" ).css( "transition", "0.6s" ); 
            $( ".section__video-bg" ).css( "transition", "0.6s" ); 
            $( ".main__block__title" ).css( "transition", "0.6s" );     
      });


      $( ".main__img" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title" ).css( "opacity", "1" ); 
        $( ".main__block__title" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title" ).css( "opacity", "0" );
        
        $( ".main__block__title" ).css( "transition", "0.8s" ); 
              
      });

      $( ".main__img2" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title2" ).css( "opacity", "1" ); 
        $( ".main__block__title2" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title2" ).css( "opacity", "0" );
        $( ".main__block__title2" ).css( "transition", "0.8s" ); 
              
      });

      $( ".main__img3" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title3" ).css( "opacity", "1" ); 
        $( ".main__block__title3" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title3" ).css( "opacity", "0" );
        $( ".main__block__title3" ).css( "transition", "0.8s" ); 
              
      });

      $( ".main__img4" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title4" ).css( "opacity", "1" ); 
        $( ".main__block__title4" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title4" ).css( "opacity", "0" );
        $( ".main__block__title4" ).css( "transition", "0.8s" ); 
              
      });

      $( ".main__img5" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title5" ).css( "opacity", "1" ); 
        $( ".main__block__title5" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title5" ).css( "opacity", "0" );
        $( ".main__block__title5" ).css( "transition", "0.8s" ); 
              
      });

      $( ".main__img6" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".main__block__title6" ).css( "opacity", "1" ); 
        $( ".main__block__title6" ).css( "transition", "0.8s" );     
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
        $( ".main__block__title6" ).css( "opacity", "0" );
        $( ".main__block__title6" ).css( "transition", "0.8s" ); 
              
      });


      $( ".arr__bt_mb" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
        $( ".slogan" ).css( "opacity", "0.1" ); 
        $( ".slogan" ).css( "transition", "0.3s" ); 
        $( ".section__video-bg" ).css( "display", "none" );
        $( ".slide__vertical" ).css( "display", "block" );
        $( ".clock__wrap" ).css( "display", "none" );
        
         
       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
            $( ".slogan" ).css( "opacity", "1" ); 
            $( ".slogan" ).css( "transition", "0.3s" ); 
      });

      $( ".product__block" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner" ).css( "display", "block" );
        $( ".product__block img" ).css( "transform", "scale(1.1)" );
        $( ".product__block img" ).css( "transition", "0.7s" );
       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner" ).css( "display", "none" );  
          $( ".product__block img" ).css( "transform", "scale(1)" );
          $( ".product__block img" ).css( "transition", "0.7s" );
      });






      $( ".product__block2" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner2" ).css( "display", "block" );
        $( ".product__block2 img" ).css( "transform", "scale(1.1)" );
        $( ".product__block2 img" ).css( "transition", "0.7s" );

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner2" ).css( "display", "none" );  
          $( ".product__block2 img" ).css( "transform", "scale(1)" );
          $( ".product__block2 img" ).css( "transition", "0.7s" );
      });

      $( ".product__block3" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner3" ).css( "display", "block" );
        $( ".product__block3 img" ).css( "transform", "scale(1.1)" );
        $( ".product__block3 img" ).css( "transition", "0.7s" );

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner3" ).css( "display", "none" );  
          $( ".product__block3 img" ).css( "transform", "scale(1)" );
          $( ".product__block3 img" ).css( "transition", "0.7s" );
      });




      $( ".product__block4" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner4" ).css( "display", "block" );
        $( ".product__block4 img" ).css( "transform", "scale(1.1)" );
        $( ".product__block4 img" ).css( "transition", "0.7s" );

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner4" ).css( "display", "none" );  
          $( ".product__block4 img" ).css( "transform", "scale(1)" );
          $( ".product__block4 img" ).css( "transition", "0.7s" );
      });


      $( ".product__block5" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner5" ).css( "display", "block" );
        $( ".product__block5 img" ).css( "transform", "scale(1.1)" );
        $( ".product__block5 img" ).css( "transition", "0.7s" );

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner5" ).css( "display", "none" );  
          $( ".product__block5 img" ).css( "transform", "scale(1)" );
          $( ".product__block5 img" ).css( "transition", "0.7s" );
      });

      $( ".product__block6" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".product__inner6" ).css( "display", "block" );
        $( ".product__block6 img" ).css( "transform", "scale(1.1)" );
        $( ".product__block6 img" ).css( "transition", "0.7s" );

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          $( ".product__inner6" ).css( "display", "none" );  
          $( ".product__block6 img" ).css( "transform", "scale(1)" );
          $( ".product__block6 img" ).css( "transition", "0.7s" );
      });

      $( ".feedback__input" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".feedback__label" ).css( "top", "-14px" );
        $( ".feedback__label" ).css( "font-size", "12px" );
       

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
 
      });

      $( ".feedback__input2" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".feedback__label2" ).css( "top", "-14px" );
        $( ".feedback__label2" ).css( "font-size", "12px" );
       

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
 
      });

      $( ".ft__block2" ).hover(function(){ // задаем функцию при наведении курсора на элемент   
      
        $( ".privacy__policy" ).css( "opacity", "1" );
        $( ".privacy__policy" ).css( "transition", "0.9s" );
       

       
              
        }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
          

          $( ".privacy__policy" ).css( "opacity", "0" );
          $( ".privacy__policy" ).css( "transition", "0.9s" );  
      });
      

      

      let triggersModal = document.querySelectorAll(".js-show-modal");
      let modals = document.querySelectorAll(".js-modal");

      function closeModal() {
        modals.forEach(modal => {
          if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
          }
        });
      }


      modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
          const isOutside = !event.target.closest(".modal__inner");
          const isCloseButton = event.target.matches(".js-close-modal");
          if (isCloseButton || isOutside) {
            closeModal();
          }
        });
      });

      triggersModal.forEach((button) =>
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;
        console.log(modalID);
        modals.forEach(function (modal) {
          if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
          }
        });
      }));


  

      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        dots: true,
        focusOnSelect: true
      });

      const burger = document.querySelector('.burger');
      const navbar = document.querySelector('.mt-mobile');
      const body = document.querySelector('body');
      const svg = document.querySelector('.svg');
      const svg2 = document.querySelector('.svg2');
      const profile = document.querySelector('.profile');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    svg.classList.toggle('svg_open');  
    svg2.classList.toggle('svg_open2');
    profile.classList.toggle('profile__open');  
});

const product__inner = document.querySelector('.product__inner');
const body2 = document.querySelector('body');
      
product__inner.addEventListener('click', () => {
  body2.classList.toggle('body-open2');
});



});


var a , al , i , lfs , lfsl , b , c , p , g ;
// looking for custom select div in html code
a = document.getElementsByClassName("custom-select");
al = a.length;

for(i=0 ; i<al ; i++) {

    // looking for select tag and counting it
    lfs = a[i].getElementsByTagName("select")[0];
    lfsl = lfs.length;

    // for the select tag that counted created a div
    b = document.createElement("div");
    b.setAttribute("class" , "selected-item");
    a[i].appendChild(b);

    // created a span in the selected-item div
    p = document.createElement("span");
    p.setAttribute("class" , "text");

    // set the what you have written in the options to the new span that we have created
    p.innerHTML = lfs.options[lfs.selectedIndex].innerHTML;
    
    // created a span in selected-item div for arrow down
    g = document.createElement("span");
    g.setAttribute("class" , "arrow-down");
       


    // created a div that works as option list to hold options and placed it under selected-item div
    d = document.createElement("div");
    d.setAttribute("class" , "option-list");
    a[i].appendChild(d);
    
    // created div for each option 
    for(j=0 ; j<lfsl ; j++) {
        c = document.createElement("div");
        c.setAttribute("class" , "option");
        c.innerHTML = lfs.options[j].innerHTML;
        d.appendChild(c);
        b.appendChild(g);
        b.prepend(p);
        
        // this changes the clected item on click to options
        c.addEventListener("click" , function(){
            var s , sl , h , i;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling.firstChild; 

            // as you click on the options selected-item will update
            h.innerHTML= this.innerHTML;

            // this loop is for the refresh of tha page to keep the option as selected
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
      
                  s.selectedIndex = i;
      
                  h.innerHTML = this.innerHTML;
                  break;
                }
            }

            // if any option selected this will close the option list (jquery)
            $('.option-list').slideUp();

        });
    }    
}

// by clicking on the selected item the option list will toggle (jquery)
$('.selected-item').on("click" , function(e){
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.option-list').slideUp();
    e.stopPropagation();
    $(this).children(".arrow-down").toggleClass("arrow-up");
    $(this).parent().siblings().find('.arrow-down').removeClass("arrow-up");
});

// click anywhere else to close all selec boxes
$('html , body').click(function(e){
    $(".option-list").slideUp();
    $(".arrow-down").removeClass("arrow-up");
});


const items = document.querySelectorAll(".item");

  items.forEach((item) => {
      item.addEventListener("click", () => {
          item.classList.toggle("open");
      });
  });


