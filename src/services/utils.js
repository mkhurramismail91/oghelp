import axios from 'axios'

export const getAllZones = async (email) => {
  var token = localStorage.getItem('user-token')
  var user = await axios.get(process.env.REACT_APP_API_URL+"/utils/get-all-zones", {headers : {"user-token": token}})
      .then(async res => {
          if(res.status === 200){
              var aZones = []
              for(var i = 0; i < res.data.zones.length; i++){
                if(res.data.zones[i].zone_name.includes("America")){
                  var z = res.data.zones[i]
                  await res.data.zones.splice(i, 1)
                  aZones.push(z)
                  i--;
                }  
              }
              res.data.zones = aZones.concat(res.data.zones)
              return res.data;
              
          }else{
              return null;
          }
      })
      .catch(err => {
          console.log(err)
          return null;
      })

  return user;
};

export const getURLWithQueryParams = (base, params) => {
    const query = Object
      .entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&')
      
    return `${base}?${query}`
}

export const queryToObject = queryString => {
    const pairsString = queryString[0] === '?' ? queryString.slice(1) : queryString
    const pairs = pairsString
      .split('&')
      .map(str => str.split('=').map(decodeURIComponent))
    return pairs.reduce((acc, [key, value]) => key ? { ...acc, [key]: value } : acc, {})
}

export const PROVIDER = [
    LINKEDIN => "LinkedIn"
]

export const categoryIcon = [
  {key : 1, icon : 'DrillingRig3x.png'},
  {key : 2, icon : 'Production_1Production.png'},
  {key : 3, icon : 'oil_1oil.png'},
  {key : 4, icon : 'eng_1eng.png'},
  {key : 5, icon : 'Geoscience_1Geoscience.png'},
  {key : 6, icon : 'maint_1maint.png'},
  {key : 7, icon : 'HSE_1HSE.png'},
  {key : 8, icon : 'traad_1traad.png'},
  {key : 9, icon : 'proc_1proc.png'},
  {key : 10, icon : 'IT_1IT.png'},
  {key : 11, icon : 'Maritime_1Maritime.png'},
  {key : 12, icon : 'tem_1tem.png'},
  {key : 13, icon : 'HR_1HR.png'},
  {key : 14, icon : 'finances_1finances.png'},
  {key : 15, icon : 'ref_1ref.png'}
]

