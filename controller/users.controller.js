const createUser = async (req, res) => {
	try {
		res.status(201).send("User Successfully Created");
	} catch(e) {
		res.status(400).send(e.message);
	}
}

const deleteUser = async (req, res) => {
    try {
        res.status(201).send("User Deleted");
    } catch(e) {
        res.status(400).send(e.message);
    }
}

const updateUser = async (req, res) => {
    try {
        res.status(201).send("User Updated");
    } catch(e) {
        res.status(400).send(e.message);
    }
}

module.exports = {
    createUser,
    deleteUser,
    updateUser
}