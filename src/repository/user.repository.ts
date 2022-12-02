import { User } from '../database';

export interface iUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  businessId: string;
}

export const getAll = () => {
  return User.find().lean().exec();
};

export const getOne = (id: string) => {
  return User.findById(id).lean().exec();
};

export const create = (data: iUser) => {
  return User.create(data);
};

export const update = (id: string, data: iUser) => {
  return User.findByIdAndUpdate(id, data, { new: true }).lean().exec();
};

export const remove = (id: string) => {
  return User.findByIdAndDelete(id).lean().exec();
};
