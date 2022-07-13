import express from "express";
import postCtrl from "../controllers/postCtrl.js";

const router = express.Router();

router.route("/posts").post(postCtrl.createPost).get(postCtrl.getPosts);

export default router;
