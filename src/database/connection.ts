import { Sequelize } from 'sequelize'

const DB_ADDRESS = '127.0.0.1'
const DB_PORT = '5432'
const DB_USER = 'postgres'
const DB_PASS = '3edsw21qa'
const DB_NAME = 'comandavirtual'
const DB_URI =
	'postgres://' +
	DB_USER +
	':' +
	DB_PASS +
	'@' +
	DB_ADDRESS +
	':' +
	DB_PORT +
	'/' +
	DB_NAME

// const DB_URI = `postgress://${DB_USER}:${DB_PASS}@${DB_ADDRESS}:${DB_PORT}/`

const sequelize = new Sequelize(DB_URI)

async function main() {
	try {
		await sequelize.authenticate()
		console.log('Conexão estabelecida com sucesso')
	} catch (error) {
		console.log(error)
	}
}

main()
