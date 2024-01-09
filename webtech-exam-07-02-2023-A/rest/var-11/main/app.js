const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sqlite:memory')

let Student = sequelize.define('student', {
    name : Sequelize.STRING,
    address : Sequelize.STRING,
    age : Sequelize.INTEGER
},{
    timestamps : false
})

sequelize.authenticate()
    .then(() => {
        console.log('Connection established');
        return sequelize.sync();
    })
    .catch(err => console.log(err))

const app = express()
app.use(express.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let student = new Student({
                name : 'name ' + i,
                address : 'some address on ' + i + 'th street',
                age : 30 + i
            })
            await student.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/students', async (req, res) => {
    try{
        let students = await Student.findAll()
        res.status(200).json(students)
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})

app.put('/students/:id', async (req, res) => {
    try{
        const body = req.body;

        if(Object.keys(body).length === 0) {
            return res.status(400).json({message: 'body is missing'})
        }

        if(!body.name || !body.address || !body.age) {
            return res.status(400).json({message: "malformed request"})
        }

        const id = req.params.id;
        const student = await Student.findByPk(id);

        if(student) {
            await student.update(body);

            return res.status(202).json({message: 'accepted'})
        } else {
            return res.status(404).json({message: 'not found'});
        }
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})

module.exports = app