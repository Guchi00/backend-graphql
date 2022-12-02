import { Business } from '../database';

export interface iBusiness {
  name: string;
  address: string;
  size: number;
}

export const getAll = () => {
  return Business.find().lean().exec();
};

export const getOne = (id: string) => {
  return Business.findById(id).lean().exec();
};

export const create = (data: iBusiness) => {
  return Business.create(data);
};

export const update = (id: string, data: iBusiness) => {
  return Business.findByIdAndUpdate(id, data, { new: true }).lean().exec();
};

export const remove = (id: string) => {
  return Business.findByIdAndDelete(id).lean().exec();
};
