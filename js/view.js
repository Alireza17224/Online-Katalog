const view = (function(){
    let elements = {
      moreInformation : document.getElementsByClassName('more'),
      model_showing_detail : document.querySelector('.model-showing-detail'),
      shade : document.querySelector('.shade'),
      next : document.querySelector('.next'),
      prev : document.querySelector('.prev'),
      color_box : document.getElementsByClassName('color-box'),
      closeModalBtn : document.querySelector('.close'),
      icons : document.getElementsByClassName('icon'),
      frame : document.querySelector('.frame img'),
      openMenu : document.querySelector('.openMenu'),
      dropdown : document.querySelector('.dropDown'),
      mobile_dropdown_links : document.getElementsByClassName('mobile-dropdown-link'),
      close_rightside_mobile : document.querySelector('.close-rightside-mobile'),
      menu_mobile_open_icons : document.getElementsByClassName('menu-open'),
    } 
    return {
        elements
    }
 })()
export default view;
/* Writeen By Alireza Mosavi || i love elon musk */