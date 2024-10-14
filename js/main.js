

$(document).ready(function(){

  

    

 $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.eleven_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

  $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link2');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open2');

    if (!e.data.multiple) {
      $el.find('.news_i_accordion_content').not($next).slideUp().parent().removeClass('open2');
    };
  } 

  var accordion = new Accordion($('#accordion2'), false);
});

    $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link2');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open2');

    if (!e.data.multiple) {
      $el.find('.news_i_accordion_content').not($next).slideUp().parent().removeClass('open2');
    };
  } 

  var accordion = new Accordion($('#accordion3'), false);
});


$(function(){
  $('.input').keyup(function() {
    
    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    
    if (empty) {
      $('#submit').attr('disabled', 'disabled');
    } else {
      $('#submit'). removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  })
})

$(function(){
  $('.input2').keyup(function() {
    
    var empty = false;
    $('.input2').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    
    if (empty) {
      $('#submit2').attr('disabled', 'disabled');
    } else {
      $('#submit2'). removeAttr('disabled').addClass('button--primary2').removeClass('button--disabled2');
    }
  })
})

$(function(){
  $('.input3').keyup(function() {
    
    var empty = false;
    $('.input3').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });
    
    if (empty) {
      $('#submit3').attr('disabled', 'disabled');
    } else {
      $('#submit3'). removeAttr('disabled').addClass('button--primary3').removeClass('button--disabled3');
    }
  })
})


function toggle() {
  var div = document.getElementById('pnlTest2');
  if(this.checked)
    div.style.display = 'block';
  else
    div.style.display = 'none'
    }
document.getElementById('chkTest2').onchange = toggle;





});







$(document).ready(function(){

$(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, body, .sliding-panel-fade-screen, .header_left').toggleClass('is-visible');
  });
});




$(window).scroll(function() {
        if ($(this).scrollTop() > 10){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
});



// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
    
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();    
    
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    
    });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
    
    $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
    
    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
  
  
  /* Extra class "tab_last" 
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");




  var tabs = $('.tabs');
var selector = $('.tabs').find('li').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","li",function(e){
  e.preventDefault();
  $('.tabs li').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});


$(function(){
  $.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'sticky',
                top: 150
            });
        } else {
            $this.css({
                position: 'sticky',
                top: 250
            });
        }
    });
};

$('.float-block').followTo(140);
});










"use strict";
function scroll_to_class(element_class, removed_height) {
  var scroll_to = $(element_class).offset().top - removed_height;
  if($(window).scrollTop() != scroll_to) {
    $('.form-wizard').stop().animate({scrollTop: scroll_to}, 0);
  }
}

function bar_progress(progress_line_object, direction) {
  var number_of_steps = progress_line_object.data('number-of-steps');
  var now_value = progress_line_object.data('now-value');
  var new_value = 0;
  if(direction == 'right') {
    new_value = now_value + ( 100 / number_of_steps );
  }
  else if(direction == 'left') {
    new_value = now_value - ( 100 / number_of_steps );
  }
  progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
    
    /*
        Form
    */
    $('.form-wizard fieldset:first').fadeIn('slow');
    
    $('.form-wizard .required').on('focus', function() {
      $(this).removeClass('input-error');
    });
    
    // next step
    $('.form-wizard .btn-next').on('click', function() {
      var parent_fieldset = $(this).parents('fieldset');
      var next_step = true;
      // navigation steps / progress steps
      var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
      var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
      
      // fields validation
      parent_fieldset.find('.required').each(function() {
        if( $(this).val() == "" ) {
          $(this).addClass('input-error');
          next_step = false;
        }
        else {
          $(this).removeClass('input-error');
        }
      });
      // fields validation
      
      if( next_step ) {
        parent_fieldset.fadeOut(400, function() {
          // change icons
          current_active_step.removeClass('active').addClass('activated').next().addClass('active');
          // progress bar
          bar_progress(progress_line, 'right');
          // show next step
          $(this).next().fadeIn();
          // scroll window to beginning of the form
          scroll_to_class( $('.form-wizard'), 20 );
        });
      }
      
    });
    
    // previous step
    $('.form-wizard .btn-previous').on('click', function() {
      // navigation steps / progress steps
      var current_active_step = $(this).parents('.form-wizard').find('.form-wizard-step.active');
      var progress_line = $(this).parents('.form-wizard').find('.form-wizard-progress-line');
      
      $(this).parents('fieldset').fadeOut(400, function() {
        // change icons
        current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
        // progress bar
        bar_progress(progress_line, 'left');
        // show previous step
        $(this).prev().fadeIn();
        // scroll window to beginning of the form
      scroll_to_class( $('.form-wizard'), 20 );
      });
    });
    
    // submit
    $('.form-wizard').on('submit', function(e) {
      
      // fields validation
      $(this).find('.required').each(function() {
        if( $(this).val() == "" ) {
          e.preventDefault();
          $(this).addClass('input-error');
        }
        else {
          $(this).removeClass('input-error');
        }
      });
      // fields validation
      
    });


    
    
});




function toggle() {
  var div = document.getElementById('pnlTest');
  if(this.checked)
    div.style.display = 'block';
  else
    div.style.display = 'none'
    }
document.getElementById('chkTest').onchange = toggle;


});






const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});





let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
      body.classList.remove("is-open");
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
      body.classList.add("is-open");
    }
  });
}));

