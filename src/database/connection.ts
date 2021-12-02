import sql from 'sequelize'

const sequelize = new sql.Sequelize('postgres://admin:pass@3edsw21qa:5432/comanda-virtual')

async function main() {
    try {
        await sequelize.authenticate()
        console.log('Conexão estabelecida com sucesso');
    } catch (error) {
        console.log(error);
    }
}

main()