import Driver from '../models/drivers';

export default {
  test : (req, res) => {
    res.send('api works.')
  },
  index: (req, res, next) => {
    const { lng, lat } = req.query;

    Driver.geoNear(
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: 200000 }
    )
    .then(drivers => res.send(drivers))
    .catch(next)
  },
  create : (req, res, next) => {
    const driver = req.body;
    Driver.create(driver)
      .then(driver => res.send(driver))
      .catch(next);
  },
  update: (req, res, next) => {
    const driverId = req.params.id;
    const driver = req.body;
    Driver.findByIdAndUpdate(driverId, driver)
      .then(() => Driver.findById(driverId))
      .then(driver => res.send(driver))
      .catch(next)
  },
  delete: (req, res, next) => {
    const driverId = req.params.id;
    Driver.findByIdAndRemove(driverId)
      .then(driver => res.status(204).send(driver))
      .catch(next)
  }
};