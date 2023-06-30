let collateral_details = [
  {
    collateral_type: 'Deposit Account',
    collateral_sub_type: 'Certificate of Deposit',
    held_by: 'new',
    amount_value: '6000',
    balance_on_date: '06-01-2023',
    account_number: '654454345',
    remarks: 'jhjh',
  },
  {
    collateral_type: 'Deposit Account',
    collateral_sub_type: 'Certificate of Deposit',
    held_by: 'new',
    amount_value: '6000',
    balance_on_date: '06-01-2023',
    account_number: '654454345',
    remarks: 'jhjh',
  },

  {
    collateral_type: 'Commercial Real Estate',
    collateral_sub_type:
      'Leasehold Security Interest in Building Constructed on Lease Land',
    use_of_property: 'Owned',
    age_of_property: '5',
    area_of_property: '3000',
    date_of_purchase: '06-19-2023',
    lien_position_offered: 'Third Position',
    amount_value: '34343',
    outstanding_debt_on_property: '53423',
    description: 'cmxcnvb hbdh vdhh',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CA',
    zip_code: '95014',
    property_ownership: [
      {
        owner_name: 'commercial owner',
        ownership: '50',
        collateral_owner_type: 'Owner',
      },
      {
        owner_name: 'comm own',
        ownership: '50',
        collateral_owner_type: 'Tenant',
      },
    ],
    used_for_other_loan: 'Y',
  },
  {
    collateral_type: 'Equipment',
    collateral_sub_type: 'Agricultural (other)',
    condition: 'Demo(Display)',
    year_of_manufacture: '2020',
    model_number: '32432nb4b3',
    series_number: 'df321312',
    purchase_source: 'Auction',
    amount_value: '232214',
    description: 'jbej bjhj jhgf',
  },
  {
    collateral_type: 'Letter of Credit',
    issuer_name: 'issue1',
    amount_value: '76767',
    contract_number: '767755665',
    contract_date: '06-11-2023',
    description: 'hgjh hgh hg',
  },
  {
    collateral_type: 'Life Insurance',
    insurance_company_name: 'LIC',
    named_insured: 'BVHJJ',
    amount_value: '6576',
    policy_number: '5354543453',
    policy_expiration_date: '06-21-2023',
  },
  {
    collateral_type: 'Other Assets',
    collateral_sub_type: 'Electrical Equipment',
    condition: 'Demo(Display)',
    year_of_manufacture: '2020',
    model_number: '65655',
    series_number: '233434',
    purchase_source: 'Private Sale',
    amount_value: '4345',
    description: 'VCBDF',
  },
  {
    collateral_type: 'Securities',
    collateral_sub_type: 'Bond',
    held_by: 'ABC USER',
    amount_value: '650000',
    account_number: '23324324342353',
    description: 'GGU JHUD KLCIO',
  },
  {
    collateral_type: 'Residential Real Estate',
    collateral_sub_type: 'Lien on Land and Improvements',
    use_of_property: 'Owned',
    age_of_property: '23',
    area_of_property: '3323',
    date_of_purchase: '06-13-2023',
    lien_position_offered: 'Third Position',
    amount_value: '3434',
    outstanding_debt_on_property: '4434',
    description: 'KJHJ HG GV HHJ',
    address: '123 William Street',
    city: 'New York',
    state: 'NY',
    zip_code: '10038',
    property_ownership: [
      {
        owner_name: 'GGUU',
        ownership: '100',
        collateral_owner_type: 'Owner',
      },
      {
        owner_name: 'GGUU',
        ownership: '100',
        collateral_owner_type: 'Owner',
      },
    ],
    used_for_other_loan: 'Y',
  },
  {
    collateral_type: 'Vehicle',
    collateral_sub_type: 'Rigid Truck',
    condition: 'New',
    year: '2022',
    make: 'fff',
    model: '3434',
    variant: '4334',
    series: '432343',
    odometer_reading: '34324',
    purchase_source: 'Other Dealer',
    amount_value: '3432',
    description: '3dgfdv',
  },
];
/**desired JSON */
// let total_collaterals = [
//   {
//     collaterals: [
//       {
//         sub_type: 'Lien on Land and Improvements',
//         use_of_property: 'Owned',
//         age_of_property: '23',
//         area_of_property: '3323',
//         date_of_purchase: '06-13-2023',
//         lien_position_offered: 'Third Position',
//         amount_value: '3434',
//         outstanding_debt_on_property: '4434',
//         description: 'KJHJ HG GV HHJ',
//         property_address: {
//           address: '123 William Street',
//           city: 'New York',
//           state: 'NY',
//           zip_code: '10038',
//         },
//         property_ownership: [
//           {
//             owner_name: 'ravi',
//             ownership: '100',
//             collateral_owner_type: '5f0834abfa01d26d9d72b051',
//           },
//         ],
//         used_for_other_loan: 'Y',
//       },
//     ],

