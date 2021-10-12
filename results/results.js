import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';

import { renderLinks } from '../universal/render.js';

const essentialList = getEssentialsList();
const suggestedList = getSuggestedList();

// again, silly name I came up with, I bet you can find something better
function getRendereablesByCompletedStatus(list, shouldBeComplete = true) { // here i'm setting shouldBeComplete to true by default
    return list
        .filter(({ render }) => render === true)
        .filter(({ completed }) => completed === shouldBeComplete);
}

const completedRequiredItems = getRendereablesByCompletedStatus(essentialList);
const completedNeededItems = getRendereablesByCompletedStatus(suggestedList);
const uncompletedRequiredItems = getRendereablesByCompletedStatus(essentialList, false);
const uncompletedNeededItems = getRendereablesByCompletedStatus(suggestedList, false);

const dataArray = [
    completedRequiredItems.length, 
    completedNeededItems.length, 
    uncompletedRequiredItems.length, 
    uncompletedNeededItems.length
];

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
    

const essentialsUL = document.getElementById('essential-ul');
const suggestedUL = document.getElementById('suggested-ul');

// seems like these don't change on this page, right? and the filter looks to be the same as the one used upstairs. Seems like we could just reuse those?
renderLinks(uncompletedRequiredItems, essentialsUL);
renderLinks(uncompletedNeededItems, suggestedUL);