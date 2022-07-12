// Good vs Bad

// Constant
const I_AM_A_CONSTANT = 'I SHOULD BE HERE';
const DEFAULT_ARRAY_OF_LETTERS = 'CLEANCODE'.split('');
const DEFAULT_ARRAY_OF_DATES = [
  { day: 0, month: 0, year: 2000 },
  { day: 0, month: 0, year: 2001 },
];

// == Meaningful ==
// | Stop your stupid mind from declaring shit ass variables

// == Bad ==
// What the fuc is this ? yyymmmm
const yyyyMMMdd = new Date();
// == Good ==
const currentDate = new Date();
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const currentDay = new Date().getDay();

// Vocabulary
// | If there are same type of variable generalize.
// == Bad ==
const getUserInfo = () => {};
const getUserName = () => {};
const getUserLastName = () => {};
// == Better ==
const getUser = () => {};

// Searchable
// | Rule: If you want an easy to search var name, make one idiot.
// == Bad ==
setTimeout(() => {}, 86500); // We don't know what the fuck is 86500
const getRadius = (num1) => num1 * 3.41; // Again we don't know what is 3.41, well for starters
// == Better ==
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; // Better since this is a constant
const PI = 3.14;

setTimeout(() => {}, MILLISECONDS_PER_DAY);

// Explanatory
// | Here we avoid direct functions ex. .match
// | we can destructure shit

const saveCityZipCode = (zipCode: any) => {
  return;
};
// == Bad ==
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1]);

// == Good ==
const [city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city);

// Mental Mapping
// | Rule: Plural first
// == BAD ==
DEFAULT_ARRAY_OF_LETTERS.map((i) => {
  return;
});
// == BETTER ==
DEFAULT_ARRAY_OF_DATES.map((date) => {
  return;
});

// Unneeded Context
// Rule: Don't repeat your ass
// == Bad ==
const Gun = {
  // Look how stupid this sounds
  gunName: '',
  gunPurpose: 'shoot malibogs',
};

Gun.gunPurpose;
// == Better ==
const Gun = {
  name: '',
  purpose: 'shoot assholes',
};

Gun.purpose;

// Default instead of circuiting conditionals
// Rule| if you are conditioning an item with default value might as well declare in the param
// == Bad ==
const getUser = (name) => {
  const user = name || 'bulagtok';
};
// == Better
const getUser = (name = 'Jimminy Billy Bob') => {};
