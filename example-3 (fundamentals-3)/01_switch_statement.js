/** 
** ----------------
** SWITCH STATEMENT
** ----------------
*/

const day = 'asd';

switch (day) {
    case 'Monday':
        console.log('Monday Plan');
        break;
    case 'Tuesday':
    case 'Wednesday':
        console.log('Tuesday & Wednesday Plan');
        break;
    default:
        console.log('Other day Plan');
        break;
}