const collapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link'); 
const navBarLink = document.querySelector('.navbar-nav');
const navBar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar-toggler')
const phone = document.querySelector('.icon')
const number = document.querySelector('.number')
const phonee = document.querySelector('.ask-for-price')
const nav = document.querySelector('.nav');
const clickMap = document.querySelector('.click-and-see-map')
const map = document.querySelector('.map')


function openMap() {
    window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9853170163774!2d16.9996871764448!3d51.108731071725394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3de721f5af5%3A0xd5212155188f2d45!2sBonzai%20MMA!5e0!3m2!1sen!2spl!4v1745310480931!5m2!1sen!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"');
  }
clickMap.addEventListener('click', openMap)
const daRade = () => {
    
    if (!navBar.classList.contains('start') && !window.innerWidth < 768) {
        navBar.classList.add('start');
        navBarLink.style.display = 'block';
      
    } else   {
        navBar.classList.remove('start');
        navBarLink.style.display = 'none';   
    } 
}
toggler.addEventListener('click', daRade);




    const updateNavBarOnResize = () => {
        // Sprawdzamy, czy okno jest większe niż 768px
        if (window.innerWidth > 768) {
            // Sprawdzamy obliczony styl display
            const computedStyle = getComputedStyle(navBarLink);
    
            if (computedStyle.display !== 'flex' && window.innerWidth > 768 ) {
                navBarLink.style.display = 'flex ';
                navBarLink.style.flexDirection = 'row';
                navBar.classList.remove('start');
            }  else if (!window.innerWidth < 768 && !navBar.classList.contains('start') ) {
                navBarLink.style.display = '';
                
            } else {
                navBarLink.style.display = 'block';
// 
            }
    
            // Usuwamy klasę 'start', jeśli jest obecna
        }
    };
    
    // Inicjalizowanie
    updateNavBarOnResize();
    
    // Nasłuchiwanie zmiany rozmiaru okna
    window.addEventListener('resize', updateNavBarOnResize);


    window.addEventListener('load', () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';  
        document.head.appendChild(link);
    });
    
    
AOS.init();