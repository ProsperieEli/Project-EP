
//should we delete?
// export const user = {
//     Name: '',
//     YoungChildren: false,
//     Dependents: 0,
//     Adults: 0,
//     Seniors: 0,
//     // HouseholdTotal: (user.Dependents),
//     Salary: 0,
//     Pets: false,
//     Savings: 0,
//     HaveTransport: false,
//     PrescriptionMed: false,
//     PrescriptionEye: false,
//     Assets: false,
//     ItemsNeeded: [],
//     ItemsSuggested: [],
//     // stretch
//     // location
// };

//change all data to generic sentence

export const neededItems = [{
    id: 1,
    name: 'water',
    render: true,
    description: `Have 1 gallon of water per person on reserve for up to 3 days`,
    amountPerPerson: 1,
    numDays: 3,
    consumables: `gallons`,

}, {
    id: 2,
    name: 'food',
    render: true,
    description: `Have 3 meals per person for up to 3 days`,
    amountPerPerson: 3,
    numDays: 3,
    consumables: `meals`,       
}, {
    id: 3,
    name: 'radio',
    render: true,
    description: 'Battery-Powered (or hand crank) Radio'        
}, {
    id: 4,
    name: 'flashlight',
    render: true,
    description: 'Flashlight'        
}, {
    id: 5,
    name: 'first-aid',
    render: true,
    description: 'First-Aid Kit'        
}, {
    id: 6,
    name: 'shoes',
    render: true,
    description: 'Pair of Shoes',     
}, {
    id: 7,
    name: 'whistle',
    render: true,
    description: 'Whistle'        
}, {
    id: 8,
    name: 'batteries',
    render: true,
    description: 'Extra Batteries'        
}, {
    id: 9,
    name: 'dust-mask',
    render: true,
    description: `Have 1 dust mask per person`,
    amountPerPerson: 1,
    consumables: `dust masks`,        
}, {
    id: 10,
    name: 'sheeting',
    render: true,
    description: 'Plastic Sheeting'        
}, {
    id: 11,
    name: 'duct-tape',
    render: true,
    description: 'Duct Tape'        
}, {
    id: 12,
    name: 'wipes',
    render: true,
    description: 'Moist Towelettes, Garbage Bags, Plastic Ties'        
}, {
    id: 13,
    name: 'tools',
    render: true,
    description: 'Wrench and/or Pliers'        
}, {
    id: 14,
    name: 'can-opener',
    render: true,
    description: 'Manual Can Opener'        
}, {
    id: 15,
    name: 'map',
    render: true,
    description: 'Local Maps'        
}, {
    id: 16,
    name: 'cell-phone',
    render: true,
    description: 'Cell phone (with chargers and a backup battery)'        
}];

export const suggestedItems = [
    {
        id: 101,
        name: 'eyewear',
        render: false,
        description: 'Prescription eyeglasses and contact lens solution'        
    },
    {
        id: 102,
        name: 'baby',
        render: false,
        description: 'Infant formula, bottles, diapers, wipes and diaper rash cream'        
    },
    {
        id: 103,
        name: 'transportation',
        render: false,
        description: 'links to additional transportation'        
    },
    {
        id: 104,
        name: 'mask',
        render: true,
        description: `Have 1 mask per person (for everyone ages 2 and above)`,
        amountPerPerson: 1,
        consumables: `masks`,        
    },
    {
        id: 105,
        name: 'disinfectants',
        render: true,
        description: 'Soap, hand sanitizer, disinfecting wipes to disinfect surfaces'        
    },
    {
        id: 106,
        name: 'medications',
        render: false,
        description: 'Prescription medications'        
    },
    {
        id: 107,
        name: 'otc-meds',
        render: true,
        description: 'Non-prescription medications such as pain relievers, anti-diarrhea medication, antacids or laxatives'        
    },
    {
        id: 108,
        name: 'pet',
        render: false,
        description: 'Pet food and extra water for your pet'        
    },
    {
        id: 109,
        name: 'cash',
        render: true,
        description: `Cash or traveler's checks`        
    },
    {
        id: 110,
        name: 'documents',
        render: true,
        description: `Important family documents such as copies of insurance policies, identification and bank account records saved electronically or in a waterproof, portable container`   
    },
    {
        id: 111,
        name: 'blankets',
        render: true,
        description: 'Sleeping bag or warm blanket for each person'        
    },
    {
        id: 112,
        name: 'clothing',
        render: true,
        description: `Have 1 change of clothing per person appropriate for your climate`,
        amountPerPerson: 1,
        consumables: `sets`,        
    },
    {
        id: 113,
        name: 'extinguisher',
        render: true,
        description: 'Fire extinguisher'        
    },
    {
        id: 114,
        name: 'matches',
        render: true,
        description: 'Matches in a waterproof container'        
    },
    {
        id: 115,
        name: 'hygiene',
        render: true,
        description: 'Menstrual supplies and personal hygiene items'        
    },
    {
        id: 116,
        name: 'mess-kit',
        render: true,
        description: 'Mess kits, paper cups, plates, paper towels and plastic utensils'        
    },
    {
        id: 117,
        name: 'writing',
        render: true,
        description: 'Paper and pencil'        
    },
    {
        id: 118,
        name: 'games',
        render: true,
        description: 'Books, games, puzzles, or other activities',       
    }    
    // add transportation
];
