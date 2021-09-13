const USER = 'USER';

export function getUser() {
    const stringyUser = localStorage.getItem(USER);


    //     const parsedUser = JSON.parse(stringedUser);

    // if (!stringedUser) { return [];}
    // return parsedUser;

    return JSON.parse(stringyUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(stringyUser);
}
