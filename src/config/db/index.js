const mongoose = require('mongoose');
function connect() {
    // try {
    //     const option = {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     }
    //     await mongoose.connect("mongodb://localhost:27017/dev_course_f8", option);
    //     console.log("Connect Successfully");
    // } catch (error) {
    //     console.log("Connect Unsuccessfully");
    // }
    const option = {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
    mongoose.connect("mongodb://localhost:27017/dev_course_f8", option)  // Skip property option It not error 404.
        .then(() => {
            console.log("DB connection successfully.");
        })
        .catch((err) => {
            console.log(`DB connection error:${err}`);
        });
}
module.exports = { connect };