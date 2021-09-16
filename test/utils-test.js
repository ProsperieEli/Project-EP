// IMPORT MODULES under test here:

import { setUser, USER } from '../universal/local-storage-utils.js';


const test = QUnit.test;

const testUser = {

    dependents: 1,
    adults: 1,
    seniors: 1,
    totalFamily: 3, 
    tOrF : [],
    itemsNeeded: [],
    itemsSuggested: [],
};

test('setUser should set a user object into localStorage', (expect) => {
    localStorage.removeItem(USER);

    setUser(testUser);
    
    const actual = JSON.parse(localStorage.getItem(USER));

    expect.deepEqual(actual, testUser);
});
