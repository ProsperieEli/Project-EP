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

export function needsToRender(id) {
    let specificSuggestions = getSuggestedList();
    let currentSuggestion = findById(specificSuggestions, id);
    currentSuggestion.render = true;
    setSuggested(specificSuggestions);
}
