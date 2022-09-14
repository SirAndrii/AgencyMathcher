import admin from "firebase-admin";

const serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) { // this solves: Firebase admin initialization error Error: The default Firebase app already exists.
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
}

export default admin.firestore();