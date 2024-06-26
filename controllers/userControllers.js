const userModel = require("../models/userModel")

const addUser = async (req, res) => {
    try {
        const requestData = req.body
        const { firstname, lastname, email, age } = requestData

        if (!requestData || !firstname || !lastname || !email) {
            return res.status(400).json({ message: "Mandatory fields are required." })
        }

        await userModel.create({
            firstname,
            lastname,
            email,
            age
        })
        return res.status(201).json({ message: "User has been added successfully." })
    } catch (error) {
        console.log("ERROR IN CREATE USER ::: ", error)
    }
}

const getAllUser = async (req, res) => {
    try {
        const responseData = await userModel.find({})

        return res.status(200).json({ message: "User List has been fetched.", data: responseData })
    } catch (error) {
        console.log("ERROR IN GET ALL USER ::: ", error)
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const responseData = await userModel.findById(userId)

        return res.status(200).json({ message: "User Data has been fetched.", data: responseData })
    } catch (error) {
        console.log("ERROR IN GET USER BY ID ::: ", error)
    }
}

const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const requestData = req.body
        const { firstname, lastname, email, age } = requestData

        if (!requestData || !firstname || !lastname || !email) {
            return res.status(400).json({ message: "Mandatory fields are required." })
        }

        await userModel.findByIdAndUpdate(userId, {
            firstname,
            lastname,
            email,
            age
        })
        return res.status(200).json({ message: "User Data has been updated." })
    } catch (error) {
        console.log("ERROR IN UPDATE USER BY ID ::: ", error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        await userModel.findByIdAndDelete(userId)

        return res.status(200).json({ message: "User List has been deleted." })
    } catch (error) {
        console.log("ERROR IN DELETE USER ::: ", error)
    }
}

module.exports = { addUser, getAllUser, getUserById, updateUserById, deleteUser }