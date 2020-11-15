import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.favourite-things'),
            userTemplate = document.querySelector('#mainContainer').content;

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.favourite-things').children;

            currentUserText[1].src = `images/${data[user].avatar}`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].description;

            userSection.appendChild(currentUser);
        }
    }

    function retrieveProjectInfo() {
        debugger;
        console.log(this.id);
     fetchData(`./includes/index.php?id=${this.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderPortfolioThumbnails(thumbnails) {
        let userSection = document.querySelector('.favourite-things'),
            userTemplate = document.querySelector('#mainContainer').content;

        for (let user in thumbnails) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.favourite-things').children;

            currentUserText[1].src = `images/${thumbnails[user].avatar}`;
            currentUserText[1].id = thumbnails[user].id;
           
            currentUser.addEventListener("click", retrieveProjectInfo);
            userSection.appendChild(currentUser);
        }
    }
        
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
})();