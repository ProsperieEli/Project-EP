import { getEssentialsList, getSuggestedList, setEssentials, setSuggested } from '../universal/local-storage-utils.js';

/* eslint-disable no-undef */
const essentialsUL = document.getElementById('essential-ul');
const suggestedUL = document.getElementById('suggested-ul');


const essentialItemsList = getEssentialsList();
const suggestedItemsList = getSuggestedList();

//Ticket 2
// calculate amount of food and water
// take in total household # and multiply by (amount: 1gallon/day for numDays: 3 days,  3 meals/day for 3 days, 1 mask/person, 1 sleeping bag/person, 1 extra set of clothing per person)
// allData.forEach(item => if(item.amount))
// if !numDays, numDays = 1
// function calcAmt(numNeeded, howManyDays)
// push a new item.description 'your household needs 12 gallons of water'

renderEssentialsNeeded(essentialItemsList);
renderSuggestedNeeded(suggestedItemsList);


function renderEssentialsNeeded(essentialItems){
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

// - add completed: false property to each item
// - render each essential item
// - render each suggested
//     - checking if need === true before rendering

// - make each rendered item clickable
//     - completed: true on click
//     - toggleable? stretch goal



//// progress bar animation and config from Chart.js ////
// eslint-disable-next-line no-unused-vars
// const config = {
//     type: 'line',
//     data: essentialItemsList,
//     options: {
//         animation: {
//             duration: 2000,
//             onProgress: function(context) {
//                 if (context.initial) {
//                     initProgress.value = context.currentStep / context.numSteps;
//                 } else {
//                     progress.value = context.currentStep / context.numSteps;
//                 }
//             },
//             onComplete: function(context) {
//                 if (context.initial) {
//                     console.log('Initial animation finished');
//                 } else {
//                     console.log('animation finished');
//                 }
//             }
//         },
//         interaction: {
//             mode: 'nearest',
//             axis: 'x',
//             intersect: false
//         },
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Chart.js Line Chart - Animation Progress Bar'
//             }
//         },
//     },
// };

// const initProgress = document.getElementById('initialProgress');
// const progress = document.getElementById('animationProgress');

// here is where we need to update the data being pulled, to pull from the User object
// const DATA_COUNT = 7;
// const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

// const labels = Utils.months({ count: 7 });
// const data = {
//     labels: labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: Utils.numbers(NUMBER_CFG),
//             borderColor: Utils.CHART_COLORS.red,
//             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//         },
//         {
//             label: 'Dataset 2',
//             data: Utils.numbers(NUMBER_CFG),
//             borderColor: Utils.CHART_COLORS.blue,
//             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//         }
//     ]
// };
