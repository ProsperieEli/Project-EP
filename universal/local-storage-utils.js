export const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getEssentialsList() {
    const { itemsNeeded } = getUser(); // nice destructuring in this file!

    return itemsNeeded;
}

export function getSuggestedList() {
    const { itemsSuggested } = getUser();

    return itemsSuggested;
}

export function setEssentials(essentialItems) {
    const user = getUser();

    user.itemsNeeded = essentialItems;

    setUser(user);
} 

export function setSuggested(suggestedItems) {
    const user = getUser();

    user.itemsSuggested = suggestedItems;

    setUser(user);
} 

//*universal for function, call func on form-page* add completed = false to all essential and suggested
//*preppy* eventlistener: change to completed = true when item clicked (!user.completed) classList.toggle

// such a slick function!
export function addCompletedProp() {
    const essentials = getEssentialsList();
    const suggested = getSuggestedList();

    essentials.forEach(item => {
        item.completed = false;
    });

    suggested.forEach(el => {
        el.completed = false;
    });

    setEssentials(essentials);
    setSuggested(suggested);

}

// it's cool to see your stretch goal planning out here. TODOs in production codebases are very common
//Ticket 2
// calculate amount of food and water
// take in total household # and multiply by (amount: 1gallon/day for numDays: 3 days,  3 meals/day for 3 days, 1 mask/person, 1 sleeping bag/person, 1 extra set of clothing per person)
// allData.forEach(item => if(item.amount))
// if !numDays, numDays = 1
// function calcAmt(numNeeded, howManyDays)
// push a new item.description 'your household needs 12 gallons of water'