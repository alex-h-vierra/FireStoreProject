const pullTabElmt = document.getElementById('tabButton');
const containerElmt = document.getElementById('containerTab');

let eventTab = false; //containerTab Not Open
pullTabElmt.addEventListener('click', function() {
    if(eventTab === false){
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
        containerElmt.style.zIndex = '1';
        containerElmt.style.width = '2rem';
        containerElmt.style.backgroundColor = "#7E7D7D";
        containerElmt.style.transform = "translateX(0)";
        containerElmt.style.transition = '750ms';

        pullTabElmt.style.zIndex = '2'
        pullTabElmt.style.backgroundColor = '#C9C5C5';
        pullTabElmt.style.transform = 'translateX(0)';
        
        eventTab = false;
    }
    console.log('div was clicked');
})