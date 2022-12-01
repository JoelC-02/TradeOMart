import Model from '../models/model';

const productsModel = new Model('products');
const salesModel = new Model('sales');
const rewardsModel = new Model('rewards');

export const b_addProduct = async (req, res) => {
  const data = req.body;
  const columns = 'name, contact, email, fault, extra, date, country, dropoff, comments';
  const values = `'${data.name}', '${data.contact}', '${data.email}', '${data.fault}', '${data.extras}', '${data.release}', '${data.country}', '${data.dropoff}', '${data.comments}'`;
  console.log(values);
  try {
    const data = await productsModel.insertWithReturn(columns, values);
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(400).json({ products: err.stack });
  }
};

export const b_addReward = async (req, res) => {
  const data = req.body;
  const columns = 'name, points, email, fault, extra, date, expiry, dropoff, comments';
  const values = `'${data.name}', ${data.points}, '${data.email}', '${data.fault}', '${data.extras}', '${data.release}', '${data.expiry}', '${data.dropoff}', '${data.comments}'`;
  console.log(values);
  try {
    const data = await rewardsModel.insertWithReturn(columns, values);
    res.status(200).json({ rewards: data.rows });
  } catch (err) {
    res.status(400).json({ rewards: err.stack });
  }
};

export const buyProduct = async (req, res) => {
  const data = req.body;
  const columns = 'prodname, email, name, address, pin, phone';
  const values = `'${data.prodname}', '${data.email}', '${data.name}', '${data.address}', ${data.pin}, '${data.phone}'`;
  console.log(values);
  try {
    const data = await salesModel.insertWithReturn(columns, values);
    res.status(200).json({ sales: data.rows });
  } catch (err) {
    res.status(400).json({ sales: err.stack });
  }
};

export const getReward = async (req, res) => {
  try {
    const data = await rewardsModel.select('name, points, comments');
    res.send(data.rows);
  } catch (err) {
    res.status(400).json({ rewards: err.stack });
  }
};