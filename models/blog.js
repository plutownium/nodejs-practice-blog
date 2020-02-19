const mongodb = require("mongodb");
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
				// console.log(posts);
				return posts;
			})
			.catch(err => console.log(err)); // returns a cursor
	}

	static findById(postId) {
		const db = getDb();
		return db
			.collection("blogs")
			.find({ _id: new mongodb.ObjectId(postId) })
			.next()
			.then(post => {
				// console.log(post);
				return post;
			})
			.catch(err => console.log(err));
	}

	static deleteById(postId) {
		const db = getDb();
		return db
			.collection("blogs")
			.deleteOne({ _id: new mongodb.ObjectId(postId) })
			.then(result => console.log("Deleted!"))
			.catch(err => console.log(err));
	}

	static editById(postId, newTitle, newContent) {
		const db = getDb();
		return db
			.collection("blogs")
			.updateOne(
				{ _id: new mongodb.ObjectId(postId) },
				{ $set: { title: newTitle, content: newContent } }
			)
			.then(result => console.log("Updated!"))
			.catch(err => console.log("Err from editById:", err));
	}
}

module.exports = Post;
