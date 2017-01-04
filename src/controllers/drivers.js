import Driver from '../models/drivers';

export default {
  greeting : (req, res) => {
    res.send('Hello api.')
  },
  create : (req, res) => {
    const driver = req.body;
    Driver.create(driver)
      .then(() => {
        res.send();
      })
  }
}