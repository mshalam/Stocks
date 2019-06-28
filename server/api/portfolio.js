const router = require('express').Router()
const {Portfolio} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const portfolio = await Portfolio.findOne({
      where: {
        userId: req.user.id
      }
    })
    res.json(portfolio)
  } catch (err) {
    next(err)
  }
})
