import mongoose from 'mongoose';
import random from 'mongoose-simple-random';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: { type: 'String', required: true },
  preview: { type: 'String', required: true },
  content: { type: 'String', required: true },
  coverUrl: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  user: { type: 'Object', required: true },
  viewsCounter: { type: 'Number', default: 0, required: true },
  tags: [String],
  comments: [{
      cuid: { type: 'String', required: true },
      user: { type: 'Object', required: true },
      dateAdded: { type: 'Date', default: Date.now, required: true },
      body: { type: 'String', required: true }
  }],
  commentsCount: Number
});

postSchema.pre('validate', function (next) {
  this.commentsCount = this.comments.length;
  next();
});

postSchema.plugin(random);

export default mongoose.model('Post', postSchema);
