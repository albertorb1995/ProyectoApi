'use strict'

var express = require('express');

var app = express();

var api = express.Router();

// 1 - models

var userMefisto = {
    name: 'Mephisto',
    class: 'Assassin',
    description: 'Dul’Mephistos, the Lord of Hatred, is said to the be most cunning among his brethren. Even while imprisoned in a soulstone, his vile influence corrupted the Zakarum and manipulated them into breaking the seal, giving him free reign to reunite the Prime Evils and enslave humanity.'
};

var userNazeebo = {
    name: 'Nazeebo',
    class: 'Specialist',
    description: 'With cabalistic incantations and vestments of feather and bone, the witch doctor Nazeebo calls upon spirits from the Unformed Land to aid him. Few outlanders encounter a witch doctor in the flesh, without losing their own.'
};

var userNova = {
    name: 'Nova',
    class: 'Assassin',
    description: 'Nova Terra is a ghost of the Terran Dominion and one of the most powerful psionic soldiers ever known. Nova is highly focused, determined, and extremely deadly. Even Jim Raynor would dont want to be caught in her crosshairs.'
};

var userGenji = {
    name: 'Genji',
    class: 'Assassin',
    description: 'Once the carefree youngest scion of the Shimada clan, Genji was cut down by his own brother for refusing to take part in their illegal ventures. Grafted into a cyborg body by Overwatch, Genji walks his own path as one who fights for what is right.'
};

var userSylvanas = {
    name: 'Sylvanas',
    class: 'Specialist',
    description: 'Sylvanas Windrunner was not always the Dark Lady of the Forsaken. In another life, she was the Ranger-General of Silvermoon. But that was before the Death Knight Arthas slew her and her people and raised her as the first Banshee.'
};

var userValla = {
    name: 'Valla',
    class: 'Assassin',
    description: 'Valla witnessed the ferocity of hellspawn firsthand as the demons ravaged her village and left her for dead. Now, with no people to call her own, her only allegiance is to her cause: to rid Sanctuary of the demonic filth corrupting its lands.'
};

var userDiablo = {
    name: 'Diablo',
    class: 'Warrior',
    description: 'Known in the ancient tongue as Al´Diabolos, the Prime Evil of Terror, the Demon Lord Diablo seeks to claim the world of Sanctuary for the Burning Hells. His victims are innumerable, his schemes unknowable, and his gender... malleable'
};



// 2 - controller

const getNameMefisto = (req, res) => {
    res.status(200).send(userMefisto)
};

const getNameNazeebo = (req, res) => {
    res.status(200).send(userNazeebo)
};

const getNameNova = (req, res) => {
    res.status(200).send(userNova)
};

const getNameGenji = (req, res) => {
    res.status(200).send(userGenji)
};

const getNameSylvanas = (req, res) => {
    res.status(200).send(userSylvanas)
};

const getNameValla = (req, res) => {
    res.status(200).send(userValla)
};

const getNameDiablo = (req, res) => {
    res.status(200).send(userDiablo)
};

// 3 - routes

api.get('/nazeebo', getNameNazeebo);
api.get('/nova', getNameNova);
api.get('/genji', getNameGenji);
api.get('/sylvanas', getNameSylvanas);
api.get('/valla', getNameValla);
api.get('/diablo', getNameDiablo);
api.get('/mefisto', getNameMefisto);


//base route

app.use('/api', api);

const port = 40000;

app.listen(port, () => {
    console.log('listening on http://localhost:' + port);
});