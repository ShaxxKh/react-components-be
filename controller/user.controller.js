const { default: axios } = require("axios");
const db = require("../db");

class UserController {
	async createUser(req, res) {
		let data;
		await axios
			.get("https://randomuser.me/api/")
			.then((resp) => {
				console.log(resp.data.results[0]);
				data = resp.data.results[0];
			})
			.catch((e) => (data = e));
		const newPerson = await db.query(
			"insert into person (name, surname, country) values($1, $2, $3) returning *",
			[data.name.first, data.name.last, data.location.country]
		);
		res.set("Access-Control-Allow-Origin", "*");
		res.send(newPerson);
	}

	async getUsers(req, res) {
		let data;
		data = await db.query("select * from person");
		res.set("Access-Control-Allow-Origin", "*");
		res.send(data.rows);
	}

	async getUserByCountry(req, res) {
		const { country } = req.body;
		let data;
		data = await db.query("select * from person where country = $1", [country]);
		res.json(data.rows);
	}
}

module.exports = new UserController();
