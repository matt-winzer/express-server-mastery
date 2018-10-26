const express = require('express');
const router = express.Router();
let cakes = require('../data/cakes.json');

router.get('/', (req, res, next) => {
  res.json({ cakes : cakes })
});

router.get('/:id',(req, res, next) => {
  const id = req.params.id
  let theCake = cakes.filter(cake => cake.id == id)
  !Number(id) ? res.json({error: {status: 400, message: "Please enter a valid ID number"}}) : res.json({cake: theCake})
})




module.exports = router;