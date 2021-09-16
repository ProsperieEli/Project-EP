import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';

import { renderEssentialsNeeded, renderSuggestedNeeded } from '../universal/render.js';

const essentialList = getEssentialsList();
const suggestedList = getSuggestedList();

const completedRequiredItems = essentialList
    .filter(essential => essential.render === true)
    .filter(({ completed }) => completed === true);

const completedNeededItems = suggestedList
    .filter(needed => needed.render === true)
    .filter(({ completed }) => completed === true);


const uncompletedRequiredItems = essentialList
    .filter(essential => essential.render === true)
    .filter(({ completed }) => completed === false);

const uncompletedNeededItems = suggestedList
    .filter(needed => needed.render === true)
    .filter(({ completed }) => completed === false);

const dataArray = [completedRequiredItems.length, completedNeededItems.length, uncompletedRequiredItems.length, uncompletedNeededItems.length];

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx,  //eslint-disable-line 
    {
    
        type: 'pie',
        data: {
            labels: [
                'Required %',
                'Suggested %',
                'Missing required %',
                'Missing suggested %',
        
            ],
            datasets: [{
                label: 'Required %',
                data: dataArray,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(245, 205, 80)'
                ],
                hoverOffset: 4
            }],
        }
    });
    
//Render lists of remaining items needed
const essentials = getEssentialsList();
const suggested = getSuggestedList();

const essentialsRemaining = essentials
    .filter(item => {
        if (item.render === true && item.completed === false) {
            return item;
        }
    });

const suggestedRemaining = suggested
    .filter(el => {
        if (el.render === true && el.completed === false) {
            return el;
        }
    });

renderEssentialsNeeded(essentialsRemaining);
renderSuggestedNeeded(suggestedRemaining);
