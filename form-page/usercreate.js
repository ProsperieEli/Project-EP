
function userCreate(form){
    const userinput = {

        dependents: Number(form.get('kids')),
        adults: Number(form.get('adults')),
        seniors: Number(form.get('seniors')),
        salary: form.get('salary'),
        savings: form.get('emergency-funds'),
        tOrF : [
            { id: 108, toggle: form.get('pets') },
            { id: 102, toggle: form.get('under-3') },
            { id: 103, toggle: form.get('transportation') },
            { id: 106, toggle: form.get('prescription') },
            { id: 101, toggle: form.get('eyewear') },
            // { id: tbd, toggle: form.get('assets') },
        ],
        itemsNeeded: [],
        itemsSuggested: []
    };
    return userinput;
}

export default userCreate;