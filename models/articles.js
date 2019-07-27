var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    title: {
        type: STRING,
        required: true
    },
    link: {
        type: STRING,
        required: true
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

var Article = mongoose.model("Article", ArticlesSchema);

module.export = Article;