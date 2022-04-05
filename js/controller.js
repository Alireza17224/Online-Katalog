const controller = (function(){
    function init(view,model){
        let MAX = model.findMax()
        model.elements.MAX_SLIDE_ID = MAX;
        for (let i = 0;i < view.elements.moreInformation.length;i++){
            view.elements.moreInformation[i].addEventListener('click',function(){
                model.workShade({shade:true,locate:document.body});
                setTimeout(() => {
                    let src = this.parentElement.parentElement.querySelector('.img-fluid').src;
                    const split_src = src.split("/");
                    const fileName = split_src[split_src.length - 1].split('.')[0];
                    model.openModal(fileName)    
                }, 100);
            })
        }
        view.elements.next.addEventListener('click',function(e){
            model.elements.CURRENT_SLIDE == 7 ? model.elements.CURRENT_SLIDE = -1 : ""
            model.StartInjectData(model.elements.CURRENT_SLIDE+1)
        })
        view.elements.closeModalBtn.addEventListener('click',()=>{
            view.elements.model_showing_detail.classList.remove('active');
            model.workShade({shade:true,locate:document.body});
        })
        view.elements.prev.addEventListener('click',function(e){
            model.elements.CURRENT_SLIDE == 0 ? model.elements.CURRENT_SLIDE = 8 : ""
            model.StartInjectData(model.elements.CURRENT_SLIDE-1)
        })
        for (let i = 0;i < view.elements.color_box.length;i++){
            view.elements.color_box[i].addEventListener('click',function(e){
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
        for (let i = 0;i < view.elements.icons.length;i++){
            view.elements.icons[i].addEventListener('click',function(){
                switch (this.dataset.content) {
                    case "open" :
                        view.elements.frame.src = model.elements.OPEN_GIF_SRC;
                        break;
                    case "snapshot" :
                        view.elements.frame.src = model.elements.SNAPSHOT_GIF_SRC;
                        break;
                    case "close" :
                        view.elements.frame.src = model.elements.CLOSE_GIF_SRC;
                        break;
                }
            })
        }
        view.elements.openMenu.addEventListener('mousemove',function(e){
            view.elements.dropdown.classList.remove('hideDropDown')
        })
        view.elements.openMenu.addEventListener('mouseout',function(e){
            view.elements.dropdown.classList.add('hideDropDown')
        });
        [...view.elements.mobile_dropdown_links].forEach((element,index)=>{
            element.addEventListener('click',function(e){
                if (this.parentElement.querySelector('.mobile-dropdown') !== null){
                    model.togglePlay(this.parentElement.querySelector('.mobile-dropdown'),'mobile-dropdown-open')
                }
                else {
                    console.log('Please Require mobile-dropdown when ever you are using mobile-dropdown-link class!')
                }
            })
        });
        view.elements.close_rightside_mobile.addEventListener('click',function(e){
            model.togglePlay(this.parentElement.parentElement,"open-rightside-mobile")
            model.workShade({shade:true,locate:document.body})
        });
        [...view.elements.menu_mobile_open_icons].forEach((element,index)=>{
            element.addEventListener('click',function(e){
                model.togglePlay(view.elements.close_rightside_mobile.parentElement.parentElement,"open-rightside-mobile")
                model.workShade({shade:true,locate:document.body})
            })
        })
    }
    return {
        init
    }
})()
export default controller;
/* Writeen By Alireza Mosavi || i love elon musk */