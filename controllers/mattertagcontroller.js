const Mattertag = require('../models/mattertag');


const getMatterTags = (req, res, next) => {
    Mattertag.find({})
    .then((mattertags)=>{
        res.send(mattertags);
    })
    .catch(next)
};

const createMattertag = (req, res, next) => {
    const newMattertag = req.body;
    console.log(newMattertag);

    Mattertag.create(newMattertag)
    .then((tag)=>{
        res.send(tag);
    })
    .catch(next);
};

const updateMattertag = (req, res, next) => {
    const {id} = req.params.id;

    Mattertag.findByIdAndUpdate({_id: id}, req.body)
    .then(()=>{
        Mattertag.findOne({_id: id}).then((newTag)=>{
            res.send(newTag);
        });
    })
    .catch(next);
};

const deleteMattertag = (req, res, next) => {
    const id = req.parmas.id;

    Mattertag.findOneAndDelete({_id : id})
    .then((tag) => {
        res.send(tag);
    })
    .catch(next);
};

module.exports = {getMatterTags, createMattertag, updateMattertag, deleteMattertag};