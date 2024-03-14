const getAllMissions = async (request, response) => {
    
    try {const

        res.status(200).send("Now Presenting all the Missions");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const getMission = async (request, response) => {
    try {

        res.status(200).send("Here is one Mission");
    } catch (e) {
        res.status(400).send(e.message);
    }
};


const createMission = async (request, response) => {
    try {

        res.status(200).send("Successfully Updated the Mission");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const updateMission = async (request, response) => {
    try {

        res.status(200).send("Successfully Created a Mission");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

const deleteMission = async (request, response) => {
    try {

        res.status(200).send("Abracadabra the Mission is Gone");
    } catch (e) {
        res.status(400).send(e.message);
    }
};

module.exports = { 
    getAllMissions,
    getMission,
    createMission,
    updateMission,
    deleteMission,
};