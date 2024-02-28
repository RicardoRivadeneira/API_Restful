import { Schema } from 'mongoose';

export const PostSchema = new Schema({
  id_post: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});
