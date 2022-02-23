//Import model
const { Venues } = require('../models');
const { Op } = require("sequelize"); //Import operator

class VenueController {
    static async findAll(req, res) {
        // Find all venues
        let venues = await Venues.findAll();
        res.status(200).json({message: "Berhasil get venues", data : venues })
        // console.log("All users:", JSON.stringify(users, null, 2));
    }
    static async findOneById(req, res) {
        // Find by id passed in req
        let venue = await Venues.findAll({
            where: {
              id: {
                [Op.eq]: req.params.id
              }
            }
          });
        res.status(200).json({message: `Berhasil get venue by id ${req.params.id}`, data : venue })
    }
    static async create(req, res) {
        // Get data from req
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone
        let venue = Venues.build({name, address, phone})
        await venue.save();
        res.status(200).json({message: "Berhasil save venue", data : venue })
    }
    static async update(req, res){
        //get id from req and update the data
        // Get data from req
        let name = req.body.name
        let address = req.body.address
        let phone = req.body.phone
        // let venue = Venues.build({name, address, phone})
        await Venues.update({
            name: name,
            address: address,
            phone: phone
        }, {
            where: {
              id: req.params.id
            }
          });
        res.status(200).json({message: `Berhasil update venue dengan id : ${req.params.id}` })
    }
    static async delete(req, res){
        await Venues.destroy({
            where: {
                id: req.params.id
            }
          });
        res.status(200).json({message: `Berhasil delete venue dengan id : ${req.params.id}` })
    }
}


module.exports = VenueController