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
  {
    collateral_type: 'Securities',
    collateral_sub_type: 'Bond',
    held_by: 'ABC USER',
    amount_value: '650000',
    account_number: '23324324342353',
    description: 'GGU JHUD KLCIO',
  },
];

let total_collaterals = [
  {
    collaterals: [
      {
        sub_type: '611114394b99693624115029',

        use_of_property: '5e8723158f2f4e3ac475fac5',

        age_of_property: '20',

        area_of_property: '900',

        date_of_purchase: '2023-03-14',

        lien_position_offered: '60a49d7e7071fc42fc3d0e92',

        amount_value: '2000',

        outstanding_debt_on_property: '234',

        description: 'testing',

        property_address: {
          address: '1200 Cleveland Street',

          city: 'Fayetteville',

          state: 'AR',

          zip_code: '72701',
        },

        property_ownership: [
          {
            owner_name: 'ravi',

            ownership: '100',

            collateral_owner_type: '5f0834abfa01d26d9d72b051',
          },
        ],

        used_for_other_loan: '5e8723158f2f4e3ac475fab6',
      },
    ],

    collateral_key: '60a3ef8e1d9c9e04f03f1dc1',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b99693624115030',

        held_by: 'ravi',

        amount_value: '75655',

        balance_on_date: '2023-04-11',

        account_number: '9876544567',

        remarks: 'remarks',
      },
    ],

    collateral_key: '60a3ef8e1d9c9e04f03f1dc0',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b99693654115039',

        condition: '5e8723158f2f4e3ac475fab0',

        year_of_manufacture: '2012',

        model_number: '534sd',

        series_number: '6543efv',

        purchase_source: '5e8723158f2f4e3ac475faca',

        amount_value: '765456',

        description: 'description',
      },
    ],

    collateral_key: '60ab7566c5f0297d98b754c7',
  },

  {
    collaterals: [
      {
        issuer_name: 'ravi',

        amount_value: '1000',

        contract_number: '8754rfvd',

        contract_date: '1994-11-20',

        description: 'desc',
      },
    ],

    collateral_key: '60ab7566c5f0297d98b754d1',
  },

  {
    collaterals: [
      {
        insurance_company_name: 'xyz',

        named_insured: 'ravi',

        amount_value: '76567',

        policy_number: '765456d',

        policy_expiration_date: '2023-05-01',
      },
    ],

    collateral_key: '60ab7566c5f0297d98b754c5',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b9969365411604a',

        condition: '5e8723158f2f4e3ac475fac9',

        year_of_manufacture: '2012',

        model_number: '76543wedfv',

        series_number: '45yujhgfdvb',

        purchase_source: '5e8723158f2f4e3ac475faca',

        amount_value: '45677654',

        description: 'desc',
      },
    ],

    collateral_key: '611114394b99693654116043',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b9969362411502b',

        use_of_property: '5e8723158f2f4e3ac475fac3',

        age_of_property: '201',

        area_of_property: '543',

        date_of_purchase: '2023-04-24',

        lien_position_offered: '60a49d7e7071fc42fc3d0e92',

        amount_value: '3456',

        outstanding_debt_on_property: '7654',

        description: 'desc',

        property_address: {
          address: '12340 Boggy Creek Road',

          city: 'Orlando',

          state: 'FL',

          zip_code: '32824',
        },

        property_ownership: [
          {
            owner_name: 'ravi',

            ownership: '100',

            collateral_owner_type: '5f0834abfa01d26d9d72b051',
          },
        ],

        used_for_other_loan: '5e8723158f2f4e3ac475fab6',
      },
    ],

    collateral_key: '60a3ef8e1d9c9e04f03f1dbf',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b99697624115033',

        held_by: '67r',

        amount_value: '45676',

        account_number: '7654erg',

        description: 'desc',
      },
    ],

    collateral_key: '62f2462350d58a568b224558',
  },

  {
    collaterals: [
      {
        sub_type: '611114394b99693654115035',

        condition: '5e8723158f2f4e3ac475fac9',

        year: '2012',

        make: 'ravi',

        model: 'sdkfhk',

        varaint: 'ksldhf',

        series: 'dskfh',

        odometer_reading: '453543',

        purchase_source: '5e8723158f2f4e3ac475faca',

        amount_value: '7654',

        description: 'de',
      },
    ],

    collateral_key: '60ab7566c5f0297d98b754c6',
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
  console.log('collateral', collateral);
});
