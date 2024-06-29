require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const adminRouter = require("./router/admin-router.js");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const axios = require("axios");

const app = express();
const corsOpetions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOpetions));
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/admin", adminRouter);

app.post("/api/auth/getDietRecommendation", async (req, res) => {
  try {
    const userInfo = req.body;
    const response = await axios.post(
      "http://127.0.0.1:5000/recommend",
      userInfo
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting diet recommendation");
  }
});

app.use(errorMiddleware);

const port = process.env.PORT || 6000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
