const pullTabElmt = document.getElementById('tabButton');
const containerElmt = document.getElementById('containerTab');
let mediaQuaryScale = window.matchMedia("(max-width: 1000px)");
let eventTab = false; //containerTab starts Not Open
let contianerRElmt = document.getElementById('routineContainer');

//Routien elmt
let sunday = document.getElementById('Sunday');
let monday = document.getElementById('Monday');
let tuesday = document.getElementById('Tuesday');
let wednesday = document.getElementById('Wednesday');
let thursday = document.getElementById('Thursday');
let friday = document.getElementById('Friday');
let saturday = document.getElementById('Saturday');

pullTabElmt.addEventListener('click', function() {
    mediaQuaryResolutionScale(mediaQuaryScale);
})

//Value 
if (mediaQuaryScale.matches){
    contianerRElmt.style.gap = '1rem';
    sunday.value = 'S';
    monday.value = 'M';
    tuesday.value = 'T';
    wednesday.value = 'W';
    thursday.value = 'T';
    friday.value = 'F';
    saturday.value = 'S';
    
}
else{
    contianerRElmt.style.gap = '2rem';
}

// Transitions, Positioning, Color, Z-Index 
function mediaQuaryResolutionScale(x) {
    if(mediaQuaryScale.matches){
        if(eventTab === false){
            containerElmt.style.boxShadow = '0 0 30px #a10499';
            containerElmt.style.backgroundColor = "#3D3B3B";
            containerElmt.style.transition = '750ms';
            containerElmt.style.height = '190px';
            containerElmt.style.zIndex = '2';
            
            pullTabElmt.style.transform = 'translateY(200px)';
            pullTabElmt.style.transition = '750ms';
            pullTabElmt.style.zIndex = '1';
            pullTabElmt.style.backgroundColor = '#000000';
            eventTab = true;
        }
        else{
            containerElmt.style.boxShadow = 'none';
            containerElmt.style.zIndex = '1';
            containerElmt.style.height = '2rem';
            containerElmt.style.backgroundColor = "#7E7D7D";
            containerElmt.style.transform = "translateY(0)";
            containerElmt.style.transition = '750ms';
    
            pullTabElmt.style.zIndex = '2';
            pullTabElmt.style.backgroundColor = '#C9C5C5';
            pullTabElmt.style.transform = 'translateY(0)';
            
            eventTab = false;
        }
    }else{
        if(eventTab === false){
            containerElmt.style.boxShadow = '0 0 30px #a10499';
            containerElmt.style.backgroundColor = "#3D3B3B";
            containerElmt.style.transition = '750ms';
            containerElmt.style.width = '190px';
            containerElmt.style.zIndex = '2';
            
            pullTabElmt.style.transform = 'translateX(200px)';
            pullTabElmt.style.transition = '750ms';
            pullTabElmt.style.zIndex = '1';
            pullTabElmt.style.backgroundColor = '#000000';
            eventTab = true;
        }
        else{
            containerElmt.style.boxShadow = 'none';
            containerElmt.style.zIndex = '1';
            containerElmt.style.width = '2rem';
            containerElmt.style.backgroundColor = "#7E7D7D";
            containerElmt.style.transform = "translateX(0)";
            containerElmt.style.transition = '750ms';
    
            pullTabElmt.style.zIndex = '2';
            pullTabElmt.style.backgroundColor = '#C9C5C5';
            pullTabElmt.style.transform = 'translateX(0)';
            
            eventTab = false;
        }
    }
    console.log('div was clicked');
}

/*


*/

