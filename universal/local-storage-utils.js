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