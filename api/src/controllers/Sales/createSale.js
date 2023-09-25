const prisma = require("../../db");


async function createSale(token, idproduct, quantity)
{   
    const email = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    let iduser = await prisma.user.findFirst({
        where: {
            email
        }
    })

    iduser = iduser.id;

    const product = await prisma.product.findFirst({where: {
        id: parseInt(idproduct),
    }})

    if(!product) throw Error("No such product in the database");


    // This creates the detail and the sale it is related to at the same time
    // It also connects this detail with the product
    const detail = await prisma.detail.create({
        data: {
            quantity: parseInt(quantity),
            price: parseFloat(price),
            total: parseFloat(price) * parseInt(quantity),
            sale: {
                create: {
                    iduser: parseInt(iduser),
                }
            },
            product: {
                connect: {
                    id: product.id,
                },
            }
        }
        
    })



    return detail;
}

module.exports = createSale;