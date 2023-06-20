const router = require("express").Router();
let Employee = require("../models/Employee");
//const Employee = require("../models/Employee");

router.route("/add").post((req,res) => {

    const First_Name = req.body.First_Name;
    const Last_Name = req.body.Last_Name;
    const Home_Address = req.body.Home_Address;
    const Email = req.body.Email;
    const Phone_Number = Number(req.body.Phone_Number);
    const Emergency_Contact_NUmber = Number(req.body.Emergency_Contact_NUmber);

    const newEmployee = new Employee({

        First_Name,
        Last_Name,
        Home_Address,
        Email,
        Phone_Number,
        Emergency_Contact_NUmber

    })

    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })

})

//http://localhost:8070/Employee

router.route("/").get((req,res) => {

    Employee.find().then((add_employee) => {
        res.json(add_employee)
    }).catch((err) => {
        console.log(err )
    })

})

//-----update details-----

router.route("/update/:id").put(async (req,res) => {
    let employeeID = req.params.id;
    const {First_Name,Last_Name,Home_Address,Email,Phone_Number,Emergency_Contact_NUmber} = req.body;

    const updateEmployee = {

        First_Name,
        Last_Name,
        Home_Address,
        Email,
        Phone_Number,
        Emergency_Contact_NUmber

    }

    const update = await Employee.findByIdAndUpdate(employeeID, updateEmployee).then(() => {

        res.status(200).send({status: "employee updated", employee : update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error", error: err.message });
    })

})

//-----delete details------

router.route("/delete/:id").delete(async (req,res) => {
    let employeeID = req.params.id;

    await Employee.findByIdAndUpdate(employeeID).then(() => {
        res.status(200).send({status : "employee deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "Error", error: err.message})
    
    })
})

//-----get details from one employee-----

router.route("/get/:id").get(async (req,res) => {
    let employeeID = req.params.id;

    const employee = await Employee.findByIdAndUpdate(employeeID).then(() => {
        res.status(200).send({status : "employee fetched", employee : employee})

    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error", error: err.message})
    })

})

module.exports = router;   