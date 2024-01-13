Diagnosis = ["N/A", "Normal", "Subjective Cognitive Impairment", "Mild Cognitive Impairment (MCI)", "Vascular Cognitive Impairment", "Vascular Dementia", "Alzheimers", "Lewy Body Disease", "Parkinsons Dementia", "Mixed Dementia", "Frontotemporal Lobe Dementia", "Corticobasilar Degeneration", "Progressive Supranuclear Palsy", "Huntingtons Disease", "Psuedo Dementia", "Wernickes-Corsakov Syndrome"];

LivingSituation = ["Home independent", "Home independent", "Home independent", "Home independent", "Home independent", "Home w/ 24 hr ast.", "Home w/ several hr ast.", "Home w/ couple hr ast.", "Home w/ intermittent ast.", "Home w/ ast. as needed", "Living facility w/ some support", "Living facility with full support", "Nursing home with minimal help", "Nursing home with moderate help", "Nursing home with complete support", "Closed Alzheimers Facility"]

Symptoms = ["Symptoms started suddenly", "Symptoms started over hours", "Symptoms started over days", "Symptoms started over weeks", "Symptoms progressed over months"]
How = ["Started experiencing some forgetfulness", "Started to repeat questions", "Started to repeat stories", "Started to repeat statements"]
HomeAndThoughts = ["Forgot to take care of utilities around the home", "Forgot where things were placed around the home", "Forgot activities appointments, and plans", "Lost train of thought in the middle of the conversations", "Had disorganized thoughts", "Had difficulty orienting in less familiar places", "Had difficulty orienting in familiar places"]
Driving = ["Got into a car accident", "Got into multiple accidents", "Didnt drive at the time", "Never drove"]
Inappropriate = ["Would make occasional inappropriate comments", "Would often make inappropriate comments", "Occasionally behaved inappropriately", "Often behaved inappropriately"]
Personality = ["Became more obstinate", "Became more argumentative", "Became more verbally aggressive", "Became more physically aggressive", "Became more introverted", "Became less talkative", "Became more extroverted", "Became more depressed", "Became more anxious", "Became manic"]
Work = ["There was less work performance", "Would complete fewer tasks"]
Lost = ["There was one episode of getting lost", "There were several episodes of getting lost", "If left alone, would get lost"]
Language = ["There was early mild change in language", "There was early prominent change in language", "Became globally aphasic", "There was evidence of dysarthria", "Had difficulty finding words", "Couldnt finish sentences because of inability to find words", "Frustrated due to difficulty finding words"]
Difficulty = ["Had difficulty remembering/learning new names", "Had difficulty performing certain tasks"]
Forgot = ["Forgot close family members names", "Forgot distant events", "Forgot people from the past"]
Withdrawal = ["There was withdrawal from previous activities with family", "There was withdrawal from previous activities with friends", "There was withdrawal from previous social activities"]
Posture = ["Posture became more stooped", "Started stumbling", "Started falling", "Gait became unstable", "Gait changed in making turns", "Gait changed due to orthopedic reasons"]
Axatia = ["Had a tremor", "Developed ataxia in right arm", "Developed ataxia in left arm", "Developed ataxia in right leg", "Developed ataxia in left leg"]
Urine = ["Had urinary incontinence once", "Had urinary incontinence a couple of times", "There were several episodes of urinary incontinence", "Became completely incontinent of urine", "Urinary incontinence was due to disease of urinary system"]
Bowel = ["Bowel incontinence a couple of times", "Complete bowel incontinence"]
Weight = ["Started losing weight", "Started gaining weight", "Had less of an appetite", "Would forget to eat", "There was a change in diet eating indiscriminately", "There was a change in sweet tooth"]
Thoughts = ["Started experiencing unusual delusional thoughts", "Started experiencing thoughts of people stealing", "Started experiencing thoughts excessive fear", "Started experiencing thoughts that people were being followed"]
Hallucinations = ["Started having visual hallucinations", "Auditory hallucinations", "Started experiencing visual alterations"]
Senses = ["Had a change in sense of smell", "Sense of taste had changed"]
SymptomProg = ["Symptoms vacillated", "Symptoms progressed insidiously", "Symptoms have not progressed"]

Comorbidities = ["Diabetes", "High Cholesterol", "High Blood Pressure", "Traumatic Brain Injury (TBI)", "Depression", "Anxiety", "Heart Disease"];

Education = ["None", "Elementary", "Middle School (6 - 8)", "High School (9 - 12)", "Speciality (2 year)", "College (4 years)", "Graduate School", "Doctoral (MD/JD/PhD)"];
Race = ["White", "Black or African American", "American Indian or Native American", "Asian", "Native Hawaiian or Pacific Islander", "Hispanic or Latin"];

const arrays = {
    LivingSituation,
    Symptoms,
    How,
    HomeAndThoughts,
    Driving,
    Inappropriate,
    Personality,
    Work,
    Lost,
    Language,
    Difficulty,
    Forgot,
    Withdrawal,
    Posture,
    Axatia,
    Urine,
    Bowel,
    Weight,
    Thoughts,
    Hallucinations,
    Senses,
    SymptomProg,
};

const dropdownDiag = document.getElementById("diagnosis");
const dropdownComor = document.getElementById("comorbidities");
const dropdownSex = document.getElementById("sex");
const dropdownEducation = document.getElementById("education");
const dropdownRace = document.getElementById("race");

Diagnosis.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    dropdownDiag.appendChild(optionElement);
});
Comorbidities.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    dropdownComor.appendChild(optionElement);
});
Education.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    dropdownEducation.appendChild(optionElement);
});
Race.forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    dropdownRace.appendChild(optionElement);
});


Object.keys(arrays).forEach(key => {

    const dropdownOnset = document.getElementById("onset" + key);
    const dropdownCurrent = document.getElementById("current" + key);

    arrays[key].forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        dropdownOnset.appendChild(optionElement);
    });

    arrays[key].forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        dropdownCurrent.appendChild(optionElement);
    });
});

function generateRandomSelections() {
    const dropdownNodesMult = document.querySelectorAll("select[multiple]");
    const dropdownNodesReg = document.querySelectorAll("select:not([multiple])");

    const dropdownsMult = [].slice.call(dropdownNodesMult); 
    const dropdownsReg = [].slice.call(dropdownNodesReg, 1); 

    const age = Math.floor(Math.random() * 50) + 45;
    document.getElementById("age").value = age;

    dropdownsReg.forEach(dropdown => {
        const options = dropdown.options;
        const randomIndex = Math.floor(Math.random() * options.length);

        for (let i = 0; i < options.length; i++) {
            options[i].selected = false;
        }

        options[randomIndex].selected = true;
    });

    dropdownsMult.forEach(dropdown => {
        const options = dropdown.options;
        const randomCount = Math.floor(Math.random() * options.length);

        for (let i = 0; i < options.length; i++) {
            options[i].selected = false;
        }

        for (let i = 0; i < randomCount; i++) {
            const randomIndex = Math.floor(Math.random() * options.length);
            options[randomIndex].selected = true;
        }
    });

    const checkboxes = document.querySelectorAll('.form-check-input');

      checkboxes.forEach(function(checkbox) {
        const randomValue = Math.random() >= 0.5;

        checkbox.checked = randomValue;
      });
}

