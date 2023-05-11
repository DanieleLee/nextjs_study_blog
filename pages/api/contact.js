import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method == 'POST'){
        const { email, name, message} = req.body;
        const newMessage = {
            email,
            name,
            message
        };

        let client;
        const connectString = `mongodb+srv://Cluster0User:${process.env.mongodb_usrpwd}@${process.env.mongodb_clusternm}.gf8upo1.mongodb.net/${process.env.mongodb_dbnm}?retryWrites=true&w=majority`;

        try{
            client = await MongoClient.connect(connectString);
        }catch(error){
            res.status(500).json({message: 'Could not connet DB'})
        }
        
        const db = client.db();
        
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing msg failed'});
            return;
        }

        client.close();
        res.status(201).json({message: 'Successfull : ', message: newMessage});

    }
}

export default handler