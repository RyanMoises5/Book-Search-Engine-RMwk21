const { User } = require('../models')

const resolvers = {
  Query: {
    user: async () => {
      return User.findById()
    }
  }
}

module.exports = resolvers