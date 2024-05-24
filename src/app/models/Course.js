const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Course = new Schema ({
    name:           {type: String, required: true},
    description:    {type: String},
    image:          {type: String},
    // slug:           {type: String, slug: 'name', unique: true},
    // price:          {type: Number},
    // teacher:        {type: String},
    // hourse:         {type: Number},
    // quantity_video: {type: Number},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);