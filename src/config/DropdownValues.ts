export interface Values {
  label: string;
  value: string;
}

const Types: Values[] = [
  {label: 'Select...', value: ''},
  {label: 'Term', value: 'Term'},
  {label: 'Universal', value: 'Universal'},
  {label: 'Whole Life', value: 'Whole Life'},
  {label: 'I Don’t Know', value: 'I Don’t Know'},
];

const HealthStatus: Values[] = [
  {label: 'Select...', value: ''},
  // {label: 'Very Healthy', value: 'Very Healthy'},
  {label: 'Healthy', value: 'Healthy'},
  {label: 'Slightly Unhealthy', value: 'Slightly Unhealthy'},
  {label: 'Very Unhealthy', value: 'Very Unhealthy'},
  {label: 'Critically Unhealthy', value: 'Critically Unhealthy'},
];

const Gender: Values[] = [
  {label: 'Select...', value: ''},
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  // {label: 'Other', value: 'Other'},
  // {label: 'I Don’t Know', value: 'I Don’t Know'},
];
const Relationship: Values[] = [
  {label: 'Select...', value: ''},
  {label: 'I’m the Policyowner', value: 'I’m the Policyowner'},
  {label: 'A Family Member', value: 'A Family Member'},
  {label: 'A Life Agent', value: 'A Life Agent'},
  {label: 'An Advisor', value: 'An Advisor'},
  {label: 'Other', value: 'Other'},
];
const States: Values[] = [
  {label: 'Select...', value: ''},
  {label: 'Alabama', value: 'Alabama'},
  {label: 'Arizona', value: 'Arizona'},
  {label: 'Arkansas', value: 'Arkansas'},
  {label: 'California', value: 'California'},
  {label: 'Colorado', value: 'Colorado'},
  {label: 'Connecticut', value: 'Connecticut'},
  {label: 'Delaware', value: 'Delaware'},
  {label: 'Florida', value: 'Florida'},
  {label: 'Georgia', value: 'Georgia'},
  {label: 'Idaho', value: 'Idaho'},
  {label: 'Illinois', value: 'Illinois'},
  {label: 'Indiana', value: 'Indiana'},
  {label: 'Iowa', value: 'Iowa'},
  {label: 'Kansas', value: 'Kansas'},
  {label: 'Kentucky', value: 'Kentucky'},
  {label: 'Louisiana', value: 'Louisiana'},
  {label: 'Maine', value: 'Maine'},
  {label: 'Maryland', value: 'Maryland'},
  {label: 'Massachusetts', value: 'Massachusetts'},
  {label: 'Michigan', value: 'Michigan'},
  {label: 'Minnesota', value: 'Minnesota'},
  {label: 'Mississippi', value: 'Mississippi'},
  {label: 'Missouri', value: 'Missouri'},
  {label: 'Montana', value: 'Montana'},
  {label: 'Nebraska', value: 'Nebraska'},
  {label: 'Nevada', value: 'Nevada'},
  {label: 'New Hampshire', value: 'New Hampshire'},
  {label: 'New Jersey', value: 'New Jersey'},
  {label: 'New Mexico', value: 'New Mexico'},
  {label: 'New York', value: 'New York'},
  {label: 'North Carolina', value: 'North Carolina'},
  {label: 'North Dakota', value: 'North Dakota'},
  {label: 'Ohio', value: 'Ohio'},
  {label: 'Oklahoma', value: 'Oklahoma'},
  {label: 'Oregon', value: 'Oregon'},
  {label: 'Pennsylvania', value: 'Pennsylvania'},
  {label: 'Rhode Island', value: 'Rhode Island'},
  {label: 'South Carolina', value: 'South Carolina'},
  {label: 'South Dakota', value: 'South Dakota'},
  {label: 'Tennessee', value: 'Tennessee'},
  {label: 'Texas', value: 'Texas'},
  {label: 'Utah', value: 'Utah'},
  {label: 'Vermont', value: 'Vermont'},
  {label: 'Virginia', value: 'Virginia'},
  {label: 'Washington', value: 'Washington'},
  {label: 'West Virginia', value: 'West Virginia'},
  {label: 'Wisconsin', value: 'Wisconsin'},
  {label: 'Wyoming', value: 'Wyoming'},
];
const Carrier: Values[] = [
  {label: 'Select...', value: ''},
  {label: 'AAA Life Insurance Company', value: 'AAA Life Insurance Company'},
  {
    label: 'AXA Equitable Life Insurance Company',
    value: 'AXA Equitable Life Insurance Company',
  },
  {
    label: 'Accordia Life and Annuity Company',
    value: 'Accordia Life and Annuity Company',
  },
  {
    label: 'Alfa Life Insurance Corporation',
    value: 'Alfa Life Insurance Corporation',
  },
  {
    label: 'Allstate Life Insurance Company',
    value: 'Allstate Life Insurance Company',
  },
  {
    label: 'American General Life Insurance Company',
    value: 'American General Life Insurance Company',
  },
  {
    label: 'American National Insurance Company',
    value: 'American National Insurance Company',
  },
  {
    label: 'Ameritas Life Insurance Corp.',
    value: 'Ameritas Life Insurance Corp.',
  },
  {
    label: 'Ameritas Life Insurance Corp. of New York',
    value: 'Ameritas Life Insurance Corp. of New York',
  },
  {
    label: 'Amica Life Insurance Company',
    value: 'Amica Life Insurance Company',
  },
  {label: 'Athene Annuity', value: 'Athene Annuity'},
  {label: 'Life Assurance Company', value: 'Life Assurance Company'},
  {
    label: 'Athene Annuity and Life Company',
    value: 'Athene Annuity and Life Company',
  },
  {
    label: 'Athene Life Insurance Company of New York',
    value: 'Athene Life Insurance Company of New York',
  },
  {
    label: 'Banner Life Insurance Company',
    value: 'Banner Life Insurance Company',
  },
  {
    label: 'Beneficial Life Insurance Company',
    value: 'Beneficial Life Insurance Company',
  },
  {
    label: 'Berkshire Life Insurance Company of America',
    value: 'Berkshire Life Insurance Company of America',
  },
  {
    label: 'Brighthouse Life Insurance Company',
    value: 'Brighthouse Life Insurance Company',
  },
  {label: 'C.M. Life Insurance Company', value: 'C.M. Life Insurance Company'},
  {
    label: 'Columbus Life Insurance Company',
    value: 'Columbus Life Insurance Company',
  },
  {
    label: 'Connecticut General Life Insurance Company',
    value: 'Connecticut General Life Insurance Company',
  },
  {
    label: 'Delaware Life Insurance Company',
    value: 'Delaware Life Insurance Company',
  },
  {
    label: 'Delaware Life Insurance Company of New York',
    value: 'Delaware Life Insurance Company of New York',
  },
  {
    label: 'Farmers New World Life Insurance Company',
    value: 'Farmers New World Life Insurance Company',
  },
  {
    label: 'Fidelity and Guaranty Life Insurance Company',
    value: 'Fidelity and Guaranty Life Insurance Company',
  },
  {label: 'Fidelity Life Association', value: 'Fidelity Life Association'},
  {
    label: 'First Allmerica Financial Life Insurance Company',
    value: 'First Allmerica Financial Life Insurance Company',
  },
  {
    label: 'First Penn-Pacific Life Insurance Company',
    value: 'First Penn-Pacific Life Insurance Company',
  },
  {
    label: "Forester's Financial 63665 General American Life Insurance Company",
    value: "Forester's Financial 63665 General American Life Insurance Company",
  },
  {
    label: 'Genworth Life Insurance Company',
    value: 'Genworth Life Insurance Company',
  },
  {
    label: 'Genworth Life Insurance Company of New York',
    value: 'Genworth Life Insurance Company of New York',
  },
  {
    label: 'Genworth Life and Annuity Insurance Company',
    value: 'Genworth Life and Annuity Insurance Company',
  },
  {
    label: 'Great American Life Insurance Company',
    value: 'Great American Life Insurance Company',
  },
  {
    label: 'Great Southern Life Insurance Company',
    value: 'Great Southern Life Insurance Company',
  },
  {
    label: 'Great-West Life and Annuity Insurance Company',
    value: 'Great-West Life and Annuity Insurance Company',
  },
  {label: 'Guardian Life Insurance', value: 'Guardian Life Insurance'},
  {
    label: 'Hartford Life Insurance Company',
    value: 'Hartford Life Insurance Company',
  },
  {
    label: 'Hartford Life and Annuity Insurance Company',
    value: 'Hartford Life and Annuity Insurance Company',
  },
  {
    label: 'HumanaDental Insurance Company',
    value: 'HumanaDental Insurance Company',
  },
  {
    label: 'Jackson National Life Insurance Company',
    value: 'Jackson National Life Insurance Company',
  },
  {
    label: 'John Hancock Life Insurance Company (U.S.A.)',
    value: 'John Hancock Life Insurance Company (U.S.A.)',
  },
  {
    label: 'John Hancock Life Insurance Company of New York',
    value: 'John Hancock Life Insurance Company of New York',
  },
  {label: 'Knights of Columbus', value: 'Knights of Columbus'},
  {
    label: 'Liberty Life Assurance Company of Boston',
    value: 'Liberty Life Assurance Company of Boston',
  },
  {
    label: 'Life Insurance Company of North America',
    value: 'Life Insurance Company of North America',
  },
  {
    label: 'Lincoln Benefit Life Company',
    value: 'Lincoln Benefit Life Company',
  },
  {
    label: 'Lincoln Life and Annuity Company of New York',
    value: 'Lincoln Life and Annuity Company of New York',
  },
  {
    label: 'MONY Life Insurance Company of America',
    value: 'MONY Life Insurance Company of America',
  },
  {
    label: 'Manhattan National Life Insurance Company',
    value: 'Manhattan National Life Insurance Company',
  },
  {
    label: 'Massachusetts Mutual Life Insurance Company',
    value: 'Massachusetts Mutual Life Insurance Company',
  },
  {
    label: 'Metropolitan Life Insurance Company',
    value: 'Metropolitan Life Insurance Company',
  },
  {
    label: 'Midland National Life Insurance Company',
    value: 'Midland National Life Insurance Company',
  },
  {
    label: 'Minnesota Life Insurance Company',
    value: 'Minnesota Life Insurance Company',
  },
  {label: 'Modern Woodmen of America', value: 'Modern Woodmen of America'},
  {label: 'Mutual of Omaha', value: 'Mutual of Omaha'},
  {
    label: 'National Life Insurance Company',
    value: 'National Life Insurance Company',
  },
  {
    label: 'Nationwide Life Insurance Company',
    value: 'Nationwide Life Insurance Company',
  },
  {
    label: 'New York Life Insurance Company',
    value: 'New York Life Insurance Company',
  },
  {
    label: 'New York Life Insurance and Annuity Corporation',
    value: 'New York Life Insurance and Annuity Corporation',
  },
  {
    label: 'North American Company for Life and Health Insurance',
    value: 'North American Company for Life and Health Insurance',
  },
  {
    label: 'Ohio National Life Assurance Corporation',
    value: 'Ohio National Life Assurance Corporation',
  },
  {
    label: 'Old Republic Life Insurance Company',
    value: 'Old Republic Life Insurance Company',
  },
  {
    label: 'PHL Variable Insurance Company',
    value: 'PHL Variable Insurance Company',
  },
  {
    label: 'Pacific Life Insurance Company',
    value: 'Pacific Life Insurance Company',
  },
  {
    label: 'Pavonia Life Insurance Company of Michigan',
    value: 'Pavonia Life Insurance Company of Michigan',
  },
  {
    label: 'Phoenix Life Insurance Company',
    value: 'Phoenix Life Insurance Company',
  },
  {
    label: 'Primerica Life Insurance Company',
    value: 'Primerica Life Insurance Company',
  },
  {
    label: 'Principal Life Insurance Company',
    value: 'Principal Life Insurance Company',
  },
  {
    label: 'Protective Life Insurance Company',
    value: 'Protective Life Insurance Company',
  },
  {
    label: 'Pruco Life Insurance Company',
    value: 'Pruco Life Insurance Company',
  },
  {
    label: 'Prudential Annuities Life Assurance Corporation',
    value: 'Prudential Annuities Life Assurance Corporation',
  },
  {
    label: 'ReliaStar Life Insurance Company',
    value: 'ReliaStar Life Insurance Company',
  },
  {
    label: 'ReliaStar Life Insurance Company of New York',
    value: 'ReliaStar Life Insurance Company of New York',
  },
  {
    label: 'RiverSource Life Insurance Company',
    value: 'RiverSource Life Insurance Company',
  },
  {
    label: 'SBLI USA Life Insurance Company',
    value: 'SBLI USA Life Insurance Company',
  },
  {
    label: 'Security Life of Denver Insurance Company',
    value: 'Security Life of Denver Insurance Company',
  },
  {
    label: 'Security Mutual Life Insurance Company of New York',
    value: 'Security Mutual Life Insurance Company of New York',
  },
  {label: 'Standard Insurance Company', value: 'Standard Insurance Company'},
  {
    label: 'State Farm Life Insurance Company',
    value: 'State Farm Life Insurance Company',
  },
  {
    label: 'Sun Life Assurance Company of Canada (United States Branch)',
    value: 'Sun Life Assurance Company of Canada (United States Branch)',
  },
  {
    label: 'Symetra Life Insurance Company',
    value: 'Symetra Life Insurance Company',
  },
  {
    label: 'The Cincinnati Life Insurance Company',
    value: 'The Cincinnati Life Insurance Company',
  },
  {
    label: 'The Lincoln National Life Insurance Company',
    value: 'The Lincoln National Life Insurance Company',
  },
  {
    label: 'The Northwestern Mutual Life Insurance Company',
    value: 'The Northwestern Mutual Life Insurance Company',
  },
  {
    label: 'The Penn Mutual Life Insurance Company',
    value: 'The Penn Mutual Life Insurance Company',
  },
  {
    label: 'The Prudential Insurance Company of America',
    value: 'The Prudential Insurance Company of America',
  },
  {
    label: 'Transamerica Financial Life Insurance Company',
    value: 'Transamerica Financial Life Insurance Company',
  },
  {
    label: 'Transamerica Life Insurance Company',
    value: 'Transamerica Life Insurance Company',
  },
  {label: 'USAA Life Insurance Company', value: 'USAA Life Insurance Company'},
  {
    label: 'United States Life Insurance Company in the City of New York',
    value: 'United States Life Insurance Company in the City of New York',
  },
  {
    label:
      'United of Omaha Life Insurance Company 86509 Voya Retirement Insurance and Annuity',
    value:
      'United of Omaha Life Insurance Company 86509 Voya Retirement Insurance and Annuity',
  },
  {label: 'Company', value: 'Company'},
  {
    label: 'West Coast Life Insurance Company',
    value: 'West Coast Life Insurance Company',
  },
  {
    label: 'Wilcac Life Insurance Company',
    value: 'Wilcac Life Insurance Company',
  },
  {
    label: 'Wilco Life Insurance Company',
    value: 'Wilco Life Insurance Company',
  },
  {
    label: 'William Penn Life Insurance Company of New York',
    value: 'William Penn Life Insurance Company of New York',
  },
  {
    label: 'Wilton Reassurance Life Company of New York',
    value: 'Wilton Reassurance Life Company of New York',
  },
  {
    label: 'Zurich American Life Insurance Company',
    value: 'Zurich American Life Insurance Company',
  },
  {label: 'I Don’t Know (Other)', value: 'I Don’t Know (Other)'},
];
export {States, Types, HealthStatus, Gender, Relationship, Carrier};
