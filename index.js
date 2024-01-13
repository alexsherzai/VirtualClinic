const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const mySQLString = process.env.JAWS_DB;
const database = new Prohairesis(mySQLString);

const exp = (array) => {
    let tempStr;
    
    if(Array.isArray(array)) {

        for(let i = 0; i < array.length; i++) {
            tempStr += array[i];
            tempStr += ";"
        }

        tempStr = tempStr.slice(9);

    } else {
        tempStr = array;
    }


    return tempStr;
}

app
    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({ extended: false}))
    .use(bodyParser.json())

    .post('/api/user', async (req, res) => {
        const body = req.body;

        await database.execute(`
            INSERT INTO clinic_data (
                diagnosis, age, onsetLivingSituation, onsetSymptoms, onsetHow, onsetHomeAndThoughts, onsetDriving, onsetInappropriate, onsetPersonality, onsetWork, onsetLost, onsetLanguage, onsetDifficulty, onsetForgot, onsetWithdrawal, onsetPosture, onsetAxatia, onsetUrine, onsetBowel, onsetWeight, onsetThoughts, onsetHallucinations, onsetSenses, onsetSymptomProg, currentLivingSituation, currentSymptoms, currentHow, currentHomeAndThoughts, currentDriving, currentInappropriate, currentPersonality, currentWork, currentLost, currentLanguage, currentDifficulty, currentForgot, currentWithdrawal, currentPosture, currentAxatia, currentUrine, currentBowel, currentWeight, currentThoughts, currentHallucinations, currentSenses, currentSymptomProg, feeding, toileting, clothing, grooming, continence, bathing, walking, telephone, shopping, food_prep, housekeeping, laundry, transportation, medication, finance, sex, education, race, comorbidities
            ) VALUES (
                @diagnosis, @age, @onsetLivingSituation, @onsetSymptoms, @onsetHow, @onsetHomeAndThoughts, @onsetDriving, @onsetInappropriate, @onsetPersonality, @onsetWork, @onsetLost, @onsetLanguage, @onsetDifficulty, @onsetForgot, @onsetWithdrawal, @onsetPosture, @onsetAxatia, @onsetUrine, @onsetBowel, @onsetWeight, @onsetThoughts, @onsetHallucinations, @onsetSenses, @onsetSymptomProg, @currentLivingSituation, @currentSymptoms, @currentHow, @currentHomeAndThoughts, @currentDriving, @currentInappropriate, @currentPersonality, @currentWork, @currentLost, @currentLanguage, @currentDifficulty, @currentForgot, @currentWithdrawal, @currentPosture, @currentAxatia, @currentUrine, @currentBowel, @currentWeight, @currentThoughts, @currentHallucinations, @currentSenses, @currentSymptomProg, @feeding, @toileting, @clothing, @grooming, @continence, @bathing, @walking, @telephone, @shopping, @food_prep, @housekeeping, @laundry, @transportation, @medication, @finance, @sex, @education, @race, @comorbidities
            )
        `, {
            diagnosis: body.diagnosis,
            age: body.age,
            onsetLivingSituation: body.onsetLivingSituation,
            onsetSymptoms: body.onsetSymptoms, 
            onsetHow: exp(body.onsetHow), 
            onsetHomeAndThoughts: exp(body.onsetHomeAndThoughts), 
            onsetDriving: body.onsetDriving, 
            onsetInappropriate: body.onsetInappropriate, 
            onsetPersonality: exp(body.onsetPersonality), 
            onsetWork: exp(body.onsetWork), 
            onsetLost: body.onsetLost, 
            onsetDifficulty: exp(body.onsetDifficulty), 
            onsetLanguage: exp(body.onsetLanguage), 
            onsetForgot: exp(body.onsetForgot), 
            onsetWithdrawal: exp(body.onsetWithdrawal), 
            onsetPosture: exp(body.onsetPosture), 
            onsetAxatia: exp(body.onsetAxatia), 
            onsetUrine: body.onsetUrine, 
            onsetBowel: body.onsetBowel, 
            onsetWeight: body.onsetWeight, 
            onsetThoughts: exp(body.onsetThoughts), 
            onsetHallucinations: exp(body.onsetHallucinations), 
            onsetSenses: body.onsetSenses, 
            onsetSymptomProg: body.onsetSymptomProg, 
            currentLivingSituation: body.currentLivingSituation,
            currentSymptoms: body.currentSymptoms, 
            currentHow: exp(body.currentHow), 
            currentHomeAndThoughts: exp(body.currentHomeAndThoughts), 
            currentDriving: body.currentDriving, 
            currentInappropriate: body.currentInappropriate, 
            currentPersonality: exp(body.currentPersonality), 
            currentWork: exp(body.currentWork), 
            currentLost: body.currentLost, 
            currentDifficulty: exp(body.currentDifficulty), 
            currentLanguage: exp(body.currentLanguage), 
            currentForgot: exp(body.currentForgot), 
            currentWithdrawal: exp(body.currentWithdrawal), 
            currentPosture: exp(body.currentPosture), 
            currentAxatia: exp(body.currentAxatia), 
            currentUrine: body.currentUrine, 
            currentBowel: body.currentBowel, 
            currentWeight: body.currentWeight, 
            currentThoughts: exp(body.currentThoughts), 
            currentHallucinations: exp(body.currentHallucinations), 
            currentSenses: body.currentSenses, 
            currentSymptomProg: body.currentSymptomProg,
            feeding: body.feeding, 
            toileting: body.toileting, 
            clothing: body.clothing, 
            grooming: body.grooming, 
            continence: body.continence, 
            bathing: body.bathing, 
            walking: body.walking, 
            telephone: body.telephone, 
            shopping: body.shopping, 
            food_prep: body.food_prep, 
            housekeeping: body.housekeeping, 
            laundry: body.laundry, 
            transportation: body.transportation, 
            medication: body.medication, 
            finance: body.finance, 
            sex: body.sex, 
            education: body.education, 
            race: body.race, 
            comorbidities: exp(body.comorbidities)
        })

        res.end("Added Patient");
    })
    
    .listen(port, () => console.log(`Server listening on port ${port}`));