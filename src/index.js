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

function getDayOfWeek(date) {
    let dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : 
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
getDayOfWeek("03-05-2022",)
console.log(getDayOfWeek("03-05-2022", "male"));

   //FINDS MALE ARRAY

const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
    console.log(foundDayArrayMale);

let comparisonMale= foundDayArrayMale.find(element => element === getDayOfWeek("03-05-2022"));
    console.log(comparisonMale);

    //FINDS FEMALE ARRAY

    const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
    console.log(foundDayArrayfemale);

let comparisonFemale= foundDayArrayfemale.find(element => element === getDayOfWeek("03-05-2022"));
    console.log(comparisonFemale);

        //FUNCTION TO RETURN AKAN NAME 

function final(gender){
    if(gender == "male"){
        return (maleAkanName[comparisonMale])
    }else if(gender == "female"){
        return (femaleAkanName[comparisonFemale])
    }
}

console.log(final('female'))

    //GETTING THE ACTIONS FROM THE FORM
    function formResults (form) {
        var dateInput = document.getElementById('date');
        document.write("The difference is " + daydiff + " days");
    }
/*    function writeText (form) {
        form.button2.value = "Have a nice day!"
    }
    */