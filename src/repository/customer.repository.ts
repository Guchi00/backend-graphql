import { Customer } from '../database';

export interface iCustomer {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  businessId: string;
}

export const getAll = () => {
  return Customer.find().lean().exec();
};

export const getOne = (id: string) => {
  return Customer.findById(id).lean().exec();
};

export const create = (data: iCustomer) => {
  return Customer.create(data);
};

export const update = (id: string, data: iCustomer) => {
  return Customer.findByIdAndUpdate(id, data, { new: true }).lean().exec();
};

export const remove = (id: string) => {
  return Customer.findByIdAndDelete(id).lean().exec();
};
