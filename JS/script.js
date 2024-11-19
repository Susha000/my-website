document.getElementById('burger2').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('open');
});

const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), 
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    path: 'path/to/your-animation.json' 
});
