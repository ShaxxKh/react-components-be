const { Client } = require("pg");

const client = new Client({
	// connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
	host: "ec2-54-228-99-58.eu-west-1.compute.amazonaws.com",
	database: "du6n63s3gg9u5",
	user: "cnooxgjvstjmmn",
	port: 5432,
	password: "3f7fcef0225d6fbb8f6e0bf9f835b79f775a8eecb6f091e489d474914fa9a1ec",
});

// const pool = new Pool({
// 	user: "postgres",
// 	password: "postgres",
// 	host: "localhost",
// 	port: 5432,
// 	database: "restapi",
// });

module.exports = client;
