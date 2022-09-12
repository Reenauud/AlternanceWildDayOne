/* Importation de la classe EntitySchema à partir du package typeorm. */
const EntitySchema = require("typeorm").EntitySchema;
/* Définition de la classe Wilders. */
/*exportation du schéma de la table. */

module.exports = new EntitySchema({
  name: "Wilders",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
    },
  },
});
