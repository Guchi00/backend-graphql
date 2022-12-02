import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  businessId: String,
});
export const User = model('users', userSchema);

