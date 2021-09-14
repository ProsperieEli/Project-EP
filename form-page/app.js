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

import { setUser } from '../universal/local-storage-utils.js';
import userCreate from './usercreate.js';

const form = document.getElementById('user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const user = userCreate(data);

    setUser(user);
    window.location.href = './preppy-page/index.html';
});

// submit

// JS****************************
// Get form data
// change items that are needed based on user input
// Calculate total household members
// Create user ()
// Set user()



