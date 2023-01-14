let express = require('express')
const { Op } = require('sequelize')
const Bug = require('../models/bug')
const Project = require('../models/project')
let router = express.Router()

Project.hasMany(Bug)

//Verifica daca id-ul Proiectului este unul valid
const checkId = (req, res, next) => {
    if (req.params.id && isNaN(req.params.id)) {
        res.status(400).json({ "error": "wrong input for id!" })
    } else {
        next();
    }
}

//Metoda GET <=> Afiseaza proiectul cu id-ul dat - MERGE
router.route('/getProject/:id').get(checkId, async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ error: `Project with id ${req.params.id} not found!` })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Metoda GET <=> Afiseaza toate Proiectele - MERGE
router.route('/getProjects').get(async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda GET <=> Afiseaza toate bugurile unui proiect selectate dupa id
router.route('/getProject/:id/bugs').get(checkId, async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (project) {
            const bugs = await Bug.findAll({
                where: {
                    ProiectId: req.params.id
                }
            })
            if(bugs.length > 0){
                res.status(200).json(bugs);
            }else{
                res.status(404).json({ error: `Project with id ${req.params.id} does not have any bugs!` })
            }
        } else {
            res.status(404).json({ error: `Project with id ${req.params.id} not found!` })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Metoda POST <=> Se adauga un Proiect nou 
router.route('/addProject').post(async (req, res) => {
    try {
        const newProject = await Project.create(req.body)
        res.status(200).json(newProject)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Adauga mai multe proiecte in acelasi timp
router.route('/addProjects').post(async (req, res) => {
    try {
        const newProjects = await Project.bulkCreate(req.body, {validate: true});
        res.status(200).json(newProjects);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterge Proiectul cu id-ul dat in req.params.id
router.route('/deleteProject/:id').delete((req, res) => {
    try {
        Project.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((rows) => {
                if (rows === 1) {
                    res.status(200).json({ status: `Project with id ${req.params.id} deleted!` })
                } else {
                    res.status(202).json({ status: `Project with id ${req.params.id} does not exists!` })
                }
            })
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterg toate Proiectele
//Obs: ProjectId din Bugs devine NULL peste tot
router.route('/deleteProjects').delete(async (req, res) => {
    try {
        const projects = await Project.findAll();
        console.log(projects.length);
        if (projects.length > 0) {
            Project.destroy({
                where: {
                    //aici pot adauga conditii => nu o sa sterga tot => o sa intre pe Bugs were not deleted!
                }
            })
                .then((rows) => {
                    console.log(rows)
                    if (projects.length === rows) {
                        res.status(200).json({ status: `Projects were deleted!` })
                    } else {
                        res.status(202).json({ status: `Projects were not deleted!` })
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