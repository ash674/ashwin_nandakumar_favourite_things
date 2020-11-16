import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    console.log('loaded');
    function retrieveProjectInfo() {
        debugger;
        var projectID = event.target.id;
        var project = event.target.parentElement;
     fetchData(`./includes/index.php?id=${projectID}`).then(projectData => addText(projectData, project)).catch(err => console.log(err));
    }

    function addText(projectData, element){
        let currentUserText = element.children;
        currentUserText[2].textContent = projectData[0].text;
    }
    function renderPortfolioThumbnails(thumbnails) {
        let userSection = document.querySelector('.favourite-things'),
            userTemplate = document.querySelector('#mainContainer').content;

        for (let user in thumbnails) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.favourite-things').children;

            currentUserText[0].src = `images/${thumbnails[user].avatar}`;
            currentUserText[0].id = thumbnails[user].id;
           
            currentUser.addEventListener("click", retrieveProjectInfo);
            userSection.appendChild(currentUser);
        }
    }
        
    fetchData("./includes/index.php").then(projectData => renderPortfolioThumbnails(projectData)).catch(err => console.log(err));
})();