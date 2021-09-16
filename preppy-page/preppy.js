import { getEssentialsList, getSuggestedList, getUser, setSuggested } from '../universal/local-storage-utils.js';
import { renderEssentialsNeeded, renderSuggestedNeeded } from '../universal/render.js';
/* eslint-disable no-undef */
// const essentialsUL = document.getElementById('essential-ul');
const suggestedUL = document.getElementById('suggested-ul');


const essentialItemsList = getEssentialsList();
const suggestedItemsList = getSuggestedList();


renderEssentialsNeeded(essentialItemsList);
renderSuggestedNeeded(suggestedItemsList);


const getpiebutton = document.getElementById('go-to-results');

getpiebutton.addEventListener('click', () => {
    window.location.href = '../results/index.html';
});





