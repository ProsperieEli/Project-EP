// so all this does is stick around for five second then take them to the real page? cool idea!
setTimeout(() => { // i'd like to see arrow functions for callbacks to avoid inconsistency with the `this` keyword
    window.location = './form-page/index.html';
}, 5000);