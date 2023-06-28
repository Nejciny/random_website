
window.addEventListener('scroll', reveal);

function reveal(){

    var reveals = document.querySelectorAll('.reveal');
    var windowheight = window.innerHeight;
    var revealpoint = 0;


    for (var i=0; i<reveals.length; i++){
        var revealtop= reveals[i].getBoundingClientRect().top;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }

    // modern design container ----------------------

    var box = document.querySelector('.column_container');
    var col = document.getElementsByClassName('column');
    var revealtop_box = box.getBoundingClientRect().top;

    if(revealtop_box < windowheight - revealpoint){

        for (var i=0; i<col.length; i++){
            col[i].classList.add("col_active");       
        }
    }
    else{
        for (var i=0; i<col.length; i++){
            col[i].classList.remove("col_active");       
        }
    }


    

}

