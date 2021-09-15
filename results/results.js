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
    .filter(essentials => essentials.items)






   
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, 
    //eslint-disable-line 
    {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
 