function openCity(evt, cityName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с class="tabcontent" и скрыть их
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с class="tablinks" и снять класс "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать на текущей вкладке, и добавить класс "active" по ссылке, которая откроется вкладка
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



document.getElementById('file-upload').onchange = function(e) {
  document.querySelector('.custom-file-upload').innerText = e.target.files[0].name || 'Нажмите сюда!';
};

// Сам <input>
let  input = document.querySelector('input[type="file"]');
// Блок предпросмотра
const preview = document.querySelector('.preview');
// Кнопка отправки файлов
const button = document.querySelector('button');
// Список файлов
const fileList = [];

// Обработчик кнопки Send
button.addEventListener('click', ()=>{
  if(!fileList.length){
    alert('Отправлять нечего');
    return;
  }
  //console.log(fileList);

  // Отправлять мы ничего не будем, просто отобразим простой alert()
  alert(JSON.stringify(fileList.map(
    ({name,modified,size}) =>
    ({name,modified,size,data:'<[!FILEDATA]>'})
  ),null,2));
});

// Вешаем функцию onChange на событие change у <input>
input.addEventListener('change', onChange);

function onChange () {
  // По каждому файлу <input>
  [...input.files].forEach(file=>{
    // Создаём читателя
    const reader = new FileReader;
    // Вешаем событие на читателя
    reader.addEventListener('loadend', ()=>{
      // Элемент списка .preview
      const item = document.createElement('li');
      // Картинка для предпросмотра
      const image = new Image;
      // URI картинки
      image.src = `data:${file.type};base64,${btoa(reader.result)}`;
      // Ссылка на исключение картинки из списка выгрузки
      const remove = document.createElement('a');
      remove.innerHTML = '';
      remove.href="#";
      // Элемент массива fileList
      const fileItem = { name: file.name,
                         modified:file.lastModified,
                         size:file.size,
                         data: reader.result };
      // Добавляем элемент в список выгрузки
      fileList.push(fileItem);
      // Обработчик клика по ссылке исключения картинки
      remove.addEventListener('click',()=>{
        // Исключаем элемент с картинкой из списка выгрузки
        fileList.splice(fileList.indexOf(fileItem), 1);
        // Удаляем элемент списка (<li>) из <ul> 
        item.classList.add('removing');
        setTimeout(()=>item.remove(),100);
      });
      item.appendChild(remove);
      item.appendChild(image);
      preview.appendChild(item);
    });
    // Запускаем чтение файла
    reader.readAsBinaryString(file);
  });
  // Сбрасываем значение <input>
  input.value = '';
  // Создаем клон <input>
  const newInput = input.cloneNode(true);
  // Заменяем <input> клоном
  input.replaceWith(newInput);
  // Теперь input будет указывать на клона
  input = newInput;
  // Повесим функцию onChange на событие change у нового <input>
  input.addEventListener('change', onChange);
}



'use strict';



class Dropdown {
  constructor(element, options) {
    this.element = element;
    this.toggler = element.querySelector('.js-dropdown-toggler');
    this.title = element.querySelector('.js-dropdown-title');
    this.icon = element.querySelector('.js-dropdown-icon');
    this.choices = element.querySelectorAll('.js-dropdown-choice');
    
    this.classActive = options.cssElementActive || 'js-dropdown-active';
    this.classExpanded = options.cssElementExpanded || 'js-dropdown-expanded';
    
    this.modes = Array.prototype.map.call(this.choices, choice => choice.dataset['mode']);
    
    if (!this.element || !this.toggler || !this.title || !this.icon || !this.choices.length) {
      throw new Error('Something is missing! Check the layout!');
    }
    
    this.init();
  }
  
  init() {
    this.toggler.addEventListener('click', this.toggleExpanded.bind(this));
    Array.prototype.forEach.call(this.choices, choice => {
      choice.addEventListener('click', this.choose.bind(this));
    });
  }
  
  toggleExpanded() {
    if (!this.element.classList.contains(this.classExpanded) || !this.element.classList.contains('js-dropdown-expanded')) {
      this.setExpanded();
    } else {
      this.unsetExpanded();
    }
  }
  
  setExpanded() {
    this.element.classList.add(this.classExpanded, 'js-dropdown-expanded');
  }
  
  unsetExpanded() {
    this.element.classList.remove(this.classExpanded, 'js-dropdown-expanded');
  }
  
  choose(event) {
    console.log(event);
    const mode = event.target.dataset['mode'];
    const title = event.target.innerHTML;
    
    this.activate();
    this.setTitle(title);
    this.colorize(mode);
    this.setIcon(mode);
    this.unsetExpanded();
  }
  
  activate() {
    this.element.classList.add(this.classActive, 'js-dropdown-active');
  }
  
  setTitle(title) {
    this.title.innerHTML = title;
  }
  
  colorize(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.toggler.classList.remove(`dropdown__header_${item}`); });
    this.toggler.classList.add(`dropdown__header_${mode}`);
  }
  
  setIcon(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.icon.classList.remove(`fa-${item}`); });
    this.icon.classList.add(`fa-${mode}`);
  }
}

function initDropdown(options) {
  const dropdown = [];
  Array.prototype.forEach.call(document.querySelectorAll('.js-dropdown'), (item) => {
    dropdown.push(new Dropdown(item, options));
  });
}

initDropdown({ 
  cssElementActive: 'is-active',
  cssElementExpanded: 'is-expanded',
});






