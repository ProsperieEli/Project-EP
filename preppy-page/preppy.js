import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';
import { renderEssentialsNeeded, renderSuggestedNeeded } from '../universal/render.js';
/* eslint-disable no-undef */
// const essentialsUL = document.getElementById('essential-ul');


const essentialItemsList = getEssentialsList();
const suggestedItemsList = getSuggestedList();

// so clean, thanks to these render functions! . . . you might even be able to move the `getEssentialList` and `getSuggestedList` calls to the function to make this page super clean
renderEssentialsNeeded(essentialItemsList);
renderSuggestedNeeded(suggestedItemsList);


const getPieButton = document.getElementById('go-to-results'); // i'd like to see this camelCased

getPieButton.addEventListener('click', () => {
    window.location.href = '../results/index.html';
});





