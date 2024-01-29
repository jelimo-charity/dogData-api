import config from "../db/config.js"
import sql from 'mssql'

export const getDogs = async(req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request().query(`select * from dbo.DogTable`);
        // console.log(result); // Log the result, not 'error'
        !result.recordset[0] ? res.status(404).json({ message: 'users not found' }) :
            res.status(200).json(result.recordset);
    } catch (error) {
        console.log(error); // Log the error here
        res.status(201).json({ error: 'an error occurred while retrieving users' });
    } finally {
        sql.close(); // Close the SQL connection
    }
};

