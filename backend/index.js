const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config(); // very import to remember

const cookieParser = require("cookie-parser"); // to use cookie-parser

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(cookieParser()); // using cookie parser

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
    // Get the database and collection on which to run the operation //DB
    const jobsCollection = client.db("jobhunterDB").collection("jobs");
    // application collection
    const applicantCollection = client
      .db("jobhunterDB")
      .collection("applications");

    // jwt (json web token) related api
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, //set true for production in http //DEPLOY **********
        })
        .send({ success: true });
    });

    // GET

    // API to get all jobs or limit the number of jobs
    app.get("/jobs", async (req, res) => {
      const limit = parseInt(req.query.limit); // Extract limit from query params
      let result;

      if (limit) {
        // If limit is provided, fetch limited number of jobs
        result = await jobsCollection.find().limit(limit).toArray();
      } else {
        // Otherwise, fetch all jobs
        result = await jobsCollection.find().toArray();
      }

      res.send(result);
    });

    // API for the jobs which is posted by that user if that user has email logged in with
    app.get("/my-posted-jobs", async (req, res) => {
      const email = req.query.email;
      const query = {
        hr_email: email,
      };
      const result = await jobsCollection.find(query).toArray();
      res.send(result);
    });

    // create API for specific job by id
    app.get("/job-details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // API for total job application data  for which that user which is logged in (by email)
    app.get("/total-application", async (req, res) => {
      const email = req.query.email;
      const query = {
        applicant_email: email,
      };
      const result = await applicantCollection.find(query).toArray();
      // not the best way to aggregate
      for (const application of result) {
        // console.log(application.job_id);
        const query1 = { _id: new ObjectId(application.job_id) };
        const job = await jobsCollection.findOne(query1);
        if (job) {
          application.title = job.title;
          application.company = job.company;
          application.location = job.location;
          application.company_logo = job.company_logo;
        }
      }

      res.send(result);
    });

    // Can't find the data of who applied for the job (ERROR)

    // API for How many people applied for the job post that the (Logged in user created )
    app.get("/total-application/jobs/:job_id", async (req, res) => {
      const jobId = req.params.job_id;
      console.log(jobId);

      const query = { job_id: jobId };
      const result = await applicantCollection.find(query).toArray();
      res.send(result);
    });

    // POST

    // create API for posting/inserting application data in DB
    app.post("/applications", async (req, res) => {
      const applications = req.body;
      const result = await applicantCollection.insertOne(applications);

      // not the best way (Optional)
      const id = applications.job_id;
      const query = { _id: new ObjectId(id) };
      const job = await jobsCollection.findOne(query);

      let newCount = 0;
      if (job.applicationCount) {
        newCount = job.applicationCount + 1;
      } else {
        newCount = 1;
      }
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          applicationCount: newCount,
        },
      };
      const updateResult = await jobsCollection.updateOne(filter, updatedDoc);

      res.send(result);
    });

    // create API for posting/inserting postJobs data in the DB
    app.post("/post-jobs", async (req, res) => {
      const newJobs = req.body;
      const result = await jobsCollection.insertOne(newJobs);
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
