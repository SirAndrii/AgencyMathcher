import db from '../../firebaseAdmin';

export default async (req, res) => {
    try {

        const snapshot = await db.collection('agency').get();

        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });

        return snapshot;
    } catch (e) {
        res.status(400).end();
    }
}

