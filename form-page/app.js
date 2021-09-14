 // HTML****************************

 // paragraph explaining what to do
 // form
    // Location*
    
    // Family: (dropdown)
        // -Children
        // -Adults(19-59)
        // -Seniors 60+ 
    // Kids under 3  (t/f)
    // Pets (t/f)
    // Prescriptions (t/f)
    // Assets (t/f)
    // Motorized transportation  (t/f)
    // Salary Range* (dropdown)
    // Emergency funds (dropdown)

import { setUser, setEssentials, setSuggested, getUser } from '../universal/local-storage-utils.js';
import userCreate from './usercreate.js';
import { neededItems, suggestedItems } from '../universal/data.js';
import { needsToRender } from './form-utils.js';

const form = document.getElementById('user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const user = userCreate(data);
    
    setUser(user);

    //set lists
    setEssentials(neededItems);
    setSuggested(suggestedItems);

    const userWithLists = getUser();
    const possibleItems = userWithLists.tOrF;
    possibleItems.forEach(({ id, toggle }) => {
        if (toggle === 'on') {
            needsToRender(id);
        }
    });
    
    //add up total water needed
    //add up total food needed

   

    window.location.href = '../preppy-page/index.html';
});

// submit

// JS****************************
// Get form data
// change items that are needed based on user input
// Calculate total household members
// Create user ()
// Set user()



