function popup(clicked_img){
    const popup_background = document.querySelector('.popup_container');
    const img = document.querySelector('.popup_img');
    // img.style.backgroundImage ="url('images/ear_buds.jpg')" ;
    img.innerHTML='<img class="clicked_img" src="./images/'+clicked_img+'.jpg"/>';
    popup_background.style.display='unset';

    console.log(clicked_img);

}

function close_menu(){
    const menu = document.getElementById('links');
    const close_btn = document.getElementById('nav-icon3');
    menu.classList.remove('open');
    close_btn.classList.remove('open');
}


document.addEventListener('mouseup', function(e){
    const container1 = document.querySelector('.clicked_img');
    const toggle_popup = document.querySelector('.popup_container');

    const mobile_menu = document.getElementById('links');
    const close_btn = document.getElementById('nav-icon3');

    if (!container1.contains(e.target) ){
        toggle_popup.style.display='none';
    }
    else{
        console.log(0);
    }


});
