import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user_id: { type: 'String', required: true },
  title: { type: 'String', required: true },
  preview: { type: 'String', required: true },
  content: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  cover_url: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Post', postSchema);