//     collateral_key: 'Residential Real Estate',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Certificate of Deposit',
//         held_by: 'new',
//         amount_value: '6000',
//         balance_on_date: '06-01-2023',
//         account_number: '654454345',
//         remarks: 'jhjh',
//       },
//     ],
//     collateral_key: 'Deposit Account',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Agricultural (other)',
//         condition: 'Demo(Display)',
//         condition: 'Demo(Display)',
//         year_of_manufacture: '2020',
//         model_number: '32432nb4b3',
//         series_number: 'df321312',
//         purchase_source: 'Auction',
//         amount_value: '232214',
//         description: 'jbej bjhj jhgf',
//       },
//     ],
//     collateral_key: 'Equipment',
//   },
//   {
//     collaterals: [
//       {
//         issuer_name: 'issue1',
//         amount_value: '76767',
//         contract_number: '767755665',
//         contract_date: '06-11-2023',
//         description: 'hgjh hgh hg',
//       },
//     ],

//     collateral_key: 'Letter of Credit',
//   },
//   {
//     collaterals: [
//       {
//         insurance_company_name: 'LIC',
//         named_insured: 'BVHJJ',
//         amount_value: '6576',
//         policy_number: '5354543453',
//         policy_expiration_date: '06-21-2023',
//       },
//     ],
//     collateral_key: 'Life Insurance',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Electrical Equipment',
//         condition: 'Demo(Display)',
//         year_of_manufacture: '2020',
//         model_number: '65655',
//         series_number: '233434',
//         purchase_source: 'Private Sale',
//         amount_value: '4345',
//         description: 'VCBDF',
//       },
//     ],

//     collateral_key: 'Other Assets',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Lien on Land and Improvements',
//         use_of_property: 'Owned',
//         age_of_property: '23',
//         area_of_property: '3323',
//         date_of_purchase: '06-13-2023',
//         lien_position_offered: 'Third Position',
//         amount_value: '3434',
//         outstanding_debt_on_property: '4434',
//         description: 'KJHJ HG GV HHJ',
//         property_address: {
//           address: '123 William Street',
//           city: 'New York',
//           state: 'NY',
//           zip_code: '10038',
//         },
//         property_ownership: [
//           {
//             owner_name: 'GGUU',
//             ownership: '100',
//             collateral_owner_type: 'Owner',
//           },
//         ],
//         used_for_other_loan: 'Y',
//       },
//     ],
//     collateral_key: 'Residential Real Estate',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Bond',

//         held_by: 'ABC USER',
//         amount_value: '650000',
//         account_number: '23324324342353',
//         description: 'GGU JHUD KLCIO',
//       },
//     ],

//     collateral_key: 'Securities',
//   },
//   {
//     collaterals: [
//       {
//         sub_type: 'Rigid Truck',

//         condition: 'New',
//         year: '2022',
//         make: 'fff',
//         model: '3434',
//         variant: '4334',
//         series: '432343',
//         odometer_reading: '34324',
//         purchase_source: 'Other Dealer',
//         amount_value: '3432',
//         description: '3dgfdv',
//       },
//     ],

