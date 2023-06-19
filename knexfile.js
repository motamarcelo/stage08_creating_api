const path = require("path");


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: oath.resolve(_dirname, "src", "database", "database.db")
    },
    useNullAsDefault: true,
  }
};
