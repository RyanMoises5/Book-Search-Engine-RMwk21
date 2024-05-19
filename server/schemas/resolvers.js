const { User } = require('../models')

const resolvers = {
  Query: {
    user: async (parents, args) => {
      return User.findById(args.id)
    }
  }
}

module.exports = resolvers