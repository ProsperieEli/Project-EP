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




   
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, 
    //eslint-disable-line 

    // config = {
    //     type: 'pie',
    //     data: data,
    //   };


    // const data = {
    //     labels: [
    //       'Required %',
    //       'Suggested %',
    //       'Missing required %',
    //       'Missing suggested %',
        
    //     ],
    //     datasets: [{
    //       label: 'Required %',
    //       data: [completedRequiredItems, completedNeededItems, uncompletedRequiredItems, uncompletedNeededItems],
    //       backgroundColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(54, 162, 235)',
    //         'rgb(255, 205, 86)'
    //       ],
    //       hoverOffset: 4
    //     }]
    //   };
    {
        type: 'pie',
        data: {
            labels: completedRequiredItems,
            datasets: [{
                label: 'Required %',
                data: completedRequiredItems,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Required Suggestive %',
                data: completedNeededItems,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Missing Required %',
                data: uncompletedRequiredItems,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Missing Needed %',
                data: uncompletedNeededItems,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
 