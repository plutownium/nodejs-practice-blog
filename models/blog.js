const getDb = require("../util/database").getDb;

class Post {
	constructor(title, content) {
		this.title = title;
		this.content = content;
	}

	save() {
		const db = getDb();
		return db
			.collection("blogs")
			.insertOne(this)
			.then(result => console.log(result))
			.catch(err => console.log(err));
	}

	static fetchAll() {
		const db = getDb();

		return db
			.collection("blogs")
			.find()
			.toArray()
			.then(posts => {
				console.log(posts);
				return posts;
			})
			.catch(err => console.log(err)); // returns a cursor
	}
}

module.exports = Post;
