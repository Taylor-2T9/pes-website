const types = {
    table: {
        label: 'Tabela Geral',
        getDescription: (name: string) => `Essa é a tabela que contém os dados gerais dos ${name?.toLowerCase()}`,
    },
    top3: {
        label: 'Os Maiores Campeões',
        getDescription: (name: string) => `Esses três ${name?.toLowerCase()} são os maiores campeões`,
    },
}

export default types