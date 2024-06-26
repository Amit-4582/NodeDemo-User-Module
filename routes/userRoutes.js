const express = require("express")
const { addUser, getAllUser, getUserById, updateUserById, deleteUser } = require("../controllers/userControllers")

const router = express.Router()

router.post("/add-user", addUser)
router.get("/users", getAllUser)
router.get("/edit-user/:id", getUserById)
router.put("/update-user/:id", updateUserById)
router.delete("/delete-user/:id", deleteUser)

module.exports = router