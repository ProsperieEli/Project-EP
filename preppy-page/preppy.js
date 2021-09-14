import { getEssentialsList, getSuggestedList, getUser } from '../universal/local-storage-utils.js';

/* eslint-disable no-undef */
const essentialsUL = document.getElementById('essential-ul');
const essentialH1 = document.getElementById('essentialh1');
const suggestedUL = document.getElementById('suggested-ul');
const suggestedH1 = document.getElementById('suggestedh1');

const essentialItemsList = getEssentialsList();
const suggestedItemsList = getSuggestedList();

renderEssentialsNeeded(essentialItemsList);
renderSuggestedNeeded(suggestedItemsList);


function renderEssentialsNeeded(essentialItems){
    essentialsUL.innerHTML = '';

    for (let item of essentialItems) {

        const listItemEl = document.createElement('li');
        const listItem = document.createElement('p');
        
        listItemEl.classList.add('list-itemEl');
        listItem.classList.add('list-item');

        listItem.textContent = item.itemsNeeded;

        essentialsUL.append(essentialH1, listItemEl, listItem);
    }
    
}

function renderSuggestedNeeded(suggestedItems){
    suggestedUL.innerHTML = '';

    for (let item of suggestedItems) {

        if (item.render) {
            const listItemEl = document.createElement('li');
            const listItem = document.createElement('p');
        
            listItemEl.classList.add('list-itemEl');
            listItem.classList.add('list-item');

            listItem.textContent = item.itemsNeeded;

            suggestedUL.append(suggestedH1, listItemEl, listItem);
        } else {
            alert('nothing to render');
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
const config = {
    type: 'line',
    data: data,
    options: {
        animation: {
            duration: 2000,
            onProgress: function(context) {
                if (context.initial) {
                    initProgress.value = context.currentStep / context.numSteps;
                } else {
                    progress.value = context.currentStep / context.numSteps;
                }
            },
            onComplete: function(context) {
                if (context.initial) {
                    console.log('Initial animation finished');
                } else {
                    console.log('animation finished');
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Animation Progress Bar'
            }
        },
    },
};

const initProgress = document.getElementById('initialProgress');
const progress = document.getElementById('animationProgress');

// here is where we need to update the data being pulled, to pull from the User object
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 });
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
            label: 'Dataset 2',
            data: Utils.numbers(NUMBER_CFG),
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
    ]
};
