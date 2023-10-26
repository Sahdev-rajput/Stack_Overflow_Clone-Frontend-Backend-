import express, { urlencoded } from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./routes/users.js"
import questionRoutes from "./routes/Questions.js"
import answerRoutes from "./routes/Answers.js"
import dotenv from "dotenv"
const app=express();
dotenv.config();
//Creating an express server


//Using for IP Address
// Middleware to capture the user's IP address
app.use((req, res, next) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.userIp = ipAddress;
  next();
});

app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get("/",(req,res)=>{
    res.send("This is the stack overflow clone API");
})
app.use("/user",userRoutes)
app.use("/questions",questionRoutes)
app.use("/answer",answerRoutes)

const PORT=process.env.PORT || 5000;

const DATABASE_URL=process.env.CONNECTION_URL;
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{console.log(`Server is running on the Port ${PORT}`)}))
.catch((err)=>console.log(err));


