```javascript
// Correct use of $inc operator in MongoDB update query
db.collection.updateOne({ _id: 1 }, { $inc: { count: 1 } });
```