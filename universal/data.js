
export const neededItems = [{
    id: 1,
    name: 'water',
    render: true,
    description: `Have 1 gallon of water per person on reserve for up to 3 days`,
    amountPerPerson: 1,
    numDays: 3,
    consumables: `gallons`,
    link: 'https://www.amazon.com/Blue-Gallon-Water-Storage-WaterPrepared/dp/B0785BHYFG/ref=sr_1_4?dchild=1&keywords=water+storage&qid=1631822972&sr=8-4'
}, {
    id: 2,
    name: 'food',
    render: true,
    description: `Have 3 meals per person for up to 3 days`,
    amountPerPerson: 3,
    numDays: 3,
    consumables: `meals`,
    link: 'https://www.amazon.com/Mountain-House-Southwest-Backpacking-Gluten-Free/dp/B082WZHD1S/ref=sr_1_11?dchild=1&keywords=hiking+meals&qid=1631827543&sr=8-11'   
}, {
    id: 3,
    name: 'radio',
    render: true,
    description: 'Battery-Powered (or hand crank) Radio',
    link: 'https://www.amazon.com/FosPower-Emergency-Portable-Household-Flashlight/dp/B07FKYHTWP/ref=sr_1_3?dchild=1&keywords=emergency+hand+crank+radio&qid=1631827624&sr=8-3'     
}, {
    id: 4,
    name: 'flashlight',
    render: true,
    description: 'Flashlight',
    link: 'https://www.amazon.com/FosPower-Emergency-Portable-Household-Flashlight/dp/B07FKYHTWP/ref=sr_1_3?dchild=1&keywords=emergency+hand+crank+radio&qid=1631827624&sr=8-3'        
}, {
    id: 5,
    name: 'first-aid',
    render: true,
    description: 'First-Aid Kit',
    link: 'https://www.amazon.com/First-Aid-Only-Piece-All-Purpose/dp/B000069EYA/ref=sr_1_2?dchild=1&keywords=emergency+first+aid+kit&qid=1631827715&sr=8-2'        
}, {
    id: 6,
    name: 'shoes',
    render: true,
    description: 'Pair of Shoes',
    link: 'https://www.nike.com/'     
}, {
    id: 7,
    name: 'whistle',
    render: true,
    description: 'Whistle',
    link: 'https://www.amazon.com/Michael-Josh-Emergency-Survival-Lanyards/dp/B01NBC60ZA/ref=sr_1_9?dchild=1&keywords=whistle&qid=1631827871&sr=8-9'        
}, {
    id: 8,
    name: 'batteries',
    render: true,
    description: 'Extra Batteries',        
    link: 'https://www.amazon.com/Duracell-CopperTop-Batteries-All-Purpose-Household/dp/B08Q87MF19/ref=sr_1_8?dchild=1&keywords=batteries&qid=1631827900&sr=8-8'
}, {
    id: 9,
    name: 'dust-mask',
    render: true,
    description: `Have 1 dust mask per person`,
    amountPerPerson: 1,
    numDays: 1,
    consumables: 'dust-masks',
    link: 'https://www.amazon.com/BASE-CAMP-Active-Carbon-Filters/dp/B085B8Y9XH/ref=sr_1_7?dchild=1&keywords=dust+mask&qid=1631827930&sr=8-7'      
}, {
    id: 10,
    name: 'sheeting',
    render: true,
    description: 'Plastic Sheeting',
    link: 'https://www.amazon.com/Frost-King-P9400-Painters-Dispenser/dp/B007BMOXOO/ref=sr_1_5?dchild=1&keywords=plastic+sheeting&qid=1631827960&sr=8-5'        
}, {
    id: 11,
    name: 'duct-tape',
    render: true,
    description: 'Duct Tape',
    link: 'https://www.amazon.com/Weather-Duct-2230-HD-Inches-Yards/dp/B00605AP3G/ref=sr_1_4?dchild=1&keywords=duct+tape&qid=1631827995&sr=8-4'        
}, {
    id: 12,
    name: 'wipes',
    render: true,
    description: 'Moist Towelettes, Garbage Bags, Plastic Ties',
    link: 'https://www.amazon.com/s?k=wipes+garbage+bags+zip+ties&ref=nb_sb_noss'        
}, {
    id: 13,
    name: 'tools',
    render: true,
    description: 'Wrench and/or Pliers',
    link: 'https://www.amazon.com/s?k=wrench+pliers&ref=nb_sb_noss_2'        
}, {
    id: 14,
    name: 'can-opener',
    render: true,
    description: 'Manual Can Opener',
    link: 'https://www.amazon.com/Upgraded-Multifunction-Stainless-Handheld-Openers/dp/B0952WRP8K/ref=sr_1_12?dchild=1&keywords=can+opener&qid=1631828160&sr=8-12'        
}, {
    id: 15,
    name: 'map',
    render: true,
    description: 'Local Maps',
    link: 'https://www.amazon.com/McNally-United-States-Canada-Mexico/dp/0528023748/ref=sr_1_3?dchild=1&keywords=atlas+us&qid=1631828537&sr=8-3'    
}, {
    id: 16,
    name: 'cell-phone',
    render: true,
    description: 'Cell phone (with chargers and a backup battery)',
    link: 'https://www.amazon.com/s?k=cell+phone&ref=nb_sb_noss_2'    
}];

