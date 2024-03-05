const express = require ('express');
const router = express.Router();

const { getAllMissions, getMission, createMission, updateMission, deleteMission } = require ('../controllers/mission');

router.route('/').post(createMission).get(getAllMissions);
router.route('/:id').get(getMission).delete(deleteMission).patch(updateMission);

module.exports = router;

