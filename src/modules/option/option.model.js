const { Schema, Types, model } = require("mongoose");

const OptionSchema = new Schema({
    title: {type: String, required: true}, 
    key: {type: String, required: true}, 
    type: {type: String, enum: ["number", "string", "array", "boolean"]}, 
    enum: {type: Array, default: []}, 
    guide: {type: String, required: false}, 
    required: {type: Boolean, required: true, default: false}, 
    category: {type: Types.ObjectId, ref:"category", required: true}
}); 

const OptionModel = model("option", OptionSchema); 

module.exports = OptionModel; 