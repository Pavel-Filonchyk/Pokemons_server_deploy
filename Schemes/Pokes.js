import mongoose from 'mongoose'

const Pokes = new mongoose.Schema({          
    Pokes : {
        'pokes': Array, 
        'token': String
    }
})
export default mongoose.model('Pokes', Pokes)