//     collateral_key: 'Vehicle',
//   },
// ];
/** 
let desiredDetails = collateral_details.map((e, i) =>
  formatToDesiredDetails(e)
);
console.log('desiredDetails', desiredDetails);
function formatToDesiredDetails(e) {
  let res = {
    collaterals: [
      {
        sub_type: '',
        use_of_property: '',
        age_of_property: '',
        area_of_property: '',
        date_of_purchase: '',
        lien_position_offered: '',
        amount_value: '',
        outstanding_debt_on_property: '',
        description: '',
        property_address: {
          address: '',
          city: '',
          state: '',
          zip_code: '',
        },
        property_ownership: [
          {
            owner_name: '',
            ownership: '',
            collateral_owner_type: '',
          },
        ],
        used_for_other_loan: '',
      },
    ],
    collateral_key: '',
  };
  let res2 = {
    collaterals: [
      {
        sub_type: '',
        condition: '',
        year: '',
        make: '',
        model: '',
        variant: '',
        series: '',
        odometer_reading: '',
        purchase_source: '',
        amount_value: '',
        description: '',
      },
    ],
    collateral_key: '',
  };
  if (!e) return res;
  for (let key in e) {
    if (key == 'collateral_type') res.collateral_key = e[key];
    if (key == 'collateral_sub_type') res.collaterals[0].sub_type = e[key];
    if (key == 'use_of_property') res.collaterals[0].use_of_property = e[key];
    if (key == 'age_of_property') res.collaterals[0].age_of_property = e[key];
    if (key == 'lien_position_offered')
      res.collaterals[0].lien_position_offered = e[key];
    if (key == 'amount_value') res.collaterals[0].amount_value = e[key];
    if (key == 'outstanding_debt_on_property')
      res.collaterals[0].outstanding_debt_on_property = e[key];
    if (key == 'description') res.collaterals[0].description = e[key];
    if (key == 'address') res.collaterals[0].property_address.address = e[key];
    if (key == 'city') res.collaterals[0].property_address.city = e[key];
    if (key == 'state') res.collaterals[0].property_address.state = e[key];
    if (key == 'zip_code')
      res.collaterals[0].property_address.zip_code = e[key];
    if (key == 'property_ownership')
      res.collaterals[0].property_ownership[0] = e[key];
    if (key == 'used_for_other_loan')
      res.collaterals[0].used_for_other_loan = e[key];
    if (key == 'collateral_type') res2.collateral_key = e[key];
    if (key == 'collateral_sub_type') res2.collaterals[0].sub_type = e[key];
    if (key == 'condition') res2.collaterals[0].condition = e[key];
    if (key == 'year') res2.collaterals[0].year = e[key];
    if (key == 'make') res2.collaterals[0].make = e[key];
    if (key == 'model') res2.collaterals[0].model = e[key];
    if (key == 'variant') res2.collaterals[0].variant = e[key];
    if (key == 'series') res2.collaterals[0].series = e[key];
    if (key == 'odometer_reading')
      res2.collaterals[0].odometer_reading = e[key];

    if (key == 'purchase_source') res2.collaterals[0].purchase_source = e[key];
    if (key == 'amount_value') res2.collaterals[0].amount_value = e[key];
    if (key == 'description') res2.collaterals[0].description = e[key];
  }
  console.log('res', res);
  return res;
}
let desiredOutput = {

  collaters: [],

};
**/
if (collateral_details.length > 0) {
  const total_collaterals = Object.values(collateral_details).reduce(
    (acc, value) => {
      console.log('acc', acc);
      let propertyAdd = {};
      if (
        value['collateral_type'] == 'Residential Real Estate' ||
        value['collateral_type'] == 'Commercial Real Estate'
      ) {
        propertyAdd['address'] = value['address'];
        propertyAdd['state'] = value['state'];
        propertyAdd['city'] = value['city'];
        propertyAdd['zip_code'] = value['zip_code'];
        value['property_address'] = propertyAdd;
      }
      value['sub_type'] = value['collateral_sub_type']
        ? value['collateral_sub_type']
        : value['collateral_type'];

      const index = acc.findIndex(
        (obj) => obj.collateral_key === value['collateral_type']
      );
      if (index === -1) {
        acc.push({
          collateral_key: value['collateral_type'],
          collaterals: [value],
        });
      } else {
        acc[index].collaterals.push(value);
      }
      return acc;
    },
    []
  );

  console.log(total_collaterals);
}
let amit = [
  {
    collateral_type: 'Deposit Account',
    collateral_sub_type: 'Certificate of Deposit',
    held_by: 'new',
    amount_value: '60024A0',
    balance_on_date: '06-01-2023',
    account_number: '654454345',
    remarks: 'jhjh',
  },
  {
    collateral_type: 'Deposit Account',
    collateral_sub_type: 'Certificate of Deposit',
    held_by: 'new',
    amount_value: '60024A0',
    balance_on_date: '06-01-2023',
    account_number: '654454345',
    remarks: 'jhjh',
  },
  {
    collateral_type: 'Vehicle',
    collateral_sub_type: 'Rigid Truck',
    condition: 'New',
    year: '2022',
    make: 'fff',
    model: '3434',
    variant: '4334',
    series: '432343',
    odometer_reading: '34324',
    purchase_source: 'Other Dealer',
    amount_value: '3432',
    description: '3dgfdv',
  },
  {
    collateral_key: 'Commercial Real Estate',
    collateral_sub_type:
      'Leasehold Security Interest in Building Constructed on Lease Land',
    use_of_property: 'Owned',
    age_of_property: '5',
    area_of_property: '3000',
    date_of_purchase: '06-19-2023',
    lien_position_offered: 'Third Position',
    amount_value: '34343',
    outstanding_debt_on_property: '53423',
    description: 'cmxcnvb hbdh vdhh',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CA',
    zip_code: '95014',
    property_ownership: [
      {
        owner_name: 'commercial ow3ner',
        ownership: '50',
        collateral_owner_type: 'Ow3ner',
      },
      {
        owner_name: 'comm own3',
        ownership: '50',
        collateral_owner_type: 'Tenant',
      },
    ],
    used_for_other_loan: 'Y',
  },
  {
    collateral_type: 'Equipment',
    collateral_sub_type: 'Agricultural (other)',
    condition: 'Demo(Display)',
    year_of_manufacture: '2020',
    model_number: '32432nb4b3',
    series_number: 'df321312',
    purchase_source: 'Auction',
    amount_value: '232214',
    description: 'jbej bjhj jhgf',
  },
  {
    collateral_type: 'Letter of Credit',
    issuer_name: 'issue1',
    amount_value: '76767',
    contract_number: '767755665',
    contract_date: '06-11-2023',
    description: 'hgjh hgh hg',
  },
  {
    collateral_type: 'Life Insurance',
    insurance_company_name: 'LIC',
    named_insured: 'BVHJJ',
    amount_value: '6576',
    policy_number: '5354543453',
    policy_expiration_date: '06-21-2023',
  },
  {
    collateral_type: 'Other Assets',
    collateral_sub_type: 'Electrical Equipment',
    condition: 'Demo(Display)',
    year_of_manufacture: '2020',
    model_number: '65655',
    series_number: '233434',
    purchase_source: 'Private Sale',
    amount_value: '4345',
    description: 'VCBDF',
  },
  {
    collateral_type: 'Residential Real Estate',
    collateral_sub_type: 'Lien on Land and Improvements',
    use_of_property: 'Owned',
    age_of_property: '23',
    area_of_property: '3323',
    date_of_purchase: '06-13-2023',
    lien_position_offered: 'Third Position',
    amount_value: '3434',
    outstanding_debt_on_property: '4434',
    description: 'KJHJHGGVHHJ',
    address: '123 William Street',
    city: 'New York',
    state: 'NY',
    zip_code: '10038',
    property_ownership: [
      {
        owner_name: 'GGUU',
        ownership: '100',
        collateral_owner_type: 'Owner',
      },
    ],
    used_for_other_loan: 'Y',
  },
  {
    collateral_type: 'Securities',
    collateral_sub_type: 'Bond',
    held_by: 'ABC USER',
    amount_value: '650000',
    account_number: '23324324342353',
    description: 'GGUJHUDKLCIO',
  },
];
console.log(amit.length);
