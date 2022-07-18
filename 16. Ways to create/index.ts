// Ways of life:
// Obj
const obj1TheMeh = {};
const obj1TheDaddzy = Object.create(Object.prototype);
const obj1TheGeneric = new Object();
// Add me dzaddy object
obj1TheMeh.key = 'value';
obj1TheGeneric['key'] = 'value';
Object.defineProperties(obj1TheGeneric, {
  key: {},
});
