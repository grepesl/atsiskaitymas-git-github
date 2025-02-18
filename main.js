document.querySelector('#intro').addEventListener('click', navigate);
document.querySelector('#work').addEventListener('click', navigate);
document.querySelector('#about').addEventListener('click', navigate);
document.querySelector('#contact').addEventListener('click', navigate);

function navigate(event) {
    event.preventDefault();
    
    const tabs = [...document.querySelectorAll('.tab')];

    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    document.querySelector('#main-container').style.display = "none";

    document.querySelector(`#${event.target.id}-container`).style.display = "block";
}

const xmarks = [...document.querySelectorAll('.xmark')]
xmarks.forEach(item => item.addEventListener('click', close));

function close(event){
    event.preventDefault();

    const tabs = [...document.querySelectorAll('.tab')];

    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    document.querySelector('#main-container').style.display = "block";
}