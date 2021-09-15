const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getEssentialsList() {
    const { itemsNeeded } = getUser();

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