//Move capital letters to the front
//Instruction : Create a function that moves all capital letter to the front of a word

function capToFront(str) {

    let sUpper = "" , sLowwer = ""
    for (const strChar of str)
        (strChar.toUpperCase() === strChar) ? sUpper += strChar : sLowwer += strChar;
    return sUpper + sLowwer
}

console.log( capToFront("hApPy") );
console.log( capToFront("moveMENT") );
console.log( capToFront("shOrtCAKE") );

