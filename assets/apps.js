const form = getFieldElement('form')
let fieldValue = fieldName => form.fieldName.value.trim()
form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (form.cast.value.trim() === '') {
        form.cast.value = notKnown(form.religion.value)
    }







})










// Nick Name Even Handeler
getFieldElement('nick_name').addEventListener('focus', () => {
    if (form.nick_name.value.trim() === '') {
        form.nick_name.value = form.full_name.value.trim().split(" ")[0]
    }
})


// dob Event Handeler
getFieldElement('dob').addEventListener('blur', () => {
    ageCalculator();
    findZodiac();

})

// nationality handaler


function countryNationality() {
    const countryName = getFieldElement('country').value
    const countryIndex = countries.indexOf(countryName)
    SetFieldValue('nationality', nationalityList[countryIndex])
}

// Birth Location Even Handeler
getFieldElement('birth_place').addEventListener('focus', () => {
    SetFieldValue('birth_place', getFieldElement('country').value)
    SetFieldValue('grow_up', getFieldElement('country').value)
    countryNationality()
})

// height calculator
getFieldElement('height-cm').addEventListener('blur', () => {
    const height_cm = parseInt(getFieldElement('height-cm').value)
    const height_m = (height_cm / 100).toFixed(2);

    const height_inches = height_cm * 0.393700787

    const height_feet = Math.trunc(height_inches / 12)
    const height_remain_inch = Math.round(height_inches) % 12

    const height_feet_text = height_feet + ' Feets and ' + height_remain_inch + ' Inches'

    SetFieldValue('height-meter', height_m + ' Meters');
    SetFieldValue('height-feet', height_feet_text);

})


// Weight Calculators

getFieldElement('weight-kg').addEventListener('blur', () => {
    weightKg = parseInt(getFieldElement('weight-kg').value)
    weightPound = Math.floor(weightKg * 2.20462262).toFixed(2)
    SetFieldValue('weight-pound', weightPound + ' Pounds')
})















// Age Calculation Function 

function ageCalculator() {
    const userinput = getFieldElement("dob").value
    const dob = new Date(userinput);
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    SetFieldValue("age", age + " years ");

}



// Zodiac Sign Calculation 
function findZodiac() {
    const userinput = getFieldElement("dob").value;
    const date = new Date(userinput);
    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = date.getMonth();
    let day = date.getDate();
    if (month == 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    };
    // getFieldValue('zodiac').value = signs[month];
    SetFieldValue('zodiac', signs[month])
}




// Not Known Array
function notKnown(data = "Data Not Found") {
    const arr = ['Not Known', 'Not Found', 'Data Will be Updated', 'Will be Updated']
    arr.push(data)
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}





// Get Element By Id value 

function getFieldElement(elementId) {
    return document.getElementById(elementId);
}
// Set Value
function SetFieldValue(elementId, value) {
    return document.getElementById(elementId).value = value;
}




