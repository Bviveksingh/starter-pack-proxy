
const apiKey = '<Your API KEY>';

window.addEventListener("load", () => { 
    // Creates input state in the localStorage
    window.localStorage.setItem("inputState", JSON.stringify({}));
});


const getTargetObj = () => {
    return JSON.parse(window.localStorage.getItem("inputState"));
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) { 
        parent.removeChild(parent.firstChild);
    }
}

/* 
    Logical Steps of following getImage func -
    1. Get parent container
    2. Remove all child nodes of parent
    3. Get currentDate from local storage
    4. Create Image element
    5. Set the source of Image element to the proxy object's currentDate(ex: 2022-05-01) property 

*/

const getImage = async () => {
    const imagesDiv = document.getElementById('images');
    removeAllChildNodes(imagesDiv);
    const currentDate = window.localStorage.getItem('currentDate');
    const imageElement = document.createElement('img');
    imageElement.src = await proxyObj[currentDate];
    imagesDiv.append(imageElement);
}

function takeInput(val) {  
    // Push current date
    window.localStorage.setItem("currentDate", val);
}


