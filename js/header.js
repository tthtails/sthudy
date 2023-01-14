var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigationHeader');
var subHeader = document.getElementById('subHeader');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;

    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw'; //se for true
        navigationHeader.style.animationName = 'showSidebar';
        subHeader.style.filter = 'blur(2px)';
    } else {
        navigationHeader.style.marginLeft = '-100vw'; //se for false
        navigationHeader.style.animationName = '';
        subHeader.style.filter = '';
    }
}

function closeSidebar() {
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function() {
    if(window.innerWidth > 768 && showSidebar) {
        toggleSidebar();
    }
})