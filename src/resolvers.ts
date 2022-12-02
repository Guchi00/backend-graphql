import { userRepository, businessRepository, customerRepository } from './repository';

const resolvers = {
  Query: {
    users: async () => await userRepository.getAll(),
    user: async (_, { id }) => await userRepository.getOne(id),
    customers: async () => await customerRepository.getAll(),
    customer: async (_, { id }) => await customerRepository.getOne(id),
    businesses: async () => await businessRepository.getAll(),
    business: async (_, { id }) => await businessRepository.getOne(id),
  },
  Mutation: {
    createUser: async (_, { input }) => await userRepository.create(input),
    updateUser: async (_, { id, input }) => await userRepository.update(id, input),
    deleteUser: async (_, { id }) => await userRepository.remove(id),

    createCustomer: async (_, { input }) => await customerRepository.create(input),
    updateCustomer: async (_, { id, input }) => await customerRepository.update(id, input),
    deleteCustomer: async (_, { id }) => await customerRepository.remove(id),

    createBusiness: async (_, { input }) => await businessRepository.create(input),
    updateBusiness: async (_, { id, input }) => await businessRepository.update(id, input),
    deleteBusiness: async (_, { id }) => await businessRepository.remove(id),
  },
};

export default resolvers;
