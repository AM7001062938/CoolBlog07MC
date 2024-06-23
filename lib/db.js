import mongoose from 'mongoose';
const {usernmae,password}=process.env;
export const connectionsrt="mongodb+srv://+username+:+password+@cluster0.vz1cbk7.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

export async function connect() { 
     
    }
    try {
        mongoose.connect(process.env.MONGODB_URL);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


