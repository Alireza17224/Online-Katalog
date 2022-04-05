import view from './view.js';
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
        defaultShadeClass : "shade-down",
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
            view.elements.model_showing_detail.classList.add('active');
            let options = {
                width : 400,
                height : 250,
                zoomWidth : 400 , 
                zoomPosition : 'bottom',
                offset : {vertical : 0 , horizontal : 0},
                scale : 1.3,
            }
            model.elements.CURRENT_SLIDE = data.id;
            view.elements.model_showing_detail.querySelector('.product-name').innerHTML = data.name;
            view.elements.model_showing_detail.querySelector('.answer').innerHTML = data.detail;
            view.elements.model_showing_detail.querySelector('.product-profile').src = `./images/${data.imageName}.jpg`
                new ImageZoom(view.elements.model_showing_detail.querySelector('#image-zoom'),options)    
        
        }
    }
    function workShade(obj){
        if (obj.shade !== false){
            obj.locate.querySelector('.shade').classList.toggle(model.elements.defaultShadeClass)
        }
    }
    function findMax(){
        return elements.data.length - 1
    }
    function togglePlay(element,className){
        element.classList.toggle(className)
    }
    return {
        elements,
        openModal,
        StartInjectData,
        findMax,
        workShade,
        togglePlay,
    }
})()
export default model;