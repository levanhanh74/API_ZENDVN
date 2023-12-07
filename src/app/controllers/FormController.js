const Course = require('../models/Course');
const { multipleToObject, singleToObject } = require("../util/tooltoObjects");




class FormController {
    async post(req, res) {
        // try {
        //     const title = req.body.title;
        //     const img = req.file.originalname;
        //     const description = req.body.description;
        //     await new Course({
        //         title,
        //         description,
        //         img,
        //     }).save();

        //     const data = await Course.find({})
        //     res.render('form/form', { courses: multipleToObject(data) })
        // } catch (error) {
        //     res.status(400).render({ error: "Upload unsuccessfully!" });
        // }
        console.log("KQ: ", req.file.originalname);
        res.render('form/form');
    }

    async detail(req, res) {
        try {
            const reqId = req.params.id
            // console.log(reqId); // Check params on URL 
            const detail = await Course.findOne({ _id: reqId })
            const mapOne = singleToObject(detail);
            res.render('form/detailForm', { detail: mapOne });
        } catch (error) {
            res.status(400).json({ error: "Page detail can't display!!" });;
        }
    }


    //  Display form and list Course 
    async index(req, res, next) {
        // Course.find({})
        // .then(course => {
        //     const courses = multipleToObject(course);
        //     console.log("KQ", courses);
        //     res.render('form/form', { courses })
        // })
        // .catch(next); // cai nay dung validate.Here yet use.
        try {
            const data = await Course.find({})
            // console.log("KQ", multipleToObject(data), " Data don't toObject", data);
            res.render('form/form', { courses: multipleToObject(data) });
        } catch (error) {
            res.status(400).json({ error: "Can't display This Screen!!" });
        }
    }
}
module.exports = new FormController();