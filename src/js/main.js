
//-----------------------------------------
// Font Awesome
//-----------------------------------------
    
    function alert(msg,type = 'success',stick = false,stayTime = 3000,position = 'bottom-right')
    {
        removeAlert();

        myToast = $().toastmessage('showToast', {
            text      : msg,
            sticky    : stick,
            position  : position, 
            type      : type,
            closeText : '',
            stayTime  : stayTime,
        });
    }

    function removeAlert()
    {
        let check = document.querySelector('.toast-item-wrapper');

        if(check){check.remove()}
    }

    function handlersPageFA(){
        const navBar  = document.querySelector('#alphabeticNav');
        const navCont = navBar.querySelector('#search-container');
        const navBtns = navBar.querySelector('#navBtns');
        const navWarp = navCont.querySelector('#search-wraper');
        const navResp = navCont.querySelector('#search-respv');
        const keyWord = navWarp.querySelector('.searcher');
        const alplist = document.querySelectorAll('.alphaSec');
        const btnlist = document.querySelectorAll('.guideContainer button');
        const empty   = document.querySelector('#empty');
        const family  = document.querySelectorAll('.familySec');
        const alpha   = document.querySelectorAll('.alphaSec');

        $('.gy').on('mouseover', ()=>{
            if(event.currentTarget.classList.contains('fa-grin')){
                event.currentTarget.classList.remove('fa-grin');
                event.currentTarget.classList.add('fa-grin-wink');
            }
        });

        $('.gy').on('mouseout', ()=>{
            if(event.currentTarget.classList.contains('fa-grin-wink')){
                event.currentTarget.classList.remove('fa-grin-wink');
                event.currentTarget.classList.add('fa-grin');
            }
        });

        $('.fr').append('<i class="switch fas fa-redo"></i>');

        $('.guideContainer button').click(()=>{

            let control = event.target.classList;

            if(!control.contains('switch')){

                let copyText = event.target.parentNode.title || event.target.title;
                
                navigator.clipboard.writeText(copyText)
                    .then(() => {
                        alert("Copied!",'success',false,1500);
                    })
                    .catch(() => {
                        alert("Something went wrong",'error',true);
                    });
            }
        });

        $('.switch').click(()=>{
            let icon = event.currentTarget.previousElementSibling.classList;

            if(icon.contains('fas')){
                icon.remove('fas');
                icon.add('far');
            }

            else if(icon.contains('far')){
                icon.remove('far');
                icon.add('fas');
            }
        });

        $('#restart').click(()=>{
            let far = document.querySelectorAll('.far');

            for (i = 0; i < far.length; i++) {
                far[i].classList.remove('far');
                far[i].classList.add('fas');
            }
        });

        $(navWarp).click(()=>{
            let id = event.target.id;

            if (id == 'search-wraper' || id == 'magni'){
                if(navCont.classList.contains('maxW')){
                    navBtns.classList.remove('wrapNav');
                    navCont.classList.remove('maxW');
                    navResp.classList.remove('showBar');
                }else{
                    navBtns.classList.add('wrapNav');
                    navCont.classList.add('maxW');
                    navResp.classList.add('showBar');
                }
            }
        });

        $('html').on('click', function lf(){

            if(event.target.id != 'search-container' && $(event.target).parents('#search-container').length == 0 && $(event.target).children('#search-container').length == 0){
                navCont.classList.remove('maxW');
                navBtns.classList.remove('wrapNav');
                navResp.classList.remove('showBar');
            }
        });

        $('.searcher').on('keyup',()=>{
            let key = event.currentTarget;

            $('.searcher').val(key.value);

            if(key.value.length > 0 && key.value != ' '){
                for (let i = 0; i < btnlist.length; i++) {

                    str = btnlist[i].title;

                    if(str.indexOf(key.value) == -1) {
                        btnlist[i].classList.add('hidden');
                    }else{
                        btnlist[i].classList.contains('hidden')?btnlist[i].classList.remove('hidden'):null;
                    }
                }

                for (i = 0; i < family.length; i++) {
                    if($(family[i]).find('.hidden').length == $(family[i]).find('button').length){
                        family[i].classList.add('hidden');
                    }else{
                        family[i].classList.contains('hidden')?family[i].classList.remove('hidden'):null;
                    }
                }

                for (i = 0; i < alpha.length; i++) {
                    if($(alpha[i]).find('div.hidden').length == 2){
                        alpha[i].classList.add('hidden');
                    }else{
                        alpha[i].classList.contains('hidden')?alpha[i].classList.remove('hidden'):null;
                    }
                }

                (btnlist.length == $('.guideContainer button.hidden').length) ? empty.classList.remove('hidden'):empty.classList.add('hidden');
            }else{
                for (i = 0; i < alpha.length; i++) {
                    alpha[i].classList.contains('hidden')?alpha[i].classList.remove('hidden'):null;
                }

                for (i = 0; i < family.length; i++) {
                    family[i].classList.contains('hidden')?family[i].classList.remove('hidden'):null;
                }

                for (let i = 0; i < btnlist.length; i++) {
                    btnlist[i].classList.remove('hidden');
                }

                ($('.guideContainer button:not(.hidden)').length > 0) ? empty.classList.add('hidden'):empty.classList.remove('hidden');
            }
        });
    }
    
// ----------------------------------------------------------------------
//                       When Document Ready
// ----------------------------------------------------------------------
    
    $(document).ready(()=>{
        handlersPageFA();
    });


    !function(t){
        t("body").on("mousewheel DOMMouseScroll wheel",function(o){
            if(768<t(window).width()){
                let e=o.originalEvent,l=e.wheelDelta||-e.detail;this.scrollTop+=30*(l<0?1:-1)
            }
        }),

        t(document).on("scroll",function(){
            100<t(this).scrollTop()?t(".scroll-to-top").fadeIn():t(".scroll-to-top").fadeOut()
        }),

        t(document).on("click","a.scroll-to-top",function(o){ 
            let e=t(this);
            t("html, body").stop().animate({scrollTop:t(e.attr("href")).offset().top},0)
        })
    }(jQuery);
