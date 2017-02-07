var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mean_project');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
	db.contactlist.find(function(err, docs){
		res.json(docs);
	})
});

app.post('/addcontact', function(req, res){
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	})
});

app.delete('/removecontact/:id', function(req, res){
	var id = req.params.id;
  	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/getcontactbyid/:id', function(req, res){
	var id = req.params.id;
	db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.put('/updatecontact', function(req, res){
	db.contactlist.findAndModify({
	    query: {_id: mongojs.ObjectId(req.body._id)},
	    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
	    new: true}, function (err, doc) {
	      res.json(doc);
	    }
	);
})

app.listen(3000);
console.log("Server running");