const express = require('express');
const router = express.Router();

const brawlerRoutes = require('./brawlers.routes');
const mapRoutes = require('./maps.routes');
const gamemodeRoutes = require('./gamemodes.routes');
const misionRoutes = require('./misions.routes');
const seasonRoutes = require('./seasons.routes');

router.use('/brawlers', brawlerRoutes);
router.use('/maps', mapRoutes);
router.use('/gamemodes', gamemodeRoutes);
router.use('/misions', misionRoutes);
router.use('/seasons', seasonRoutes);

module.exports = router;
