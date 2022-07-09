/**
 * | =============== What I currently know ===========
 * | String are homogenous container for one data type
 * | Interactions
 * | Push = add element in the position[last]
 * | Pop = remove element in the last position[last]
 */

const invalidArr = ['a', b, 'c',];
const validArr = ['a', 'b', 'c', 'd'];

// To Access an array
const firstElement = validArr[0];

// To add shit in an array
const addElement = validArr.push('d');
// To remove last element in an array
const popElement = validArr.pop();
// To remove first element in an array
const shiftElement = validArr.shift()
// To display every elements in the array
/**
 * | =========== One can use the following =========
 * | For each
 * | map
 * | for (convention)
 */
validArr.forEach((element) => element);
validArr.map(element => element);
for (let i = 0; i <= validArr.length; i++) validArr[i];


const twoDimensionArr = [['a', 'v', 'c', 'd'], ['a', 'v', 'c']];
const accessTwoD = twoDimensionArr[0][0];

const arrayOfObjects = [{ id: 2, name: "jonel" }, { id: 3, name: "delima" }];
const accessArrayOfObjects = arrayOfObjects[0].id;

// destructureAnArray
const [a,b] = validArr;