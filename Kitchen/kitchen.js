// order managing section
const incomingTab = document.getElementById('incoming-tab');
const preparingTab = document.getElementById('preparing-tab');
const readyTab = document.getElementById('ready-tab');

// source section - catch
const incomingSection = document.getElementById('incoming-section');
const preparingSection = document.getElementById('preparing-section');
const readySection = document.getElementById('ready-section');


// load default content
document.addEventListener('DOMContentLoaded', ()=>{
    loadContent('incoming-section');
});


function loadContent(id){
    if(id == null || id == "" || id == undefined){
        console.log(id);
        
        alert("Content Id is invalid!");
    }

    // load section
    const orderSection = document.getElementById('order-section');
    
    // clear previous content
    orderSection.innerHTML = "";
    

    switch(id){
        case "incoming-section":
            const cloneContent = incomingSection.cloneNode(true);
            cloneContent.classList.remove("hidden");
            orderSection.appendChild(cloneContent);

            break;

        case "preparing-section":
            const cloneContentPrepare = preparingSection.cloneNode(true);
            cloneContentPrepare.classList.remove("hidden");
            orderSection.appendChild(cloneContentPrepare);
            
            break;

        case "ready-section":
            const cloneContentReady = readySection.cloneNode(true);
            cloneContentReady.classList.remove("hidden");
            orderSection.appendChild(cloneContentReady);
            
            break;
    }

}


