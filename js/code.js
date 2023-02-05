// 1
function validateEmail(email) {
    return true;
}



function validateEmail(email) {
    
    if (email == '') {
        return false;
    }
    if (typeof email != 'string') {
        return false;
    }
    if (!email.split('').includes('@') || email.split('')[0] == '@') {
        return false;
    }


    //  2
    if (email.split('').length < 5) {
        return false;
    }


    //  3
    let str = email.split('');
    let j = 0;
    for (let i in str) {
        if (str [i] === '@') {
            j += 1;
        }
    }       
        if (j > 1) {           
            return false;
        }
    
        
    //  4
    let str1 = email.split('');
    let indexDog = 0;
    let indexPoint = [];
    let y = 0;
       for (let i in str1) {
        if (str1[i] === '@') {
            indexDog = i;
        }
        if (str1[i] === '.') {
            indexPoint[y] = i;
            y += 1;
        }
    }
    if (indexDog < indexPoint[indexPoint.length - 1]) {
        return false;
    }
    if (indexPoint[indexPoint.length - 1] < indexDog) {
        return false;
    }
    for (y = 0; y < indexPoint.length; y++) {
        if (indexPoint[y] - indexDog === 1) {
            return false;
        }
    }
    return true;
}
