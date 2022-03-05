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

