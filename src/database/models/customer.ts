import { model, Schema } from 'mongoose';

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  businessId: String,
});
export const Customer = model('customers', schema);
