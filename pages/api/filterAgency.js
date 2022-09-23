import db from '../../firebaseAdmin'
import dataJson from '../../constants/quiz.json'

//an issue with internal api, it's not running while server is deployed, so duplicate function without axios
export async function getFilteredData(filter) {
    filter = JSON.parse(filter);

    const data = await db.collection('agency').get();
    let agency = data.docs.map(doc => doc.data());
    //add matching field with default value 50
    agency.forEach(a => { a.match = defaultMatch; console.log(a) })

    dataJson.forEach(qObj => {
        agency = matched(agency, filter, qObj)
    });

    agency.sort((a,b) => b.match - a.match);
    agency.length = 3;

    // dataJson.forEach(qObj => {
    //     agency = filtering(agency, filter, qObj)
    //
    // });

    //agency= agency.map(a => ({name: a.name, match: a.match}))
    return agency;
}

//////
const defaultMatch = 50;
const step = Math.round((100 - defaultMatch) / dataJson.filter(e=> e.active!==false ).length);

export default async (req, res) => {
    const filter = req.query;

   // console.log({req_query: filter})

    //1 we can do filter on backend part, so not extra quering needed
    // let data = await db.collection('agency').where('industry', 'array-contains',filter.industry).get();
    const data = await db.collection('agency').get();
    let agency = data.docs.map(doc => doc.data());



    //iterate each question
    dataJson.forEach(qObj => {
        agency = filtering(agency, filter, qObj)

    });

    //if sort by active aclipp clients (subscription plan) and limit it to only 3 results

    res.status(200).send(agency); //

}

function filtering(agency, filter, {multiple, key, active}) {
    // multiple=true - we expect that in database will be an array

    let filtered = [];

  //  console.log(key, filter)
    if (active === false) {
        return agency;
    }
    // array in DB should include all checked items from the question with [key]
    if (multiple && Array.isArray(filter[key])) {
        filtered = agency.filter(item => filter[key].every(el => item[key].includes(el)))
    } else {
        //array or string includes string. it's not equal compare, so side effect can be.

        filtered = agency.filter(item => {
           //console.log(item[key], filter[key])
            return item[key].includes(filter[key])
        })
    }

    return filtered.length ? filtered : agency;
}

function matched (agency, filter, {multiple, key,active}){

    if (active === false) {
        return agency;
    }
// algorythm with sorting add match if

if (multiple && Array.isArray(filter[key])) {
    agency.forEach( ag =>{
        const isMatched = ag[key] && filter[key].every(el =>ag[key].includes(el))

        if (isMatched) {
            ag.match += step;
        }
    } )
} else {
    //array or string includes string. it's not equal compare, so side effect can be.
   agency.forEach(ag => {

        const isMatched =  ag[key].includes(filter[key])

        if (isMatched) {
            ag.match += step;
        }
    })
}

return agency;
}

//
// {
//     "quiz": [
//     {
//         "key": "industry",
//         "title": "What industry are you in?",
//         "type": "check",
//         "multiple": true,
//         "option": {
//             "agriculture": "Agriculture",
//             "construction": "Construction",
//             "material": "Chemicals & Raw Materials",
//             "service": "Services & Crafts"
//         }
//     },
//     {
//         "key": "category",
//         "title": "Which category does your customer group belong to?",
//         "type": "check",
//         "multiple": true,
//         "option": {
//             "b2b": "B2B",
//             "b2c": "B2C"
//         }
//     },
//     {
//         "key": "popular",
//         "title": "Do you already know which services are relevant for you?",
//         "type": "check",
//         "multiple": true,
//         "option": {
//             "consulting": "strategic consulting",
//             "influencer": "influencer relations",
//             "podcast": "corporate podcast"
//         }
//     },
//     {
//         "key": "budget",
//         "title": "What is your (planned) monthly budget for PR?",
//         "type": "check",
//         "multiple": false,
//         "option": {
//             "0": "up to 1000€",
//             "1000": "up to 5000€",
//             "5000": "up to 10000€",
//             "10000": "more than 10000€"
//         }
//     },
//     {
//         "key": "region",
//         "title": "What is the geography of your target market?",
//         "type": "check",
//         "multiple": false,
//         "option": {
//             "regional": "regional",
//             "national": "national",
//             "international": "international"
//         }
//     },
//     {
//         "key": "term",
//         "title": "How active do you want your new agency to be for you?",
//         "type": "check",
//         "multiple": true,
//         "option": {
//             "short": "Supervision of a project",
//             "long": "Long-term cooperation"
//         }
//     }
// ]
// }