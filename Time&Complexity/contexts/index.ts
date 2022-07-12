// Context: Nagbigay ka ng isang ballpen sa isang daan ka tao. Hanapin mo
// yung ballpen ng di mo alam kung sinoi pinag bigyan mo

// Possible Solutions:
// where: n = number of students

// 0(n^2)
let HIDDEN_PEN = Math.floor(Math.random() * 100);
let NUMBER_OF_STUDENTS = 100;

function askFirstThenHimAboutTheRest() {
}
// O(n)
function askAll() {
    for (let i = 0; i <= NUMBER_OF_STUDENTS; i++) {
        if(i === HIDDEN_PEN) 
            return true;
    }
    return;
}
// O (log n)
function devideByHalfUntiFinding() {

}