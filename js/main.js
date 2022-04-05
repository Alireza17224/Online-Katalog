const ui = (function(){
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
   } 
   return {
       elements
   }
})()
const model = (function(){
    let elements = {
        data : [
            {id:0,name:"سقف با بدنه کرم",imageName:"cream",detail:"سقف کرم با قیمت عالی"}
            ,{id:1,name:"سقف با بدنه ی قهوه ای",imageName:"brown",detail:"سقف قهوه ای با قیمت عالی"}
            ,{id:2,name:"سقف با بدنه ی سیاه",imageName:"black",detail:"سقف سیاه با قیمت عالی"}
            ,{id:3,name:"سقف با بدنه ی سفید",imageName:"white",detail:"سقف سفید با قیمت عالی"}
            ,{id:4,name:"پنل سقف سیاه",imageName:"blackPanel",detail:"سقف  پنلی سیاه با قیمت عالی"}
            ,{id:5,name:"پنل سقف سفید",imageName:"whitePanel",detail:"سقف سفید پنلی با قیمت عالی"}
            ,{id:6,name:"پنل سقف قهوه ای",imageName:"brownPanel",detail:"سقف قهوه ای پنلی با قیمت عالی"}
            ,{id:7,name:"پنل سقف کرم",imageName:"creamPanel",detail:"سقف کرم پنلی با قیمت عالی"}
        ],
        isModelOpen:false,
        CURRENT_SLIDE : 0,
        MAX_SLIDE_ID : 0,
        OPEN_GIF_SRC : './images/video/closeToopen.gif',
        CLOSE_GIF_SRC : './images/video/openToclose.gif',
        SNAPSHOT_GIF_SRC : './images/video/timeLapce.gif',
    }
    function openModal(fileName){
        for (let i = 0;i < elements.data.length;i++){
            if (elements.data[i].imageName === fileName){
                StartInjectData(elements.data[i].id)
            }
        }
    }
    function StartInjectData(id){
        if (typeof(id) === "number"){
            let data = model.elements.data[id];
            ui.elements.model_showing_detail.classList.add('active');
            ui.elements.shade.classList.add('active-shade');
            let options = {
                width : 400,
                height : 250,
                zoomWidth : 400 , 
                zoomPosition : 'left',
                offset : {vertical : 0 , horizontal : 0},
                scale : 1.3,
            }
            model.elements.CURRENT_SLIDE = data.id;
            ui.elements.model_showing_detail.querySelector('.product-name').innerHTML = data.name;
            ui.elements.model_showing_detail.querySelector('.answer').innerHTML = data.detail;
            ui.elements.model_showing_detail.querySelector('.product-profile').src = `./images/${data.imageName}.jpg`
            new ImageZoom(ui.elements.model_showing_detail.querySelector('#image-zoom'),options)    
        }
    }
    function findMax(){
        return elements.data.length - 1
    }
    return {
        elements,
        openModal,
        StartInjectData,
        findMax,
    }
})()
const controller = (function(){
    function init(){
        let MAX = model.findMax()
        model.elements.MAX_SLIDE_ID = MAX;
        for (let i = 0;i < ui.elements.moreInformation.length;i++){
            ui.elements.moreInformation[i].addEventListener('click',function(){
                let src = this.parentElement.parentElement.querySelector('.img-fluid').src;
                const split_src = src.split("/");
                const fileName = split_src[split_src.length - 1].split('.')[0];
                model.openModal(fileName)
            })
        }
        ui.elements.next.addEventListener('click',function(e){
            model.elements.CURRENT_SLIDE == 7 ? model.elements.CURRENT_SLIDE = -1 : ""
            model.StartInjectData(model.elements.CURRENT_SLIDE+1)
        })
        ui.elements.closeModalBtn.addEventListener('click',()=>{
            ui.elements.model_showing_detail.classList.remove('active');
            ui.elements.shade.classList.remove('active-shade');
        })
        ui.elements.prev.addEventListener('click',function(e){
            model.elements.CURRENT_SLIDE == 0 ? model.elements.CURRENT_SLIDE = 8 : ""
            model.StartInjectData(model.elements.CURRENT_SLIDE-1)
        })
        for (let i = 0;i < ui.elements.color_box.length;i++){
            ui.elements.color_box[i].addEventListener('click',function(e){
                switch (i){
                    case 0 :
                        model.StartInjectData(2)
                        break;
                    case 1 :
                        model.StartInjectData(7)
                        break;
                    case 2 : 
                        model.StartInjectData(5)
                        break;
                    case 3 : 
                        model.StartInjectData(6)
                        break;

                }
            })
        }
        for (let i = 0;i < ui.elements.icons.length;i++){
            ui.elements.icons[i].addEventListener('click',function(){
                switch (this.dataset.content) {
                    case "open" :
                        ui.elements.frame.src = model.elements.OPEN_GIF_SRC;
                        break;
                    case "snapshot" :
                        ui.elements.frame.src = model.elements.SNAPSHOT_GIF_SRC;
                        break;
                    case "close" :
                        ui.elements.frame.src = model.elements.CLOSE_GIF_SRC;
                        break;
                }
            })
        }
        ui.elements.openMenu.addEventListener('mousemove',function(e){
            console.log(e.target)
            ui.elements.dropdown.classList.remove('hideDropDown')
        })
        ui.elements.openMenu.addEventListener('mouseout',function(e){
            ui.elements.dropdown.classList.add('hideDropDown')
        })
    }
    return {
        init
    }
})()
controller.init()