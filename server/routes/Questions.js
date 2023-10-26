import express from "express"
import auth from "../middlewares/auth.js";
import {AskQuestion,voteQuestion,getAllQuestions,deleteQuestion} from "../controllers/Questions.js"
const router=express.Router();
router.post("/Ask",auth,AskQuestion);
router.get("/get",getAllQuestions);
router.delete("/delete/:id",deleteQuestion);
router.patch('/vote/:id',voteQuestion)
export default router;