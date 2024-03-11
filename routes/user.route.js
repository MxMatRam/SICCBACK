const express = require("express");
const router = express.Router();

const {
    createUser,
    deleteUser,
    updateUser
} = require ("../controller/users.controller");

Router.route("/").post(createUser);
Router.route("/:_id").put(updateUser);
Router.route("/").delete(deleteUser);