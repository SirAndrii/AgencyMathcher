import db from '../../firebaseAdmin'
import dataJson from '../../constants/quiz.json'

//an issue with internal api, it's not running while server is deployed, so duplicate function without axios
export async function getFilteredData(filter) {
    filter = JSON.parse(filter);

    const data = await db.collection('agency').get();
    let agency = data.docs.map(doc => doc.data());

    dataJson.quiz.forEach(qObj => {
        agency = filtering(agency, filter, qObj)

    });

    return agency;
}

export default async (req, res) => {
    const filter = req.query;

    console.log({req_query: filter})

    //1 we can do filter on backend part, so not extra quering needed
    // let data = await db.collection('agency').where('industry', 'array-contains',filter.industry).get();
    const data = await db.collection('agency').get();
    let agency = data.docs.map(doc => doc.data());
    //iterate each question
    dataJson.quiz.forEach(qObj => {
        agency = filtering(agency, filter, qObj)
        console.log({agency})
    });

    //if sort by active aclipp clients (subscription plan) and limit it to only 3 results

    res.status(200).send(agency); //

}


function filtering(data, filter, {multiple, key,active}) {
    // multiple=true - we expect that in database will be an array
    let filtered;
    console.log(key,filter)
if (active===false) {return data;}
    // array in DB should include all checked items from the question with [key]
    if (multiple && Array.isArray(filter[key])) {
        filtered = data.filter(item => filter[key].every(el => item[key].includes(el)))
    } else {
        //array or string includes string. it's not equal compare, so side effect can be.

        filtered = data.filter(item => {
            console.log(item[key],filter[key])
            return item[key].includes(filter[key])})
    }

    return filtered.length ? filtered : data;
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