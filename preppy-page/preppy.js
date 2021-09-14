

// function renderEssentialsNeeded(){
//     const essentialsDiv= document.getElementById('essential-div');
//     const essentialH1 = document.getElementById('essentialh1');
//     const essentialUL = document.createElement('ul');
//     const 
// }

// function renderSuggestedNeeded(){
//     const suggestedDiv= document.getElementById('suggested-div');
//     const suggestedH1 = document.getElementById('suggestedh1');
// }

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
