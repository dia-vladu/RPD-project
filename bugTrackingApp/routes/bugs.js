let express = require('express')
const { Op } = require('sequelize')
const Student = require('../models/student')
const Bug = require("../models/bug")
let router = express.Router()

//Verifica daca id-ul Bug-ului este unul valid
const checkId = (req, res, next) => {
    if (req.params.id && isNaN(req.params.id)) {
        res.status(400).json({ "error": "wrong input for id" })
    } else {
        next();
    }
}

//Metoda GET <=> Afiseaza Bug-ul cu id-ul dat - MERGE
router.route('/getBug/:id').get(checkId, async (req, res) => {
    try {
        const bug = await Bug.findByPk(req.params.id);
        if (bug) {
            res.status(200).json(bug);
        } else {
            res.status(404).json({ error: `Bug with id ${req.params.id} not found!` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//Metoda GET <=> Afiseaza totate Bug-urile - MERGE
router.route('/getBugs').get(async (req, res) => {
    try {
        const bugs = await Bug.findAll();
        res.status(200).json(bugs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Adauga mai multe buguri in acelasi timp - MERGE
//By default bulkCreate nu vafe verificari => adaugam {validate: true} ca sa ne faca verificarile
router.route('/addBugs').post(async (req, res) => {
    try {
        console.log(req.body);
        const newBugs = await Bug.bulkCreate(req.body, {validate: true});
        res.status(200).json(newBugs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda GET <=> Afiseaza toate bug-urile rezolvate/nerezolvate/in progres (depinde de ce dam in req.params.status) - MERGE
//Verifica: Daca req.params.status e valid
//          Daca exista bugs cu statusul ala
router.route('/getBugs/:status').get(async (req, res) => {
    try {
        const bugs = await Bug.findAll({
            where: {
                status: req.params.status
            }
        })
        if (bugs.length > 0) {
            res.status(200).json(bugs);
        } else {
            if (req.params.status == 'Rezolvat' || req.params.status == 'Nerezolvat' || req.params.status == 'InProgres') {
                res.status(404).json({ error: `There are no bugs with status '${req.params.status}'` })
            } else {
                res.status(405).json({ error: `Status '${req.params.status}' is not valid!` })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Se adauga un bug nou - MERGE
//In cazul in care este atribuit unui Student => atribuirea(respectiv adaugarea bug) este posibila doar daca Studentul este MP(se verifica valoarea atributului "tip_user")
router.route('/addBug').post(async (req, res) => {
    try {
        const { id_MP } = req.body;
        if (id_MP) {
            const student = await Student.findByPk(id_MP)
            if (student) {
                if (student.getDataValue("tip_user") == "MP") {
                    const newBug = await Bug.create(req.body)
                    res.status(200).json(newBug)
                } else {
                    res.status(405).json({ error: `Student with id ${id_MP} can't be assigned bugs for solving cuz is a TST not a MP!` })
                }
            } else {
                res.status(404).json({ error: `Student with id ${id_MP} not found!` })
            }
        } else {
            const newBug = await Bug.create(req.body)
            res.status(200).json(newBug)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda GET <=> Se afiseaza toate Bug-urile atribuite unui student (MP) - MERGE
//Daca studentul exista => daca e MP si nu are bugs asociate 
//                      => daca e TST 
//Daca studentul nu exista
router.route('/getAssignedBugs/:studentId').get(async (req, res) => {
    try {
        const bugs = await Bug.findAll({
            where: {
                id_MP: req.params.studentId
            }
        })
        if (bugs.length > 0) {
            res.status(200).json(bugs)
        } else {
            const student = await Student.findByPk(req.params.studentId, {
                attributes: ['tip_user']
            })
            console.log(student)
            if (student) {
                if (student.getDataValue('tip_user') == 'MP') {
                    res.status(405).json({ error: `Student with id ${req.params.studentId} doesn't have any bugs assinged!` })
                } else {
                    res.status(405).json({ error: `Student with id ${req.params.studentId} is a TST not a MP!` })
                }
            } else {
                res.status(404).json({ error: `Student with id ${req.params.studentId} does not exist!` })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda PUT <=> Se modifica prioritatea/status/orice este scris in req.body - MERGE
router.route('/modifyBug/:id').put(async (req, res) => {
    try {
        const bug = await Bug.findByPk(req.params.id);
        if (bug) {
            const updatedBug = await bug.update(req.body);
            res.status(200).json(updatedBug);
        } else {
            res.status(404).json({ error: `Bug with id ${req.params.id} not found!` })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//Metoda DELETE <=> Se sterge un Bug - MERGE
router.route('/deleteBug/:id').delete((req, res) => {
    try {
        Bug.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((rows) => {
                if (rows === 1) {
                    res.status(200).json({ status: `Bug with id ${req.params.id} deleted!` })
                } else {
                    res.status(202).json({ status: `Bug with id ${req.params.id} does not exists!` })
                }
            })
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterg toate Bug-urile - MERGE
router.route('/deleteBugs').delete(async (req, res) => {
    try {
        const bugs = await Bug.findAll();
        console.log(bugs.length);
        if (bugs.length > 0) {
            Bug.destroy({
                where: {
                    //aici pot adauga conditii => nu o sa sterga tot => o sa intre pe Bugs were not deleted!
                }
            })
                .then((rows) => {
                    console.log(rows)
                    if (bugs.length === rows) {
                        res.status(200).json({ status: `Bugs were deleted!` })
                    } else {
                        res.status(202).json({ status: `Bugs were not deleted!` })
                    }
                })
        } else {
            res.status(202).json({ status: `There already are no bugs!` })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;