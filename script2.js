<script src="src/js/lottie.min.js"></script>
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'src/your-animation.json'
});
animation.addEventListener('data_failed', function() {
    console.error('Failed to load animation');
});
