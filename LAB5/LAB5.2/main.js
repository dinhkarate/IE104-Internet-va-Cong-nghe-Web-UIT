const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
/*22520252 - Pham Quang Dinh*/
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    
/*22520252 - Pham Quang Dinh*/
    newImage.onclick = function(e) {
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
    }
    
    thumbBar.appendChild(newImage);
}

btn.onclick = function() {
    const currentClass = btn.getAttribute('class');
    /*22520252 - Pham Quang Dinh*/
    if(currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
/*22520252 - Pham Quang Dinh*/