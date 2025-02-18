document.querySelector('#intro').addEventListener('click', (event) => navigate(event));

document.querySelector('#work').addEventListener('click', (event) => navigate(event));

document.querySelector('#about').addEventListener('click', (event) => navigate(event));

document.querySelector('#contact').addEventListener('click', (event) => navigate(event));

function navigate(event) {
    event.preventDefault();
    
    const tabs = [...document.querySelectorAll('.tab')];

    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    document.querySelector(`#${event.target.id}-container`).style.display = "block";
}

document.querySelector('#xmark').addEventListener('click', (event) => {
    event.preventDefault();

    const tabs = [...document.querySelectorAll('.tab')];

    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
    }

    document.querySelector('#main-container').style.display = "block";
});
