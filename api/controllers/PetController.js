/**
 * PetController
 *
 * @description :: Server-side logic for managing Pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	deleteAll: function (req, res) {
    Pet.destroy()
    .exec(function (err, success) {
      if (err) {
        res.negociate(err);
      }

      if (success) {
        res.ok('Database cleaned');
      }
    });
  }
};

