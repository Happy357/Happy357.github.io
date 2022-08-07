$(document).ready(function () {
    //прелоадер
    $(".loader").css("display", "none");
//калькулятор
    function calculate(){
       let sum = parseInt($("#tip option:selected").val()) + parseInt( $("#disign option:selected").val()) + parseInt($("#adapt option:selected").val());
    let days = parseInt($("#tip option:selected").attr("days")) + parseInt( $("#disign option:selected").attr("days")) + parseInt($("#adapt option:selected").attr("days"));
    $("#time").text(days);
    $("#price").text(sum);
 
    };
    
$("select").on("change", function(){
    calculate();
});
    calculate();

    $(window).scroll(()  => {
     let scrollDistance = $(window).scrollTop();
     //skroll
     $(".section").each((i, el)  => {
          if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
              $("nav a").each((i, el) => {
                  if ($(el).hasClass("active")){
                      $(el).removeClass("active");
                  }
              });
              $('nav li:eq(' + i + ')').find('a').addClass('active');
          }
     });
     });
    //всплывающие изображения
    $('.image-popup').magnificPopup({
 type: 'image'
 });
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
    
//модальное окно 
 setTimeout(function(){ 
    modalwin = document.getElementById('modal-content');
    modalwin.style.display="block"; 
    document.getElementById("modal-close").addEventListener("click", function(){
        modalwin.style.display="none";            
    });
}, 10000); 
 
    

    $(function () {
    $(window).on('scroll.progress', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 3000 /* Нужное значение на странице */ ) {
            /* Запускаем скрипт */
            $(function() {
	
		var numb_start = $("#progekt").text(); // Получаем начальное число
		
		$({numberValue: numb_start}).animate({numberValue: 340}, {
		
			duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			
			step: function(val) {
			
				$("#progekt").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});
            /* Отписываемся от события если больше не нужно запускать скрипт */
            $(window).off('scroll.progress');
        }
    });
});
    $(function () {
    $(window).on('scroll.progress', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 3000 /* Нужное значение на странице */ ) {
            /* Запускаем скрипт */
            
    $(function() {
	
		var numb_start = $("#cups").text(); // Получаем начальное число
		
		$({numberValue: numb_start}).animate({numberValue: 26}, {
		
			duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			
			step: function(val) {
			
				$("#cups").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
        
		
	});
            /* Отписываемся от события если больше не нужно запускать скрипт */
            $(window).off('scroll.progress');
        }
    });
});

$(function () {
    $(window).on('scroll.progress', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 3000 /* Нужное значение на странице */ ) {
            /* Запускаем скрипт */
            
     $(function() {
	
		var numb_start = $("#client").text(); // Получаем начальное число
		
		$({numberValue: numb_start}).animate({numberValue: 120}, {
		
			duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			
			step: function(val) {
			
				$("#client").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});
            /* Отписываемся от события если больше не нужно запускать скрипт */
            $(window).off('scroll.progress');
        }
    });
});
    
   $(function () {
    $(window).on('scroll.progress', function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 3000 /* Нужное значение на странице */ ) {
            /* Запускаем скрипт */
            
     $(function() {
	
		var numb_start = $("#workTime").text(); // Получаем начальное число
		
		$({numberValue: numb_start}).animate({numberValue: 4600}, {
		
			duration: 2000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			
			step: function(val) {
			
				$("#workTime").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
				
			}
			
		});
		
	});   
            /* Отписываемся от события если больше не нужно запускать скрипт */
            $(window).off('scroll.progress');
        }
    });
});
  //fotoloader
    let PhotoOptions = {threshold: [0.5]};
    let observer2 = new IntersectionObserver (onEntry2, PhotoOptions);
    let elements2 =$(".photo-low");
    elements2.each((i,el) => {
       observer2.observe (el);
    });
    
function onEntry2 (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
        
    ;}
    
    //animation
   let options = {threshold: [0.5]};
    let observer = new IntersectionObserver (onEntry, options);
    let elements =$(".element-animation");
    elements.each((i,el) => {
       observer.observe (el);
    });
    
function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add("show-animation");
        }
    });
        
    };
    
    
       //scroller
  /* window.addEventListener('scroll',() => {
       let scrollDistance = window.scrollY;
       document.querySelectorAll(".section").forEach((el, i) =>{
          if(el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
              document.querySelectorAll('.nav a').forEach((el) => {
                  if(el.classList.contains(".active")){
                      el.classList.remove(".active");
                  }
              });
              document.querySelectorAll('.nav li')[i].querySelector('a').classList.add(".active");
          }
       } );
   }) ;*/
});