const prisma = require("../../db");

const getSalesByUserId = async (id) => {

    const sales = await prisma.sale.findMany({
        where: {
            iduser: id,
        }
    });

    return sales;
}

module.exports = getSalesByUserId;