import { setEssentials, setSuggested } from '../universal/local-storage-utils.js';
export { renderEssentialsNeeded, renderSuggestedNeeded };

function renderEssentialsNeeded(essentialItems){
    const essentialsUL = document.getElementById('essential-ul');
    essentialsUL.innerHTML = '';

    for (let item of essentialItems) {

        const listItemEl = document.createElement('li');
        const listItem = document.createElement('p');
        
        listItemEl.classList.add('list-itemEl');
        listItem.classList.add('list-item');

        if (item.completed === true){
            listItem.classList.add('completed-item');
        }

        listItem.textContent = item.description;

        listItem.addEventListener('click', () => {
            // change to completed = true when item clicked (!user.completed) classList.toggle
            item.completed = (!item.completed); //toggle the completed state when an item is clicked
            setEssentials(essentialItems); //set the essential list to local storage now that it's updated
            renderEssentialsNeeded(essentialItems); //show what's been marked as completed on the page
        });

        listItemEl.append(listItem);
        essentialsUL.append(listItemEl);
    }
    
}

function renderSuggestedNeeded(suggestedItems){
    const suggestedUL = document.getElementById('suggested-ul');
    suggestedUL.innerHTML = '';

    for (let item of suggestedItems) {
  
        if (item.render === true) {
            const listItemEl = document.createElement('li');
            const listItem = document.createElement('p');
        
            listItemEl.classList.add('list-itemEl');
            listItem.classList.add('list-item');

            if (item.completed === true){
                listItem.classList.add('completed-item');
            }

            listItem.textContent = item.description;

            listItem.addEventListener('click', () => {
                // change to completed = true when item clicked (!user.completed) classList.toggle
                item.completed = (!item.completed); //toggle the completed state when an item is clicked
                setSuggested(suggestedItems); //set the suggested list to local storage now that it's updated
                renderSuggestedNeeded(suggestedItems); //show what's been marked as completed on the page
            });

            listItemEl.append(listItem);
            suggestedUL.append(listItemEl);
        } 
    }
}