//HTML***********************
//Div for pie graph
//(2)Divs for list
//Two divs
    //one for mainting your kit
    //one for storing
//An imagine near bottom of page
    //disclaimer expressing to reach out to local emergency responders in the actual case of disasters; we can only give opionions, not facts.
    //For entertainment purposes only
//A section for resources.
//Logo


//JS************************
    //get list
    //pie graph(50% necessity) 50% need.
    //Any items not marked as "true" return here in list area.


























































































































import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';




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
const myChart = new Chart(ctx, 
    //eslint-disable-line 
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
    
   
 
    

import { renderEssentialsNeeded, renderSuggestedNeeded } from '../universal/render.js';

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
