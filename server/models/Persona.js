// models/Persona.js
const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,   
  },
   nome: {
    type: String,
    required: true,
  },
  cognome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // in caso di validazione: match: /regex per email/
  },
  eta: {
    type: Number,
    required: true,
  },
});

// Il modello "Persona" si basa sullo schema PersonaSchema
const Persona = mongoose.model('Persona', PersonaSchema);

module.exports = Persona;
