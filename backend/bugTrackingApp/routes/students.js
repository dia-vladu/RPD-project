let express = require('express')
const { Op } = require('sequelize')
const Student = require('../models/student')
const Bug = require('../models/bug')
let router = express.Router()

Student.hasMany(Bug)

//Verifica daca id-ul Studentului este unul valid
const checkId = (req, res, next) => {
    if (req.params.id && isNaN(req.params.id)) {
        res.status(400).json({ "error": "wrong input for id" })
    } else {
        next();
    }
}

//Metoda GET <=> Afiseaza Studentul cu id-ul dat - MERGE
router.route('/getStudent/:id').get(checkId, async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: `Student with id ${req.params.id} not found!` })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//Metoda GET <=> Afiseaza toti Studentii - MERGE
router.route('/getStudents').get(async (req, res) => {
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda GET <=> Afiseaza toti studentii care sunt MP/TST (depinde de ce dam in req.params.status) - MERGE
//Se verifica daca tipul introdus in req.params.tip e valid
router.route('/getStudents/:tip').get(async (req, res) => {
    try {
        const students = await Student.findAll({
            where: {
                tip_user: req.params.tip
            }
        })
        if (students.length > 0) {
            res.status(200).json(students);
        } else {
            if (req.params.tip == 'MP' || req.params.tip == 'TST') {
                res.status(404).json({ error: `There are no students of type: '${req.params.tip}'` })
            } else {
                res.status(405).json({ error: `Type: '${req.params.tip}' is not valid!` })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Se adauga un Student nou - MERGE
router.route('/addStudent').post(async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.status(200).json(newStudent)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda POST <=> Adauga mai multi studenti in acelasi timp - MERGE
router.route('/addStudents').post(async (req, res) => {
    try {
        console.log(req.body);
        const newStudents = await Student.bulkCreate(req.body);
        res.status(200).json(newStudents);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterge un Student - MERGE
router.route('/deleteStudent/:id').delete((req, res) => {
    try {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((rows) => {
                if (rows === 1) {
                    res.status(200).json({ status: `Student with id ${req.params.id} deleted!` })
                } else {
                    res.status(202).json({ status: `Student with id ${req.params.id} does not exists!` })
                }
            })
    } catch (error) {
        res.status(500).json(error);
    }
})

//Metoda DELETE <=> Se sterg toti Studentii - MERGE
//Obs: StudentId din Bugs devine NULL peste tot
router.route('/deleteStudents').delete(async (req, res) => {
    try {
        const students = await Student.findAll();
        console.log(students.length);
        if (students.length > 0) {
            Student.destroy({
                where: {
                    //aici pot adauga conditii => nu o sa sterga tot => o sa intre pe Bugs were not deleted!
                }
            })
                .then((rows) => {
                    console.log(rows)
                    if (students.length === rows) {
                        res.status(200).json({ status: `Students were deleted!` })
                    } else {
                        res.status(202).json({ status: `Students were not deleted!` })
                    }
                })
        } else {
            res.status(202).json({ status: `There already are no students!` })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

module.exports = router;