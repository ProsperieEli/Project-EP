function userCreate(form){
    const userinput = {
        youngChildren: form.get('under-3'),
        dependents: form.get('kids'),
        adults: form.get('adults'),
        seniors: form.get('seniors'),
        salary: form.get('salary'),
        pets: form.get('pets'),
        savings: form.get('emergency-funds'),
        haveTransport: form.get('havetransport'),
        prescriptionMed: form.get('prescriptionmed'),
        prescriptionEye: form.get('prescriptioneye'),
        assets: form.get('assets'),
    };
    return userinput;
}

export default userCreate;