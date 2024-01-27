import dotenv from 'dotenv'

dotenv.config()
const { PORT, USER, DATABASE, PASSWORD, SERVER } = process.env
const config =  {
    port: PORT,
    
    sql: {
        user: USER,
        database: DATABASE,
        password: PASSWORD,
        server: SERVER
    }
}

export default config