import { st } from '../scripts/utils';

export const Generate = (values: any, table: string, url: string) => {
  let fields = '';
  let joins = '';
  const data = Object.keys(values);

  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object') {
      fields += `${key.slice(0, key.length - 1)},`;
      const j = key.split('_');
      joins += `JOIN ${j[0]} ${st(j[0])} ON ${st(table)}.id = ${st(j[0])}.id `;
    } else {
      fields += `${st(table)}.${key},`;
    }
  }

  let query = `SELECT ${fields.slice(0, fields.length - 1)} FROM ${table} ${st(table)} ${joins} `;
  if (url.includes('?')) {
    const param = url.split('=');
    query += `WHERE ${st(table)}.id=${param[1]}`;
  }
  return query;
};