export const suggestedItems = [
    {
        id: 101,
        name: 'eyewear',
        render: false,
        description: 'Prescription eyeglasses and contact lens solution',
        link: 'https://www.warbyparker.com/'      
    },
    {
        id: 102,
        name: 'baby',
        render: false,
        description: 'Infant formula, bottles, diapers, wipes and diaper rash cream',
        link: 'https://www.buybuybaby.com/'       
    },
    {
        id: 103,
        name: 'generator',
        render: false,
        description: `In the event of a power outage have at least 25-30 gallons of gas on-hand for your generator. To store safely, be sure to invest in a fuel tank with a siphon and make sure to add a couple ounces of fuel stabilizer per 5-gallons prior to filling`,
        link: 'https://www.amazon.com/Champion-Power-Equipment-100900-Ultralight/dp/B08J9NZ9D7/ref=sr_1_4?dchild=1&keywords=generator&qid=1631828679&sr=8-4'        
    },
    {
        id: 104,
        name: 'mask',
        render: true,
        description: `Have 1 mask per person (for everyone ages 2 and above)`,
        amountPerPerson: 1,
        numDays: 1,
        consumables: 'masks',
        link: 'https://www.amazon.com/SUNCOO-Disposable-Particle-3-Layer-Earloops/dp/B0868YY9MW/ref=sxin_13?asc_contentid=amzn1.osa.100e44c8-3cf4-43ab-aae8-af550d5aae0c.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.100e44c8-3cf4-43ab-aae8-af550d5aae0c.ATVPDKIKX0DER.en_US&creativeASIN=B0868YY9MW&cv_ct_cx=mask&cv_ct_id=amzn1.osa.100e44c8-3cf4-43ab-aae8-af550d5aae0c.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=mask&linkCode=oas&pd_rd_i=B0868YY9MW&pd_rd_r=f41392b4-253d-4a9f-b3f1-01ae820ca730&pd_rd_w=Ab4Mc&pd_rd_wg=GASkO&pf_rd_p=b029c82c-aced-48fe-b955-08794dc4e3cd&pf_rd_r=HHMJEKSFPCFQE9QZJQ2S&qid=1631829741&sr=1-2-a3cc9a7a-2f07-46dc-8259-ac02200376a0&tag=toughjobs-20' 
       
    },
    {
        id: 105,
        name: 'disinfectants',
        render: true,
        description: 'Soap, hand sanitizer, disinfecting wipes to disinfect surfaces',
        link: 'https://www.amazon.com/Lysol-Disinfecting-Wipes-Blossom-4x80ct/dp/B00Q70RCW6/ref=sr_1_6?dchild=1&keywords=disinfecting+wipes&qid=1631829819&sr=8-6'        
    },
    {
        id: 106,
        name: 'medications',
        render: false,
        description: 'Prescription medications',
        link: 'https://www.amazon.com/AUVON-iMedassist-Compartments-Supplements-Medication/dp/B07794YMY7/ref=sr_1_8?dchild=1&keywords=pill+organizer&qid=1631829910&sr=8-8'        
    },
    {
        id: 107,
        name: 'otc-meds',
        render: true,
        description: 'Non-prescription medications such as pain relievers, anti-diarrhea medication, antacids or laxatives',
        link: 'https://www.amazon.com/s?k=pain+relievers&ref=nb_sb_noss_1'        
    },
    {
        id: 108,
        name: 'pet',
        render: false,
        description: '1 month supply of pet food, and 1 gallon of water on reserve (per pet)',
        link: 'https://www.amazon.com/IRIS-USA-Airtight-Storage-Container/dp/B08WHSVYV6/ref=sr_1_6?crid=1EQYR84RGVZ84&dchild=1&keywords=pet+food+storage+containers&qid=1631829993&sprefix=pet+food+sto%2Caps%2C222&sr=8-6'        
    },
    {
        id: 109,
        name: 'cash',
        render: true,
        description: `Cash or traveler's checks`,
        link: 'https://www.amazon.com/Shappy-Waterproof-Watertight-Document-Traveling/dp/B08RHP6M4W/ref=sr_1_8?dchild=1&keywords=watertight+document+bag&qid=1631830046&sr=8-8'        
    },
    {
        id: 110,
        name: 'documents',
        render: true,
        description: `Copies of all vital records (stored digitally, in a waterproof/portable container, or both). Vital records include: insurance policies, investment records, pay stubs, benefits records, tax returns, wills, trusts and powers of attorney`,
        link: 'https://www.amazon.com/Shappy-Waterproof-Watertight-Document-Traveling/dp/B08RHP6M4W/ref=sr_1_8?dchild=1&keywords=watertight+document+bag&qid=1631830046&sr=8-8'   
    },
    {
        id: 111,
        name: 'blankets',
        render: true,
        description: 'Sleeping bag or warm blanket',
        amountPerPerson: 1,
        numDays: 1,
        consumables: 'blankets',
        link: 'https://www.amazon.com/s?k=sleeping+bag&ref=nb_sb_noss_1'        
    },
    {
        id: 112,
        name: 'clothing',
        render: true,
        description: `Have 1 change of clothing per person appropriate for your climate`,
        amountPerPerson: 1,
        numDays: 1,
        consumables: 'sets',
        link: 'https://www.target.com/'       
    },
    {
        id: 113,
        name: 'extinguisher',
        render: true,
        description: 'Fire extinguisher',
        link: 'https://www.amazon.com/s?k=fire+extinguisher&ref=nb_sb_noss_2'        
    },
    {
        id: 114,
        name: 'matches',
        render: true,
        description: 'Matches in a waterproof container',
        link: 'https://www.amazon.com/UCO-Stormproof-Waterproof-Matches-Strikers/dp/B004PIBWW8/ref=sxin_14?asc_contentid=amzn1.osa.427edbb1-9289-4d14-8eeb-d0fbf2d14dc7.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.427edbb1-9289-4d14-8eeb-d0fbf2d14dc7.ATVPDKIKX0DER.en_US&creativeASIN=B004PIBWW8&cv_ct_cx=waterproof+matches&cv_ct_id=amzn1.osa.427edbb1-9289-4d14-8eeb-d0fbf2d14dc7.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=waterproof+matches&linkCode=oas&pd_rd_i=B004PIBWW8&pd_rd_r=29a3be9a-729f-450c-b637-b4c687268356&pd_rd_w=u7ELM&pd_rd_wg=pU2Iz&pf_rd_p=b029c82c-aced-48fe-b955-08794dc4e3cd&pf_rd_r=9KV165SXNGJ1Z4S6PPQD&qid=1631830169&sr=1-1-a3cc9a7a-2f07-46dc-8259-ac02200376a0&tag=the-angle-20'        
    },
    {
        id: 115,
        name: 'hygiene',
        render: true,
        description: 'Menstrual supplies and personal hygiene items',
        link: 'https://www.amazon.com/s?k=dobbs+kit'        
    },
    {
        id: 116,
        name: 'mess-kit',
        render: true,
        description: 'Mess kits, paper cups, plates, paper towels and plastic utensils',
        link: 'https://www.amazon.com/UCO-Piece-Mess-Kit-Blue/dp/B08B46JZ7T/ref=sr_1_5?dchild=1&keywords=mess+kit&qid=1631830227&sr=8-5'       
    },
    {
        id: 117,
        name: 'writing',
        render: true,
        description: 'Paper and pencil',
        link: 'https://www.amazon.com/UST-20-310-116-Waterproof-Paper-Notebook/dp/B00C6SHPJI/ref=sr_1_4?dchild=1&keywords=waterproof+paper+and+pencil&qid=1631830268&sr=8-4'        
    },
    {
        id: 118,
        name: 'games',
        render: true,
        description: 'Books, games, puzzles, or other activities',
        link: 'https://www.amazon.com/s?k=games&ref=nb_sb_noss_1'       
    },    
    {
        id: 119,
        name: 'assets',
        render: false,
        description: 'Because you have insured assets, review each of your insurance policies to ensure that your assets are properly protected specifically in the event of a natural disaster',
        link: 'https://www.insurancehotline.com/resources/taking-inventory-for-your-home-insurance/'       
    },    
    {
        id: 120,
        name: 'senior',
        render: false,
        description: `The U.S. Administration on Aging (AoA) recommends older adults and their families develop a family communication plan so that the whereabouts of each member is reported to a key person(s) during a disaster.`,
        link: 'https://www.cdc.gov/aging/pdf/disaster_planning_tips.pdf'       
    }    
    
];

