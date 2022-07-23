import mongoose from 'mongoose';

export default class Db {

    constructor() {}

    static async setConnection(MODE, DB_ADDRESS) {

        try {
            
            const result = await mongoose.connect(DB_ADDRESS)

            return {
                isSuccess: true,
                message: 'MongoDB is running on Atlas',
                result: result
            }

        } catch(err) {

            return {
                isSuccess: true,
                message: 'MongoDB is stucked on Atlas',
                result: {
                    name: err.name,
                    message: err.message
                }
            }

        }
            
    }
}