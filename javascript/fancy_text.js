title = document.querySelectorAll('#hero_logo path');

// HERO TEXT ANIMATION: get length for each letter for CSS 

for(i=0;i<title.length;i++){
    console.log('letter'+ [i]+ ': '+ (title[i].getTotalLength()));
}


// TEAM CONTAINER: typewriter animation

const second_text = document.querySelector('.second_text');

const textLoad= () =>{
    setTimeout(() => {
        second_text.textContent= "Professional";
    }, 0);
    setTimeout(() => {
        second_text.textContent= "Reliable";
    }, 4000);
    setTimeout(() => {
        second_text.textContent= "Efficient";
    }, 8000);
}

textLoad();
// sum of setTimeout time
setInterval(textLoad,12000);