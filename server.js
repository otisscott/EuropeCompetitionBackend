const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const csv = require("fast-csv");
const ObjectID = mongodb.ObjectID;

const USERS = 'users';
const CHALLENGES = 'challenges';
const OTIS = 'otis';
const MAXB = 'maxb';
const MAXJ = 'maxj';
const OLIVER = 'oliver';
const NICK = 'nick';
const SPENCER = 'spencer';
const app = express();
app.use(bodyParser.json());

let db;

const connectString = "mongodb://otisscott:degeneracyinaction@ds135760.mlab.com:35760/heroku_db6bmwhs";

mongodb.MongoClient.connect(connectString, (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  db = database;
  console.log("Database connection ready");
  // Initialize the app.
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/users", (req, res, next) => {
  db.collection(USERS).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/users/:name", (req, res, next) => {
  db.collection(USERS).findOne({ name: req.params.name}, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to get user");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.get("/api/challenges", (req, res, next) => {
  db.collection(CHALLENGES).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get challenges.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.put("/api/users/:name", (req, res, next) => {
  const updateDoc = req.body;
  delete updateDoc._id;

  db.collection(USERS).updateOne({name: req.params.name}, updateDoc, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to update user");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.put("/api/challenges/:id", (req, res, next) => {
  const updateDoc = req.body;
  delete updateDoc._id;

  db.collection(CHALLENGES).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to update teacher");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});


app.get("/api/otis", (req, res, next) => {
  db.collection(OTIS).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});


app.get("/api/maxb", (req, res, next) => {
  db.collection(MAXB).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/maxj", (req, res, next) => {
  db.collection(MAXJ).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});


app.get("/api/oliver", (req, res, next) => {
  db.collection(OLIVER).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});


app.get("/api/nick", (req, res, next) => {
  db.collection(NICK).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});


app.get("/api/spencer", (req, res, next) => {
  db.collection(SPENCER).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/otis", (req, res, next) => {
  db.collection(OTIS).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/maxb", (req, res, next) => {
  db.collection(MAXB).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/maxj", (req, res, next) => {
  db.collection(MAXJ).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/nick", (req, res, next) => {
  db.collection(NICK).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/oliver", (req, res, next) => {
  db.collection(OLIVER).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/api/spencer", (req, res, next) => {
  db.collection(SPENCER).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, "Failed to get roasts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/challenges", (req, res, next) => {
  csv
    .fromPath("my.csv")
    .on("data", function(data){
      sub = data[3].split(", ")
      for(let i = 0; i < sub.length; i++) {
        db.collection(CHALLENGES).insertOne({first: data[2], last: data[1], subject: sub[i]}, (err, doc) => {
          if (err) {
            handleError(res, err.message, "Something went wrong");
          } else {
            res.status(201);
          }
        })
      }
    })
    .on("end", function(){
      console.log("done");
    });
});

/* app.post("/api/teachers", (req, res, next) => {
  const newTeacher = req.body;
  newTeacher.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(TEACHERS_COLLECTION).insertOne(newTeacher, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new teacher.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
*/
