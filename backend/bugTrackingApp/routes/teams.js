let express = require('express')
const { Op } = require('sequelize')
const Student = require('../models/student')
const Project = require('../models/project')
const Team = require('../models/team')
let router = express.Router()

Team.hasMany(Student)
Team.hasMany(Project)

//Verifica daca id-ul Studentului este unul valid
const checkId = (req, res, next) => {
    if (req.params.id && isNaN(req.params.id)) {
        res.status(400).json({ "error": "wrong input for id!" })
    } else {
        next();
    }
}

//Metoda GET <=> Afiseaza echipa cu id-ul dat - MERGE
router.route('/getTeam/:id').get(checkId, async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ error: `Team with id ${req.params.id} not found!` })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Metoda GET <=> Afiseaza toate Echipele - MERGE
router.route('/getTeams').get(async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda GET <=> Afiseaza toti membrii unei echipe selectate dupa id
router.route('/getTeam/:id/members').get(checkId, async (req, res) => {
    try {
        const team = await Team.findByPk(req.params.id);
        if (team) {
            const members = Student.findAll({
                where: {
                    TeamId: req.params.id
                }
            })
            if((await members).length > 0){
                res.status(200).json(members);
            }else{
                res.status(404).json({ error: `Team with id ${req.params.id} does not have any members!` })
            }
        } else {
            res.status(404).json({ error: `Team with id ${req.params.id} not found!` })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Metoda POST <=> Se adauga o Echipa noua - MERGE
router.route('/addTeam').post(async (req, res) => {
    try {
        const newTeam = await Team.create(req.body)
        res.status(200).json(newTeam)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Adauga mai multe echipe in acelasi timp - MERGE
router.route('/addTeams').post(async (req, res) => {
    try {
        const newTeams = await Team.bulkCreate(req.body);
        res.status(200).json(newTeams);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterge Echipa cu id-ul dat in req.params.id - MERGE
router.route('/deleteTeam/:id').delete((req, res) => {
    try {
        Team.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((rows) => {
                if (rows === 1) {
                    res.status(200).json({ status: `Team with id ${req.params.id} deleted!` })
                } else {
                    res.status(202).json({ status: `Team with id ${req.params.id} does not exists!` })
                }
            })
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterg toate Echipele - MERGE
//Obs: TeamId din Students devine NULL peste tot
router.route('/deleteTeams').delete(async (req, res) => {
    try {
        const teams = await Team.findAll();
        console.log(teams.length);
        if (teams.length > 0) {
            Team.destroy({
                where: {
                    //aici pot adauga conditii => nu o sa sterga tot => o sa intre pe Bugs were not deleted!
                }
            })
                .then((rows) => {
                    console.log(rows)
                    if (teams.length === rows) {
                        res.status(200).json({ status: `Teams were deleted!` })
                    } else {
                        res.status(202).json({ status: `Teams were not deleted!` })
                    }
                })
        } else {
            res.status(202).json({ status: `There already are no teams!` })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;