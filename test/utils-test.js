// IMPORT MODULES under test here:

import { setUser, getUser, USER, getEssentialsList, setEssentials } from '../universal/local-storage-utils.js';


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

test('getUser should get the user object from localStorage', (expect) => {
    localStorage.setItem(USER, JSON.stringify(testUser));

    const actual = getUser();

    expect.deepEqual(actual, testUser);
});

test('getEssentials should get the list of Needed Items from localStorage', (expect) => {
    localStorage.setItem(USER, JSON.stringify(testUser));

    const actual = getEssentialsList();

    expect.deepEqual(actual, testUser.itemsNeeded);
});

test('setEssentials should set the to do items in localStorage', (expect) => {
    localStorage.setItem(USER, JSON.stringify(testUser));

    const neededItems = [
        {
            id: 1,
            name: 'water',
            render: true,
            description: `Have 1 gallon of water per person on reserve for up to 3 days`,
            amountPerPerson: 1,
            numDays: 3,
            consumables: `gallons`,
        
        }, {
            id: 2,
            name: 'food',
            render: true,
            description: `Have 3 meals per person for up to 3 days`,
            amountPerPerson: 3,
            numDays: 3,
            consumables: `meals`,       
        }, {
            id: 3,
            name: 'radio',
            render: true,
            description: 'Battery-Powered (or hand crank) Radio'        
        }
    ];

    setEssentials(neededItems);

    const updatedUserObj = JSON.parse(localStorage.getItem(USER));

    expect.deepEqual(updatedUserObj.itemsNeeded, neededItems);
});