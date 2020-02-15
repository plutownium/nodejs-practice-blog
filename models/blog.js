const getDb = require("../util/database").getDb;

class Post {
	constructor(title, content) {
		this.title = title;
		this.content = content;
	}

	save() {
		const db = getDb();
		db.collection("blogs")
			.insertOne(this)
			.then(result => console.log(result))
			.catch(err => console.log(err));
	}
}

module.exports = Post;
