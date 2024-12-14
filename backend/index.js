const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// very import to remember
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i53p4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Get the database and collection on which to run the operation
    const jobsCollection = client.db("jobhunterDB").collection("jobs");

    // creating API for all job
    app.get("/jobs", async (req, res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result);
    });

    // create API for specific job by id
    app.get("/job-details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// basic routes
app.get("/", (req, res) => {
  res.send("Job server running");
});
app.listen(port, () => {
  console.log(`Server running at :${port}`);
});
