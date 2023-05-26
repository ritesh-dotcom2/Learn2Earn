import { Course } from "./models/Course.js";
import { Stats } from "./models/Stats.js";

console.log("Testing..")
const stats = await Stats.find({}).sort({ createdAt: "desc" }).limit(1);
console.log("stats : "+stats);
const courses = await Course.find({});
console.log("Course : "+courses[0]);