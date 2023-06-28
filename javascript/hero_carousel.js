
var mouse_enter = 0;
const carousel_speed = 8000;


hero = document.querySelector('.hero');
left_btn = document.getElementById('controls_left');
right_btn = document.getElementById('controls_right');


// Activate slider by controls

direction = -1;
auto_play = 1;
transition_time_seconds = 2; 
btn_lock = 2500; // in ms --> match it with var transition_time_seconds 

function test () {
    console.log(10);
}

function carousel (){
    if (mouse_enter == 0){
        hero = document.getElementById('hero');
        hero.style.transform="translate(-100%)";
    
    }
    else{
        console.log('mouse is inside the Hero container!');
    }
}

// prevents weird slide change if you try to slide in the opposite direction before the slide animation finishes
function slide(btn_direction){
    btn_left = document.getElementById('controls_left');
    btn_right= document.getElementById('controls_right');


    if (btn_direction =='controls_left'){
        btn_right.disabled = true;
        setTimeout(() => {
            btn_right.disabled = false;
        }, btn_lock);
    }
    else if (btn_direction =='controls_right'){
        btn_left.disabled = true;
        setTimeout(() => {
            btn_left.disabled = false;
            console.log('right_click');
        }, btn_lock);
    }
}

right_btn.addEventListener('click', function(){
    // if (direction == 1) {
    //     hero.prepend(hero.lastElementChild);
    // }

    direction = -1;

    hero.style.justifyContent = 'flex-start';
    hero.style.transform = 'translate(-100%)';
    
});

left_btn.addEventListener('click', function(){
    if (direction == -1) {
        hero.appendChild(hero.firstElementChild);
        direction = 1;
    }

    auto_play = 0;
    
    
    hero.style.justifyContent = 'flex-end';
    hero.style.transform = 'translate(100%)';

});

// Carousel auto play
setInterval(function() {
    carousel()
}, carousel_speed);


// set translate back to 0 after the end of transition
hero.addEventListener('transitionend', function(){

    if (direction == -1){
        hero.appendChild(hero.firstElementChild);
    }
    else if (direction == 1) {
        hero.prepend(hero.lastElementChild);
        direction = -1;
    }

    hero.style.transition = 'none';
    hero.style.transform = 'translate(0)';
   
    setTimeout(function(){
        hero.style.transition = 'transform 2s';
    })

    // -----------------------------------------------------------------------

    if (auto_play == 0){
        hero.prepend(hero.lastElementChild);
        hero.style.justifyContent = 'flex-start';
        auto_play = 1;


        hero.style.transition = 'none';
        hero.style.transform = 'translate(0)';

        setTimeout(function(){
            hero.style.transition = 'transform 2s';
        })
    }

})


// check if mouse is in/outside hero container
hero.addEventListener('mouseenter', () => {
    mouse_enter = 1;
});
hero.addEventListener('mouseleave', () => {
    mouse_enter = 0;
});


// disables auto play if you hover over control buttons
left_btn.addEventListener('mouseenter', () => {
    mouse_enter = 1;
});
right_btn.addEventListener('mouseenter', () => {
    mouse_enter = 1;
});