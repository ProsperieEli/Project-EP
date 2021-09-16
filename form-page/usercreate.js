import { getUser } from '../universal/local-storage-utils.js';

function userCreate(form){
    const dependents = Number(form.get('kids'));
    const adults = Number(form.get('adults'));
    const totalFamily = dependents + adults;

    const userinput = {

        dependents,
        adults,
        totalFamily, 
        tOrF : [
            { id: 108, toggle: form.get('pets') },
            { id: 102, toggle: form.get('under-3') },
            { id: 120, toggle: form.get('over-60') },
            { id: 103, toggle: form.get('generator') },
            { id: 106, toggle: form.get('prescription') },
            { id: 101, toggle: form.get('eyewear') },
            { id: 119, toggle: form.get('assets') }            
        ],
        itemsNeeded: [],
        itemsSuggested: [],
        
        // totalNeededGoods: totalFamily * itemsNeeded.numDays,
        // totalSuggestedGoods: totalFamily * itemsSuggested.numDays,
    };

    return userinput;
}

export default userCreate;

const user = getUser();
// const itemsNeeded = user.itemsNeeded;
// const itemsSuggested = user.itemsSuggested;

export function calculateGoods(array){
    if (array.amountPerPerson){
        (user.totalFamily * array.amountPerPerson) * array.numDays;
    }  
}
