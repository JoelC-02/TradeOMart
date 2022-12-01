import { pool } from '../models/pool';
import {
  insertProducts,
  dropProductsTable,
  createProductsTable,
  insertSales,
  dropSalesTable,
  createSalesTable,
  insertRewards,
  createRewardsTable,
  dropRewardsTable
} from './queries';

export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;
  arr.forEach(async (q, index) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropProductsTable ]);
export const createTables = () => executeQueryArray([ createProductsTable ]);
export const insertIntoTables = () => executeQueryArray([ insertProducts ]);
export const dropTables2 = () => executeQueryArray([ dropSalesTable ]);
export const createTables2 = () => executeQueryArray([ createSalesTable ]);
export const insertIntoTables2 = () => executeQueryArray([ insertSales ]);
export const dropTables3 = () => executeQueryArray([ dropRewardsTable ]);
export const createTables3 = () => executeQueryArray([ createRewardsTable ]);
export const insertIntoTables3 = () => executeQueryArray([ insertRewards ]);