import Driver from '../models/drivers';

export default {
  test : (req, res) => {
    res.send('api works.')
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
  },
  getOne: (req, res, next) => {
    const driverId = req.params.id;
    Driver.findById(driverId)
      .then(driver => res.send(driver))
      .catch(next)
  }
};