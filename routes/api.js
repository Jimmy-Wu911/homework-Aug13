const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts",(req,res)=>{
    console.log('req',req.body);
    db.Workout.create(req.body)
    .then(dbWorkout =>{
        console.log('workout',dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.get("/api/workouts",(req,res)=>{
    // console.log('req',req);
    db.Workout.find({})
    .then(dbWorkout =>{
        // console.log('workout',dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(404).json(err);
    });
});

router.put("/api/workouts/:id",(req,res)=>{
    // console.log('req',req);
    db.Workout.updateOne(
        {
            _id:req.params.id,
        },
        {
            $push: {
                exercises: req.body,
            },
        }
    )
    .then(dbWorkout =>{
        // console.log('workout',dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

router.get("/api/workouts/range",(req,res) =>{
    // console.log('req',req);
    db.Workout.find({})
    .then(dbWorkout =>{
        // console.log('workout',dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.status(404).json(err);
    });
});

module.exports = router;