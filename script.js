document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', function() {
        searchButton.style.display = 'none';
        searchInput.style.display = 'inline-block';
        searchInput.focus();
    });

    searchInput.addEventListener('blur', function() {
        if (searchInput.value.trim() === '') {
            searchInput.style.display = 'none';
            searchButton.style.display = 'inline-block';
        }
    });

    // Kode untuk slideshow
    const slideshowContainer = document.getElementById('slideshow-container');
    const slides = [
        { image: 'G1.jpg', text: 'Temukan Gaya Fashion Terbaru' },
        { image: 'G2.jpg', text: 'Koleksi Musim Panas yang Trendy' },
        { image: 'G3.jpg', text: 'Aksesori untuk Gaya Anda' }
    ];
    let currentSlideIndex = 0;

    function createSlideElement(slide) {
        const slideElement = document.createElement('div');
        slideElement.style.backgroundImage = `url('image/${slide.image}')`;
        slideElement.classList.add('slide');
        
        const textElement = document.createElement('h2');
        textElement.classList.add('slide-text');
        textElement.textContent = slide.text;
        
        slideElement.appendChild(textElement);
        return slideElement;
    }

    function showNextSlide() {
        const currentSlide = slideshowContainer.querySelector('.slide.active');
        const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        const nextSlide = createSlideElement(slides[nextSlideIndex]);
        
        slideshowContainer.appendChild(nextSlide);
        
        // Trigger reflow
        nextSlide.offsetWidth;
        
        nextSlide.classList.add('active');
        if (currentSlide) {
            currentSlide.classList.add('prev');
            setTimeout(() => {
                slideshowContainer.removeChild(currentSlide);
            }, 1000); // Sesuaikan dengan durasi transisi CSS
        }
        
        currentSlideIndex = nextSlideIndex;
    }

    // Inisialisasi slideshow
    showNextSlide();
    setInterval(showNextSlide, 5000); // Ganti slide setiap 5 detik
});