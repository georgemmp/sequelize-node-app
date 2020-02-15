const { Op } = require("sequelize");

const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //encontrar todos os usuários que possuem email com final @mail.com
    //desses usuarios, encontrar os que moram na rua Guilherme Balboa
    //e buscar as tecnologias dos mesmos.

    const user = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%@mail.com"
        }
      },
      include: [
        { association: "techs" }, //techs
        { association: "addresses", where: { street: "Rua Guilherme Balboa" } } //addresses
      ]
    });

    return res.json(user);
  }
};
