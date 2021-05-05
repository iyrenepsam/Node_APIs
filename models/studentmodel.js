


var  mongoose = require('mongoose') ;

var studentSchema = new mongoose.Schema(
    {

        name: {type: String,required: true},
        rollnumber : {type: Number,required:true},
        admno: {type:Number, required: true},
        college: {type: String,required: true},
        email: {type:String,required:true,lowercase:true}

    }

);

var studentmodel= mongoose.model('students', studentSchema)

module.exports={studentmodel}
