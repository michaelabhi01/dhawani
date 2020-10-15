const jString = {};

jString.host = process.env.DB_HOST,
    jString.user = process.env.DB_USER;
jString.password = process.env.DB_PASS;
jString.database = process.env.DB_DATABASE;

exports.dbConfig = jString;