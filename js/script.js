const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.clouds')

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudPosition = +window.getComputedStyle(cloud).bottom.replace('px','');

    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0)
    {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        cloud.style.animation = 'none';
        cloud.style.cloudPosition = `${cloudPosition}px`;

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown',jump);