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
   //FINDS MALE ARRAY

const foundDayArrayMale= Object.getOwnPropertyNames(maleAkanName)
    console.log(foundDayArrayMale);

    //FINDS FEMALE ARRAY

const foundDayArrayfemale= Object.getOwnPropertyNames(femaleAkanName)
    console.log(foundDayArrayfemale);
    
    //FINDS DATE INPUT

let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function dateResults() {
    let dateInput = document.getElementById('date');
        let dayOfWeek = new Date(dateInput.value).getDay();
        let birthday= days[dayOfWeek];
        console.log(birthday);
        return (birthday);
    }



let comparisonMale= foundDayArrayMale.find(element => element === dateResults());
    console.log(comparisonMale);


let comparisonFemale= foundDayArrayfemale.find(element => element === dateResults());
    console.log(comparisonFemale);

        //FUNCTION TO RETURN AKAN NAME 

function final(gender){
    if(gender == "male"){
        document.write(maleAkanName[comparisonMale])
    }else if(gender == "female"){
        document.write(femaleAkanName[comparisonFemale])
    }
}

console.log(final('female'))

    //GETTING THE ACTIONS FROM THE FORM
    function formResults() {
        let nameInput = document.getElementById('name');
        let finaldate = 
        document.write("The difference is " + daydiff + " days");
    }
