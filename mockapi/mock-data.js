module.exports = () => {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    posts: _.times(50, (numer)=> {
      return {
        id: numer,
        name: faker.name.findName(),
        comment: faker.git.commitMessage()
      }
    })
  }
}
