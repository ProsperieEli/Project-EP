 //change needed from false to true for:
    //youngChildren id: 102, 
    //pets id: 108
    //transport  id: 103
    //prescriptions id: 106
    //eyewear id: 101
    //assets id: tbd
        // function take in id, change render from false to true

import { findById } from '../universal/arr.js';
import { getSuggestedList, setSuggested } from '../universal/local-storage-utils.js';

// haha i bet you can think of a better name than I did here, but needsToRender doesn't quite describe the functionality
export function setShouldRenderIfInSuggested(id) {
    let specificSuggestions = getSuggestedList();
    let currentSuggestion = findById(specificSuggestions, id);
    // cool, so it checks to see if it's on the suggestions lists, then if it is, renders it? very cool. It does more than 'needsToRender' (which i would expect to be a pure function that returns a boolean), so I'd change the name
    currentSuggestion.render = true;
    setSuggested(specificSuggestions);
}
