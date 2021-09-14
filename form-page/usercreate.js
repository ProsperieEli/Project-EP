function userCreate(form){
    const userinput = {
        YoungChildren: form.get('youngchildren'),
        Dependents: form.get('dependents'),
        Adults: form.get('adults'),
        Seniors: form.get('seniors'),
        Salary: form.get('salary'),
        Pets: form.get('pets'),
        Savings: form.get('savings'),
        HaveTransport: form.get('havetransport'),
        PrescriptionMed: form.get('prescriptionmed'),
        PrescriptionEye: form.get('prescriptioneye'),
        Assets: form.get('assets'),
    };
    return userinput;
}

export default userCreate;