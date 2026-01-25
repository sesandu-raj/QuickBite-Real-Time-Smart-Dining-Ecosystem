// source section - catch
const incomingSection = document.getElementById('incoming-section');
const preparingSection = document.getElementById('preparing-section');
const readySection = document.getElementById('ready-section');

// Tabs
const incTab = document.getElementById('incTb');
const prepTab = document.getElementById('prepTb');
const readyTab = document.getElementById('readyTb');


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
            activateTab(incTab);
            cloneContent.classList.remove("hidden");
            orderSection.appendChild(cloneContent);

            break;

        case "preparing-section":
            const cloneContentPrepare = preparingSection.cloneNode(true);
            activateTab(prepTab);
            cloneContentPrepare.classList.remove("hidden");
            orderSection.appendChild(cloneContentPrepare);
            
            break;

        case "ready-section":
            const cloneContentReady = readySection.cloneNode(true);
            activateTab(readyTab);
            cloneContentReady.classList.remove("hidden");
            orderSection.appendChild(cloneContentReady);
            
            break;
    }

}

// tab active funtion
function activateTab(id){
    if(id == incTab){
        incTab.classList.add("tab-active");
        prepTab.classList.remove("tab-active");
        readyTab.classList.remove("tab-active");
    }else if(id == prepTab){
        prepTab.classList.add("tab-active");
        incTab.classList.remove("tab-active");
        readyTab.classList.remove("tab-active");
    }else{
        readyTab.classList.add("tab-active");
        incTab.classList.remove("tab-active");
        prepTab.classList.remove("tab-active");
    }
}