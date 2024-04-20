const title = document.querySelector('body');
const subtitle = document.querySelector('h1');

let random = Math.floor(Math.random() * 100);

title.style.background = 'black';

title.style.height = '100vh';

title.style.display = 'flex';

title.style.justifyContent = 'center';

title.style.alignItems = 'center';

subtitle.style.fontFamily = 'sans-serif';

subtitle.style.fontSize = '55px';

subtitle.style.color = 'red';



subtitle.innerHTML = random;