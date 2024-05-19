const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

  // type Mutation {
  //   addUser(): Auth
  //   login(): Auth
  //   saveBook(): 
  //   deleteBook():
  // }

module.exports = typeDefs