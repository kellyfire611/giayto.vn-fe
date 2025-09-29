import mysql from "mysql2/promise";

export async function query({
  query,
  values = [],
}: {
  query: string;
  values?: any[];
}) {
  let connection;

  try {
    // Tạo kết nối
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Execute the query
    const [results] = await connection.execute(query, values);
    return results;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    if (connection) await connection.end();
  }
}
