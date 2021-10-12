import { getUser } from '../universal/local-storage-utils.js';

function userCreate(form){
    const dependents = Number(form.get('kids'));
    const adults = Number(form.get('adults'));
    const totalFamily = dependents + adults;

    const userinput = {

        dependents,
        adults,
        totalFamily, 
        // this is very interesting! It might be better to just do a hashmap though? You'd need to change how you access and iterate over these values, but if you're only storing a true/false, a hashmap is probably more intuitive
        tOrF : {
            108: form.get('pets'),
            102: form.get('under-3'),
            120: form.get('over-60'),
            103: form.get('generator'),
            106: form.get('prescription'),
            101: form.get('eyewear'),
            119: form.get('assets'),
        },
        // tOrF : [
        //     { id: 108, toggle: form.get('pets') },
        //     { id: 102, toggle: form.get('under-3') },
        //     { id: 120, toggle: form.get('over-60') },
        //     { id: 103, toggle: form.get('generator') },
        //     { id: 106, toggle: form.get('prescription') },
        //     { id: 101, toggle: form.get('eyewear') },
        //     { id: 119, toggle: form.get('assets') }            
        // ],
        itemsNeeded: [],
        itemsSuggested: [],
        
        // totalNeededGoods: totalFamily * itemsNeeded.numDays,
        // totalSuggestedGoods: totalFamily * itemsSuggested.numDays,
    };

    return userinput;
}

export default userCreate;

// const itemsNeeded = user.itemsNeeded;
// const itemsSuggested = user.itemsSuggested;

export function calculateGoods(array){ // is this really an array? arrays don't usually have named properties like amountPerPerson, numDays, etc
 
    const user = getUser(); // should probably call this in here, since you don't use it outside the function, and this will make the function more "portable"
    if (array.amountPerPerson){
        (user.totalFamily * array.amountPerPerson) * array.numDays;
    }  
}
