let maleAkanName={
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday:  "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
 }
 let femaleAkanName={
    Sunday: "Akosua",        
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday:  "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
}

function formResults() {
    let dateInput = document.getElementById('date');
        let dayOfWeek = new Date(dateInput.value).getDay();
        console.log(dayOfWeek)
        return isNaN(dayOfWeek) ? null : 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
console.log(dayOfWeek)
//    //FINDS MALE ARRAY

// const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
//     console.log(foundDayArrayMale);

// let comparisonMale= foundDayArrayMale.find(element => element === formResults(form));
//     console.log(comparisonMale);

//     //FINDS FEMALE ARRAY

//     const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
//     console.log(foundDayArrayfemale);

// let comparisonFemale= foundDayArrayfemale.find(element => element === formResults(form));
//     console.log(comparisonFemale);

//         //FUNCTION TO RETURN AKAN NAME 

// function final(gender){
//     if(gender == "male"){
//         document.write(maleAkanName[comparisonMale])
//     }else if(gender == "female"){
//         document.write(femaleAkanName[comparisonFemale])
//     }
// }

// console.log(final('female'))

//     //GETTING THE ACTIONS FROM THE FORM
//     function formResults (form) {
//         var dateInput = document.getElementById('date');
//         document.write("The difference is " + daydiff + " days");
//     }
// /*    function writeText (form) {
//         form.button2.value = "Have a nice day!"
//     }
//     */