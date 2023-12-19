module.exports = {
  makeGetSqlParams: ({ sql, object, params = [] }) => {
    let finalSql = sql;

    for (const key in object) {
      const value = object[key];
      if (!value) continue;

      if (key === "date") {
        finalSql += ` AND instr(${key}, ?) > 0`;
        params.push(value.slice(0, 10));
      } else if (key === "amount") {
        finalSql += ` AND ${key} = ?`;
        params.push(value);
      } else if (key === "title") {
        finalSql += ` AND instr(${key}, ?) > 0`;
        params.push(value);
      }
    }

    finalSql += " ORDER BY date DESC";

    return {
      sql: finalSql,
      params,
    };
  },
  makePutSqlParams: ({ sql, object, params = [], id }) => {
    let finalSql = sql;

    const fieldsToUpdate = [];
    for (const key in object) {
      const value = object[key];
      if (!value) continue;

      fieldsToUpdate.push(` ${key} = ?`);
      params.push(value);
    }

    finalSql += `${fieldsToUpdate.join(", ")} WHERE id = ${id}`;

    return {
      sql: finalSql,
      params,
    };
  },
};
