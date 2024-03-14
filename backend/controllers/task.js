const getAllTasks = async (req, res) => {
    try {
        res.status(200).send("Now Presenting all the Tasks");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const getTask = async (req, res) => {
    try {
        res.status(200).send("Here is one Job");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const createTask = async (req, res) => {
    try {
        res.status(200).send("Successfully Updated the Task");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const updateTask = async (req, res) => {
    try {
        res.status(200).send("Successfully Created a Task");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const deleteTask = async (req, res) => {
    try {
        res.status(200).send("Abracadabra the Task is Gone");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

module.exports = { 
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};