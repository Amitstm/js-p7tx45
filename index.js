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
    ],
    used_for_other_loan: 'Y',
  },
];
let total_collaterals = [
  {
    collaterals: [
      {
        sub_type: 'Lien on Land and Improvements',
        use_of_property: 'Owned',
        age_of_property: '23',
        area_of_property: '3323',
        date_of_purchase: '06-13-2023',
        lien_position_offered: 'Third Position',
        amount_value: '3434',
        outstanding_debt_on_property: '4434',
        description: 'KJHJ HG GV HHJ',
        property_address: {
          address: '123 William Street',
          city: 'New York',
          state: 'NY',
          zip_code: '10038',
        },
        property_ownership: [
          {
            owner_name: 'ravi',
            ownership: '100',
            collateral_owner_type: '5f0834abfa01d26d9d72b051',
          },
        ],
        used_for_other_loan: 'Y',
      },
    ],

    collateral_key: 'Residential Real Estate',
  },
  {
    collaterals: [
      {
        sub_type: 'Certificate of Deposit',
        held_by: 'new',
        amount_value: '6000',
        balance_on_date: '06-01-2023',
        account_number: '654454345',
        remarks: 'jhjh',
      },
    ],
    collateral_key: 'Deposit Account',
  },
  {
    collaterals: [
      {
        sub_type: 'Agricultural (other)',
        condition: 'Demo(Display)',
        condition: 'Demo(Display)',
        year_of_manufacture: '2020',
        model_number: '32432nb4b3',
        series_number: 'df321312',
        purchase_source: 'Auction',
        amount_value: '232214',
        description: 'jbej bjhj jhgf',
      },
    ],
    collateral_key: 'Equipment',
  },

  {
    collaterals: [
      {
        issuer_name: 'issue1',
        amount_value: '76767',
        contract_number: '767755665',
        contract_date: '06-11-2023',
        description: 'hgjh hgh hg',
      },
    ],

    collateral_key: 'Letter of Credit',
  },
  {
    collaterals: [
      {
        insurance_company_name: 'LIC',
        named_insured: 'BVHJJ',
        amount_value: '6576',
        policy_number: '5354543453',
        policy_expiration_date: '06-21-2023',
      },
    ],
    collateral_key: 'Life Insurance',
  },
  {
    collaterals: [
      {
        sub_type: 'Electrical Equipment',
        condition: 'Demo(Display)',
        year_of_manufacture: '2020',
        model_number: '65655',
        series_number: '233434',
        purchase_source: 'Private Sale',
        amount_value: '4345',
        description: 'VCBDF',
      },
    ],

    collateral_key: 'Other Assets',
  },

  {
    collaterals: [
      {
        sub_type: 'Lien on Land and Improvements',
        use_of_property: 'Owned',
        age_of_property: '23',
        area_of_property: '3323',
        date_of_purchase: '06-13-2023',
        lien_position_offered: 'Third Position',
        amount_value: '3434',
        outstanding_debt_on_property: '4434',
        description: 'KJHJ HG GV HHJ',
        property_address: {
          address: '123 William Street',
          city: 'New York',
          state: 'NY',
          zip_code: '10038',
        },
        property_ownership: [
          {
            owner_name: 'GGUU',
            ownership: '100',
            collateral_owner_type: 'Owner',
          },
        ],
        used_for_other_loan: 'Y',
      },
    ],
    collateral_key: 'Residential Real Estate',
  },

  {
    collaterals: [
      {
        sub_type: 'Bond',

        held_by: 'ABC USER',
        amount_value: '650000',
        account_number: '23324324342353',
        description: 'GGU JHUD KLCIO',
      },
    ],

    collateral_key: 'Securities',
  },

  {
    collaterals: [
      {
        sub_type: 'Rigid Truck',

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
    ],

    collateral_key: 'Vehicle',
  },
];

collateral_details.forEach((item) => {
  const collateral = collateral_details.find(
    (i) =>
      i?.collateral_type?.toLowerCase() ===
        item?.collateral_type?.toLowerCase() &&
      i?.collateral_sub_type?.toLowerCase() ===
        item?.collateral_sub_type?.toLowerCase()
  );
  const collateralAddress = collateral_details.find((i) => {});
  let list_data = {};
  console.log('collateral', collateral);
  if (collateral) {
    const obj = {
      sub_type: item.collateral_sub_type
        ? item.collateral_sub_type
        : item.collateral_type,
    };
    Object.assign(list_data, obj);
  }
  console.log(list_data);
});
