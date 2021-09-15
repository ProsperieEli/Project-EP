//HTML***********************
//Div for pie graph
//(2)Divs for list
//Two divs
    //one for mainting your kit
    //one for storing
//An imagine near bottom of page
    //disclaimer expressing to reach out to local emergency responders in the actual case of disasters; we can only give opionions, not facts.
    //For entertainment purposes only
//A section for resources.
//Logo


//JS************************
    //get list
    //pie graph(50% necessity) 50% need.
    //Any items not marked as "true" return here in list area.
    
import { getEssentialsList, getSuggestedList } from '../universal/local-storage-utils.js';

import { renderEssentialsNeeded, renderSuggestedNeeded } from '../universal/render.js';

const essentials = getEssentialsList();
const suggested = getSuggestedList();
const essentialsRemaining = essentials
    .filter(item => {
        if (item.render === true && item.completed === false) {
            return item;
        }
    });

const suggestedRemaining = suggested
    .filter(el => {
        if (el.render === true && el.completed === false) {
            return el;
        }
    });

renderEssentialsNeeded(essentialsRemaining);
renderSuggestedNeeded(suggestedRemaining);
