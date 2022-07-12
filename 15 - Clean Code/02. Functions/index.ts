// General Rules
// | Max of 3 arguments
// | Delegate tasks
// | One task per function

// General argument structure
// == Bad ==
function createMenuItems(title, body, buttonText, cancellable) {}
// == Better ==
interface IMenu {
  title: string;
  body: string;
  buttonText: string;
  cancellable: boolean;
}
function createMenu({ title, body, buttonText, cancellable }: IMenu) {}

// This looks cleaner don't it?
createMenu({
  title: 'Menudo',
  body: 'Chicken Manok',
  buttonText: 'Well done',
  cancellable: true,
});

// Function should do one thing at a time, do not overload.
function createUser({ name, lastName }) {}
function assignRole() {}

// == Better ==
function sendEmailTo(clients) {
  return clients.forEach((client) => {});
}
function isActive(client) {
  return client.isActive();
}
// Confused
function sendEmailTo(clients) {
  client.filter(isActive).forEach(client);
}

// Functions names should do what they say
// == Bad ==
function addToDate() {} // pinoi what?
// == Good ==
function addMonthToDate() {}

// Funcions should be one level of abstraction
// == Bad ==
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}

// Object.assign
function createConfig(config) {
  const finalConfig = Object.assign({}, config);
  return finalConfig;
}

// Don't use flags
// == Bad ==
function createFile(name, temp) {
  if (temp) {
    fs.createFile(`/temp/${name}`);
  } else {
    fs.createFile(name);
  }
}
// == Better ==
function createFile(name) {
  fs.createFile(name);
}
function createTempFile(name) {
  createFile(`./temp/$()`);
}

// The side effects
// | Mutating global shit
// == Bad ==
let name = 'dadzy';
function splitIntoFirstNameLastName(name) {
  name = name.split('');
}
// == Good ==
function splitName(name) {
  return name.split('');
}
let name = '';
let functioncall = splitNamen(name);
