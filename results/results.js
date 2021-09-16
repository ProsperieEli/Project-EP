import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';

import { renderLinks } from '../universal/render.js';

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
                'Required Items Owned',
                'Suggested Items Owned',
                'Missing Required Items',
                'Missing Suggested Items',
        
            ],
            datasets: [{
                label: 'Overall Completed',
                data: dataArray,
                backgroundColor: [
                    'rgb(234, 25, 28)',
                    'rgb(234, 85, 28)',
                    'rgba(234, 25, 29, 0.418)',
                    'rgba(234, 85, 29, 0.418)'
                ],
                hoverOffset: 4
            }],
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom'
            }
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

const essentialsUL = document.getElementById('essential-ul');
const suggestedUL = document.getElementById('suggested-ul');

renderLinks(essentialsRemaining, essentialsUL);
renderLinks(suggestedRemaining, suggestedUL);