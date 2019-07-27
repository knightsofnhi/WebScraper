var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var CommentsSchema = new Schema({
    title: {
        type: STRING,
        required: true
    },
    link: {
        type: STRING,
        required: true
    }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.export = Comment;