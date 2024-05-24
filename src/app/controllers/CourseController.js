
const Course = require('../models/Course')
const {mongooseToObject}= require('../../util/mongoose')

class CourseController{
    // [GET] / courses/ slug
    show(req, res, next) {       
        Course.findOne({slug: req.params.slug}) 
        .then(course => {
             res.render('courses/show', { 
                course: mongooseToObject(course)
            })
        })
        .catch (next)       
    }
    // [GET] / courses / create
    // create(req, res, next) {       
             
    // }
    // async index(req, res) {
    //     try {
    //         const data = await Course.find({});
    //         res.json(data);
    //     }  catch (err) {
    //         res.status(400).json({error:'ERROR!!!'});
    //     }


    // [GET] /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new CourseController()