export const countries = [
    { value: '0',val: 0, code: 'US', label: 'United States', phone: '1', suggested: true },
    { value: '6',val: 6, code: 'AD', label: 'Andorra', phone: '376' },
    { value: '243',val: 243, code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { value: '1',val: 1, code: 'AF', label: 'Afghanistan', phone: '93' },
    { value: '10',val: 10, code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { value: '8',val: 8, code: 'AI', label: 'Anguilla', phone: '1-264' },
    { value: '3',val: 3, code: 'AL', label: 'Albania', phone: '355' },
    { value: '12',val: 12, code: 'AM', label: 'Armenia', phone: '374' },
    { value: '7',val: 7, code: 'AO', label: 'Angola', phone: '244' },
    { value: '9',val: 9, code: 'AQ', label: 'Antarctica', phone: '672' },
    { value: '11',val: 11, code: 'AR', label: 'Argentina', phone: '54' },
    { value: '5',val: 5, code: 'AS', label: 'American Samoa', phone: '1-684' },
    { value: '15',val: 15, code: 'AT', label: 'Austria', phone: '43' },
    { value: '14',val: 14, code: 'AU', label: 'Australia', phone: '61', suggested: true },
    { value: '13',val: 13, code: 'AW', label: 'Aruba', phone: '297' },
    { value: '264',val: 264, code: 'AX', label: 'Aland Islands', phone: '358' },
    { value: '16',val: 16, code: 'AZ', label: 'Azerbaijan', phone: '994' },
    { value: '29',val: 29, code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
    { value: '20',val: 20, code: 'BB', label: 'Barbados', phone: '1-246' },
    { value: '19',val: 19, code: 'BD', label: 'Bangladesh', phone: '880' },
    { value: '23',val: 23, code: 'BE', label: 'Belgium', phone: '32' },
    { value: '36',val: 36, code: 'BF', label: 'Burkina Faso', phone: '226' },
    { value: '35',val: 35, code: 'BG', label: 'Bulgaria', phone: '359' },
    { value: '18',val: 18, code: 'BH', label: 'Bahrain', phone: '973' },
    { value: '37',val: 37, code: 'BI', label: 'Burundi', phone: '257' },
    { value: '25',val: 25, code: 'BJ', label: 'Benin', phone: '229' },
    { value: '193',val: 193, code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { value: '26',val: 26, code: 'BM', label: 'Bermuda', phone: '1-441' },
    { value: '34',val: 34, code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { value: '28',val: 28, code: 'BO', label: 'Bolivia', phone: '591' },
    { value: '32',val: 32, code: 'BR', label: 'Brazil', phone: '55' },
    { value: '17',val: 17, code: 'BS', label: 'Bahamas', phone: '1-242' },
    { value: '27',val: 27, code: 'BT', label: 'Bhutan', phone: '975' },
    { value: '263',val: 263, code: 'BV', label: 'Bouvet Island', phone: '47' },
    { value: '30',val: 30, code: 'BW', label: 'Botswana', phone: '267' },
    { value: '22',val: 22, code: 'BY', label: 'Belarus', phone: '375' },
    { value: '24',val: 24, code: 'BZ', label: 'Belize', phone: '501' },
    { value: '41',val: 41, code: 'CA', label: 'Canada', phone: '1', suggested: true },
    { value: '49',val: 49, code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
    { value: '53',val: 53, code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
    { value: '44',val: 44, code: 'CF', label: 'Central African Republic', phone: '236' },
    { value: '52',val: 52, code: 'CG', label: 'Congo, Republic of the', phone: '242' },
    { value: '223',val: 223, code: 'CH', label: 'Switzerland', phone: '41' },
    { value: '56',val: 56, code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { value: '54',val: 54, code: 'CK', label: 'Cook Islands', phone: '682' },
    { value: '46',val: 46, code: 'CL', label: 'Chile', phone: '56' },
    { value: '40',val: 40, code: 'CM', label: 'Cameroon', phone: '237' },
    { value: '47',val: 47, code: 'CN', label: 'China', phone: '86' },
    { value: '50',val: 50, code: 'CO', label: 'Colombia', phone: '57' },
    { value: '55',val: 55, code: 'CR', label: 'Costa Rica', phone: '506' },
    { value: '58',val: 58, code: 'CU', label: 'Cuba', phone: '53' },
    { value: '42',val: 42, code: 'CV', label: 'Cape Verde', phone: '238' },
    { value: '262',val: 262, code: 'CW', label: 'Curacao', phone: '599' },
    { value: '163',val: 163, code: 'CW', label: 'Netherlands Antilles', phone: '599' },
    { value: '48',val: 48, code: 'CX', label: 'Christmas Island', phone: '61' },
    { value: '59',val: 59, code: 'CY', label: 'Cyprus', phone: '357' },
    { value: '60',val: 60, code: 'CZ', label: 'Czech Republic', phone: '420' },
    { value: '84',val: 84, code: 'DE', label: 'Germany', phone: '49', suggested: true },
    { value: '62',val: 62, code: 'DJ', label: 'Djibouti', phone: '253' },
    { value: '61',val: 61, code: 'DK', label: 'Denmark', phone: '45' },
    { value: '63',val: 63, code: 'DM', label: 'Dominica', phone: '1-767' },
    { value: '64',val: 64, code: 'DO', label: 'Dominican Republic', phone: '1-809' },
    { value: '4',val: 4, code: 'DZ', label: 'Algeria', phone: '213' },
    { value: '65',val: 65, code: 'EC', label: 'Ecuador', phone: '593' },
    { value: '70',val: 70, code: 'EE', label: 'Estonia', phone: '372' },
    { value: '66',val: 66, code: 'EG', label: 'Egypt', phone: '20' },
    { value: '255',val: 255, code: 'EH', label: 'Western Sahara', phone: '212' },
    { value: '69',val: 69, code: 'ER', label: 'Eritrea', phone: '291' },
    { value: '216',val: 216, code: 'ES', label: 'Spain', phone: '34' },
    { value: '71',val: 71, code: 'ET', label: 'Ethiopia', phone: '251' },
    { value: '75',val: 75, code: 'FI', label: 'Finland', phone: '358' },
    { value: '74',val: 74, code: 'FJ', label: 'Fiji', phone: '679' },
    { value: '72',val: 72, code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },
    { value: '149',val: 149, code: 'FM', label: 'Micronesia, Federated States of', phone: '691' },
    { value: '73',val: 73, code: 'FO', label: 'Faroe Islands', phone: '298' },
    { value: '76',val: 76, code: 'FR', label: 'France', phone: '33', suggested: true },
    { value: '81',val: 81, code: 'GA', label: 'Gabon', phone: '241' },
    { value: '244',val: 244, code: 'GB', label: 'United Kingdom', phone: '44' },
    { value: '89',val: 89, code: 'GD', label: 'Grenada', phone: '1-473' },
    { value: '83',val: 83, code: 'GE', label: 'Georgia', phone: '995' },
    { value: '77',val: 77, code: 'GF', label: 'French Guiana', phone: '594' },
    { value: '93',val: 93, code: 'GG', label: 'Guernsey', phone: '44' },
    { value: '85',val: 85, code: 'GH', label: 'Ghana', phone: '233' },
    { value: '86',val: 86, code: 'GI', label: 'Gibraltar', phone: '350' },
    { value: '88',val: 88, code: 'GL', label: 'Greenland', phone: '299' },
    { value: '82',val: 82, code: 'GM', label: 'Gambia', phone: '220' },
    { value: '94',val: 94, code: 'GN', label: 'Guinea', phone: '224' },
    { value: '90',val: 90, code: 'GP', label: 'Guadeloupe', phone: '590' },
    { value: '68',val: 68, code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { value: '87',val: 87, code: 'GR', label: 'Greece', phone: '30' },
    { value: '214',val: 214, code: 'GS', label: 'South Georgia', phone: '500' },
    { value: '215',val: 215, code: 'GS', label: 'South Sandwich Islands', phone: '500' },
    { value: '92',val: 92, code: 'GT', label: 'Guatemala', phone: '502' },
    { value: '91',val: 91, code: 'GU', label: 'Guam', phone: '1-671' },
    { value: '95',val: 95, code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { value: '96',val: 96, code: 'GY', label: 'Guyana', phone: '592' },
    { value: '102',val: 102, code: 'HK', label: 'Hong Kong', phone: '852' },
    { value: '98',val: 98, code: 'HM', label: 'Heard Island', phone: '672' },
    { value: '147',val: 147, code: 'HM', label: 'McDonald Islands', phone: '672' },    
    { value: '101',val: 101, code: 'HN', label: 'Honduras', phone: '504' },
    { value: '57',val: 57, code: 'HR', label: 'Croatia', phone: '385' },
    { value: '97',val: 97, code: 'HT', label: 'Haiti', phone: '509' },
    { value: '103',val: 103, code: 'HU', label: 'Hungary', phone: '36' },
    { value: '106',val: 106, code: 'ID', label: 'Indonesia', phone: '62' },
    { value: '109',val: 109, code: 'IE', label: 'Ireland', phone: '353' },
    { value: '111',val: 111, code: 'IL', label: 'Israel', phone: '972' },
    { value: '110',val: 110, code: 'IM', label: 'Isle of Man', phone: '44' },
    { value: '105',val: 105, code: 'IN', label: 'India', phone: '91' },
    { value: '33',val: 33, code: 'IO', label: 'British Indian Ocean Territory', phone: '246' },
    { value: '108',val: 108, code: 'IQ', label: 'Iraq', phone: '964' },
    { value: '107',val: 107, code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },
    { value: '104',val: 104, code: 'IS', label: 'Iceland', phone: '354' },
    { value: '112',val: 112, code: 'IT', label: 'Italy', phone: '39' },
    { value: '116',val: 116, code: 'JE', label: 'Jersey', phone: '44' },
    { value: '113',val: 113, code: 'JM', label: 'Jamaica', phone: '1-876' },
    { value: '117',val: 117, code: 'JO', label: 'Jordan', phone: '962' },
    { value: '115',val: 115, code: 'JP', label: 'Japan', phone: '81', suggested: true },
    { value: '119',val: 119, code: 'KE', label: 'Kenya', phone: '254' },
    { value: '124',val: 124, code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { value: '39',val: 39, code: 'KH', label: 'Cambodia', phone: '855' },
    { value: '120',val: 120, code: 'KI', label: 'Kiribati', phone: '686' },
    { value: '51',val: 51, code: 'KM', label: 'Comoros', phone: '269' },
    { value: '164',val: 164, code: 'KN', label: 'Nevis', phone: '1-869' },
    { value: '195',val: 195, code: 'KN', label: 'Saint Kitts', phone: '1-869' },
    { value: '122',val: 122, code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
    { value: '121',val: 121, code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { value: '123',val: 123, code: 'KW', label: 'Kuwait', phone: '965' },
    { value: '43',val: 43, code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { value: '118',val: 118, code: 'KZ', label: 'Kazakhstan', phone: '7' },
    { value: '125',val: 125, code: 'LA', label: "Lao People's Democratic Republic", phone: '856' },
    { value: '127',val: 127, code: 'LB', label: 'Lebanon', phone: '961' },
    { value: '196',val: 196, code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { value: '131',val: 131, code: 'LI', label: 'Liechtenstein', phone: '423' },
    { value: '217',val: 217, code: 'LK', label: 'Sri Lanka', phone: '94' },
    { value: '129',val: 129, code: 'LR', label: 'Liberia', phone: '231' },
    { value: '128',val: 128, code: 'LS', label: 'Lesotho', phone: '266' },
    { value: '132',val: 132, code: 'LT', label: 'Lithuania', phone: '370' },
    { value: '133',val: 133, code: 'LU', label: 'Luxembourg', phone: '352' },
    { value: '126',val: 126, code: 'LV', label: 'Latvia', phone: '371' },
    { value: '130',val: 130, code: 'LY', label: 'Libya', phone: '218' },
    { value: '156',val: 156, code: 'MA', label: 'Morocco', phone: '212' },
    { value: '152',val: 152, code: 'MC', label: 'Monaco', phone: '377' },
    { value: '151',val: 151, code: 'MD', label: 'Moldova, Republic of', phone: '373' },
    { value: '154',val: 154, code: 'ME', label: 'Montenegro', phone: '382' },
    { value: '197',val: 197, code: 'MF', label: 'Saint Martin (French part)', phone: '590' },
    { value: '136',val: 136, code: 'MG', label: 'Madagascar', phone: '261' },
    { value: '142',val: 142, code: 'MH', label: 'Marshall Islands', phone: '692' },
    { value: '135',val: 135, code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389' },
    { value: '140',val: 140, code: 'ML', label: 'Mali', phone: '223' },
    { value: '158',val: 158, code: 'MM', label: 'Myanmar', phone: '95' },
    { value: '153',val: 153, code: 'MN', label: 'Mongolia', phone: '976' },
    { value: '134',val: 134, code: 'MO', label: 'Macao', phone: '853' },
    { value: '172',val: 172, code: 'MP', label: 'Northern Mariana Islands', phone: '1-670' },
    { value: '143',val: 143, code: 'MQ', label: 'Martinique', phone: '596' },
    { value: '144',val: 144, code: 'MR', label: 'Mauritania', phone: '222' },
    { value: '155',val: 155, code: 'MS', label: 'Montserrat', phone: '1-664' },
    { value: '141',val: 141, code: 'MT', label: 'Malta', phone: '356' },
    { value: '145',val: 145, code: 'MU', label: 'Mauritius', phone: '230' },
    { value: '139',val: 139, code: 'MV', label: 'Maldives', phone: '960' },
    { value: '137',val: 137, code: 'MW', label: 'Malawi', phone: '265' },
    { value: '148',val: 148, code: 'MX', label: 'Mexico', phone: '52' },
    { value: '138',val: 138, code: 'MY', label: 'Malaysia', phone: '60' },
    { value: '157',val: 157, code: 'MZ', label: 'Mozambique', phone: '258' },
    { value: '159',val: 159, code: 'NA', label: 'Namibia', phone: '264' },
    { value: '165',val: 165, code: 'NC', label: 'New Caledonia', phone: '687' },
    { value: '168',val: 168, code: 'NE', label: 'Niger', phone: '227' },
    { value: '171',val: 171, code: 'NF', label: 'Norfolk Island', phone: '672' },
    { value: '169',val: 169, code: 'NG', label: 'Nigeria', phone: '234' },
    { value: '167',val: 167, code: 'NI', label: 'Nicaragua', phone: '505' },
    { value: '162',val: 162, code: 'NL', label: 'Netherlands', phone: '31' },
    { value: '173',val: 173, code: 'NO', label: 'Norway', phone: '47' },
    { value: '161',val: 161, code: 'NP', label: 'Nepal', phone: '977' },
    { value: '160',val: 160, code: 'NR', label: 'Nauru', phone: '674' },
    { value: '170',val: 170, code: 'NU', label: 'Niue', phone: '683' },
    { value: '166',val: 166, code: 'NZ', label: 'New Zealand', phone: '64' },
    { value: '174',val: 174, code: 'OM', label: 'Oman', phone: '968' },
    { value: '178',val: 178, code: 'PA', label: 'Panama', phone: '507' },
    { value: '181',val: 181, code: 'PE', label: 'Peru', phone: '51' },
    { value: '78',val: 78, code: 'PF', label: 'French Polynesia', phone: '689' },
    { value: '179',val: 179, code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { value: '182',val: 182, code: 'PH', label: 'Philippines', phone: '63' },
    { value: '175',val: 175, code: 'PK', label: 'Pakistan', phone: '92' },
    { value: '184',val: 184, code: 'PL', label: 'Poland', phone: '48' },
    { value: '150',val: 150, code: 'PM', label: 'Miquelon', phone: '508' },
    { value: '198',val: 198, code: 'PM', label: 'Saint Pierre', phone: '508' },
    { value: '183',val: 183, code: 'PN', label: 'Pitcairn', phone: '870' },
    { value: '187',val: 187, code: 'PR', label: 'Puerto Rico', phone: '1' },
    { value: '177',val: 177, code: 'PS', label: 'Palestine, State of', phone: '970' },
    { value: '185',val: 185, code: 'PT', label: 'Portugal', phone: '351' },
    { value: '176',val: 176, code: 'PW', label: 'Palau', phone: '680' },
    { value: '180',val: 180, code: 'PY', label: 'Paraguay', phone: '595' },
    { value: '188',val: 188, code: 'QA', label: 'Qatar', phone: '974' },
    { value: '189',val: 189, code: 'RE', label: 'Reunion', phone: '262' },
    { value: '190',val: 190, code: 'RO', label: 'Romania', phone: '40' },
    { value: '205',val: 205, code: 'RS', label: 'Serbia', phone: '381' },
    { value: '191',val: 191, code: 'RU', label: 'Russian Federation', phone: '7' },
    { value: '192',val: 192, code: 'RW', label: 'Rwanda', phone: '250' },
    { value: '203',val: 203, code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { value: '211',val: 211, code: 'SB', label: 'Solomon Islands', phone: '677' },
    { value: '206',val: 206, code: 'SC', label: 'Seychelles', phone: '248' },
    { value: '218',val: 218, code: 'SD', label: 'Sudan', phone: '249' },
    { value: '222',val: 222, code: 'SE', label: 'Sweden', phone: '46' },
    { value: '208',val: 208, code: 'SG', label: 'Singapore', phone: '65' },
    { value: '194',val: 194, code: 'SH', label: 'Saint Helena', phone: '290' },
    { value: '210',val: 210, code: 'SI', label: 'Slovenia', phone: '386' },
    { value: '114',val: 114, code: 'SJ', label: 'Jan Mayen', phone: '47' },
    { value: '220',val: 220, code: 'SJ', label: 'Svalbard', phone: '47' },
    { value: '209',val: 209, code: 'SK', label: 'Slovakia', phone: '421' },
    { value: '207',val: 207, code: 'SL', label: 'Sierra Leone', phone: '232' },
    { value: '201',val: 201, code: 'SM', label: 'San Marino', phone: '378' },
    { value: '204',val: 204, code: 'SN', label: 'Senegal', phone: '221' },
    { value: '212',val: 212, code: 'SO', label: 'Somalia', phone: '252' },
    { value: '219',val: 219, code: 'SR', label: 'Suriname', phone: '597' },
    { value: '261',val: 261, code: 'SS', label: 'South Sudan', phone: '211' },
    { value: '186',val: 186, code: 'ST', label: 'Principe', phone: '239' },
    { value: '202',val: 202, code: 'ST', label: 'Sao Tome', phone: '239' },
    { value: '67',val: 67, code: 'SV', label: 'El Salvador', phone: '503' },
    { value: '260',val: 260, code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },
    { value: '224',val: 224, code: 'SY', label: 'Syrian Arab Republic', phone: '963' },
    { value: '221',val: 221, code: 'SZ', label: 'Swaziland', phone: '268' },
    { value: '38',val: 38, code: 'TC', label: 'Caicos Islands', phone: '1-649' },
    { value: '239',val: 239, code: 'TC', label: 'Turks', phone: '1-649' },
    { value: '45',val: 45, code: 'TD', label: 'Chad', phone: '235' },
    { value: '79',val: 79, code: 'TF', label: 'French Southern Territories', phone: '262' },
    { value: '232',val: 232, code: 'TG', label: 'Togo', phone: '228' },
    { value: '228',val: 228, code: 'TH', label: 'Thailand', phone: '66' },
    { value: '226',val: 226, code: 'TJ', label: 'Tajikistan', phone: '992' },
    { value: '233',val: 233, code: 'TK', label: 'Tokelau', phone: '690' },
    { value: '230',val: 230, code: 'TL', label: 'Timor-Leste', phone: '670' },
    { value: '238',val: 238, code: 'TM', label: 'Turkmenistan', phone: '993' },
    { value: '236',val: 236, code: 'TN', label: 'Tunisia', phone: '216' },
    { value: '234',val: 234, code: 'TO', label: 'Tonga', phone: '676' },
    { value: '237',val: 237, code: 'TR', label: 'Turkey', phone: '90' },
    { value: '231',val: 231, code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
    { value: '240',val: 240, code: 'TV', label: 'Tuvalu', phone: '688' },
    { value: '225',val: 225, code: 'TW', label: 'Taiwan, Province of China', phone: '886' },
    { value: '227',val: 227, code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },
    { value: '242',val: 242, code: 'UA', label: 'Ukraine', phone: '380' },
    { value: '241',val: 241, code: 'UG', label: 'Uganda', phone: '256' },
    { value: '245',val: 245, code: 'UY', label: 'Uruguay', phone: '598' },
    { value: '247',val: 247, code: 'UZ', label: 'Uzbekistan', phone: '998' },
    { value: '100',val: 100, code: 'VA', label: 'Holy See', phone: '379' },
    { value: '249',val: 249, code: 'VA', label: 'Vatican City State', phone: '379' },
    { value: '199',val: 199, code: 'VC', label: 'Saint Vincent', phone: '1-784' },
    { value: '229',val: 229, code: 'VC', label: 'The Grenadines', phone: '1-784' },
    { value: '250',val: 250, code: 'VE', label: 'Venezuela', phone: '58' },
    { value: '252',val: 252, code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
    { value: '253',val: 253, code: 'VI', label: 'US Virgin Islands', phone: '1-340' },
    { value: '251',val: 251, code: 'VN', label: 'Vietnam', phone: '84' },
    { value: '248',val: 248, code: 'VU', label: 'Vanuatu', phone: '678' },
    { value: '254',val: 254, code: 'WF', label: 'Wallis', phone: '681' },
    { value: '80',val: 80, code: 'WF', label: 'Futuna Islands', phone: '681' },
    { value: '200',val: 200, code: 'WS', label: 'Samoa', phone: '685' },
    { value: '259',val: 259, code: 'XK', label: 'Kosovo', phone: '383' },
    { value: '256',val: 256, code: 'YE', label: 'Yemen', phone: '967' },
    { value: '146',val: 146, code: 'YT', label: 'Mayotte', phone: '262' },
    { value: '213',val: 213, code: 'ZA', label: 'South Africa', phone: '27' },
    { value: '257',val: 257, code: 'ZM', label: 'Zambia', phone: '260' },
    { value: '258',val: 258, code: 'ZW', label: 'Zimbabwe', phone: '263' },
    { value: '246',val: 246, code: 'UM', label: 'US Minor Outlying Islands', phone: '246' }
]
export const  LANGUAGES = [
  {value : 1, label : 'English'},
  {value : 2, label : 'Spanish'},
  {value : 4, label : 'French'}
]
export const  EDUCATION = [
  {value : 2, label : 'High School'},
  {value : 1, label : 'Diploma'},
  {value : 3, label : 'Bachelor\'s Degree'},
  {value : 4, label : 'Masters Degree'},
  {value : 5, label : 'PHD'},
  {value : 6, label : 'MBA'}
]
export const ENGLISH_LEVEL = [
  {value : 4, label: "Any level"},
  {value : 1, label: "Basic"},
  {value : 2, label: "Conversational"},
  {value : 3, label: "Fluent"}
]

export const AGE_OPTIONS = [
  {value : 1, label : '20-30 years'},
  {value : 2, label : '30-40 years'},
  {value : 3, label : '40-50 years'},
  {value : 4, label : '50+ years'}
]
export const EXPERIENCE = [
  { value : 1, label : 'Beginner'},
  { value : 2, label : '2-5 Years'},
  { value : 3, label : '5-10 years'},
  { value : 4, label : '10-15 years'},
  { value : 5, label : '15+ years'}
]

export const COMPLETE_PROFILE = [
  { value : 6, label : 'full_name'},
  { value : 6, label : 'last_name'},
  { value : 6, label : 'email'},
  { value : 4.5, label : 'contact_no'},
  { value : 4.5, label : 'age'},
  { value : 4.5, label : 'languajes'},
  { value : 4.5, label : 'educations'},
  { value : 4.5, label : 'english_proficiency'},
  { value : 4.5, label : 'linked_in'},
  { value : 4.5, label : 'about'},
  { value : 4.5, label : 'resume'},
  { value : 4.5, label : 'profile_file'},
  { value : 6, label : 'functions'},
  { value : 4.5, label : 'skills'},
  { value : 5, label : 'area'},
  { value : 5, label : 'street'},
  { value : 5, label : 'city'},
  { value : 5, label : 'state'},
  { value : 6, label : 'country'},
  { value : 5, label : 'timezone'},
]





