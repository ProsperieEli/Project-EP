import { getEssentialsList, getSuggestedList, getUser, setEssentials, setSuggested } from '../universal/local-storage-utils.js';

/* eslint-disable no-undef */
const essentialsUL = document.getElementById('essential-ul');
const suggestedUL = document.getElementById('suggested-ul');


const essentialItemsList = getEssentialsList();
const suggestedItemsList = getSuggestedList();


renderEssentialsNeeded(essentialItemsList);
renderSuggestedNeeded(suggestedItemsList);


function renderEssentialsNeeded(essentialItems){
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
            const totalNeeded = (item.amountPerPerson * user.totalFamily) * item.numDays;
            listItem.textContent = item.description + `You have ${user.totalFamily} members in your household. You will need ${totalNeeded} ${item.consumables} `;
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
                listItem.textContent = item.description + `You have ${user.totalFamily} members in your household. You will need ${totalSuggested} ${item.consumables} `;
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
const getpiebutton = document.getElementById('go-to-results');

getpiebutton.addEventListener('click', () => {
    window.location.href = '../results/index.html';
});





