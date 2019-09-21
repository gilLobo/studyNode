const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
});
//Adicionando plugin para paginação
MovieSchema.plugin(mongoosePaginate);

mongoose.model('Movie', MovieSchema);