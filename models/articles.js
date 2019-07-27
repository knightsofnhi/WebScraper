var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ArticlesSchema = new Schema({
    name: {
        type: STRING,
    },
    body: {
        type: STRING,
        required: true
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.export = Article;