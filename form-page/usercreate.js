
function userCreate(form){
    const userinput = {

        youngChildren: form.get('under-3'),
        dependents: Number(form.get('kids')),
        adults: Number(form.get('adults')),
        seniors: Number(form.get('seniors')),
        salary: form.get('salary'),
        pets: form.get('pets'),
        savings: form.get('emergency-funds'),
        haveTransport: form.get('transportation'),
        prescriptionMed: form.get('prescription'),
        prescriptionEye: form.get('eyewear'),
        assets: form.get('assets'),
    };
    return userinput;
}

export default userCreate;