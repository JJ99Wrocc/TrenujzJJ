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


const openMap = () =>{
 if(window.getComputedStyle(map).display === 'none'){
    map.style.display ='block'
 } else {
    map.style.display = 'none'
 }
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


    
AOS.init();