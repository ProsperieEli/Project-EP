import { getUser, setEssentials, setSuggested } from '../universal/local-storage-utils.js';
export { renderEssentialsNeeded, renderSuggestedNeeded, renderLinks };


function renderEssentialsNeeded(essentialItems){
    const essentialsUL = document.getElementById('essential-ul');

    essentialsUL.innerHTML = '';

    for (let item of essentialItems) {

        const user = getUser();
        const listItemEl = document.createElement('li');
        const listItem = document.createElement('p');

        listItemEl.classList.add('list-itemEl');
        listItem.classList.add('list-item');

        if (item.completed === true){
            listItem.classList.add('completed-item');
        }

        listItem.textContent = item.description;
        //concat a sentence with a findbydescription/id function and add in backticks/literals for totalfamily, totalGoods of the id.name
        //go in render function on prep page
        if (item.amountPerPerson) {
            const totalNeeded = Number((item.amountPerPerson * user.totalFamily) * item.numDays);
            listItem.textContent = item.description + `. You have ${user.totalFamily} members in your household. You will need ${totalNeeded} ${item.consumables}. `;
        }
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
            const user = getUser();
            const listItemEl = document.createElement('li');
            const listItem = document.createElement('p');

            listItemEl.classList.add('list-itemEl');
            listItem.classList.add('list-item');

            if (item.completed === true){
                listItem.classList.add('completed-item');
            }
        //concat a sentence with a findbydescription/id function and add in backticks/literals for totalfamily, totalGoods of the id.name
        //go in render function on prep page

            listItem.textContent = item.description;

            if (item.amountPerPerson) {
                const totalSuggested = (item.amountPerPerson * user.totalFamily) * item.numDays;
                listItem.textContent = item.description + `. You have ${user.totalFamily} members in your household. You will need ${totalSuggested} ${item.consumables}. `;
            }

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

function renderLinks(listOfItems, ulContainerElement) {
    // ulContainerElement.innerHTML = '';

    for (let item of listOfItems) {

        const liEl = document.createElement('li');
        const linkEl = document.createElement('a');
        
       
        linkEl.textContent = item.description;
        linkEl.href = item.link;
        linkEl.target = '_blank';

        liEl.classList.add('link-container');
        linkEl.classList.add('link-item');

        //a:visited pseudoselector was automatically applying to the dynamic links, so this is a workaround
        linkEl.addEventListener('click', () => linkEl.classList.add('visited'));

        liEl.append(linkEl);
        ulContainerElement.append(liEl);
    }
    
}