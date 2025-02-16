const mongoose=require('mongoose');

const lessonsSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    contentUrl:{
        type:String,
        required:true
    },
    duration:{
        type: Number,
        min: 0
    }
});



const courseSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    instructorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true,
        min: 0
    },
    lessons:[lessonsSchema]
});


const progessSchema=new mongoose.Schema({
    lessonId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lesson',
        required: true
    },
    status:{
        type:String,
        enum:['Not Started','In Progress','Completed'],
        required: true
    },
    completedAt:{
        type:Date,
        default:null
    }
});
const enrollementSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    },
    enrolledAt:{
        type:Date,
        default:Date.now
    },
    progress:[progessSchema]

});


const Course=mongoose.model("Course",courseSchema);
module.exports=Course;

const Enrollment=mongoose.model("Enrollment",enrollementSchema);
module.exports=Enrollment;
