import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  address: String,
  size: Number,
});
export const Business = model('businesses', schema);
