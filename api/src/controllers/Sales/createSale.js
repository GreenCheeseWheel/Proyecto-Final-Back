const prisma = require("../../db");

// Acá cambié un parametro de la funcion
// recibo iduser en vez del emai
async function createSale(iduser, idproduct, quantity)
{
    const product = await prisma.product.findFirst({where: {
        id: idproduct,
    }})

    if(!product) throw Error("No such product in the database");


    // Aca chequeo que la cantidad comprada sea valida
    if(product.stock - quantity < 0) throw Error("Bought quantity greater than stock"); 


    const detail = await prisma.detail.create({
        data: {
            quantity: quantity,
            price: product.price,
            total: product.price * quantity,
            sale: {
                create: {
                    iduser: iduser,
                }
            },
            product: {
                connect: {
                    id: idproduct,
                },
            }
        }
        
    })

    // Actualizo el stock del producto
    await prisma.product.update({
        where: {
            id: idproduct
        },
        data: {
            stock: product.stock -quantity,
        }
    });


    return detail;
}

module.exports = createSale;