const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(stringyUser);
}

export function getEssentialsList() {
    const { ItemsNeeded } = getUser();

    return ItemsNeeded;
}

export function getSuggestedList() {
    const { ItemsSuggested } = getUser();

    return ItemsSuggested;
}

export function setToDoList(itemsToDo) {
    const user = getUser();

    user.itemsToDo = itemsToDo;

    setUser(user);
} 