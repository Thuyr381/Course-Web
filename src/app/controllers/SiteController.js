
const Course = require('../models/Course')
const {mutipleMongooseToObject}= require('../../util/mongoose')
class SiteController{
    // [GET] / 
    index(req, res, next) {
        
        Course.find({})
            .then(courses => {
                res.render('home',{ 
                    courses: mutipleMongooseToObject(courses)
                 })
            })
            .catch(next)
        
    }
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

module.exports = new SiteController