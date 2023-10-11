const prisma = require("../../db");

const addRating = async (id, userId, rating) => {
    const product = await prisma.product.findFirst({
        where: {
            id
        }
    });

    if(!product) throw Error("No such product in the database");

    let productRating = product.rating;
    
    if(product.users_id.includes(userId))
    {
        throw Error("Invalid operation")
        /* LOGICA PARA ACTUALIZAR EL RATING SEGUN SI EL USUARIO YA DIO PUNTUACION O NO*/
    }
    
    productRating *= product.users_id.length;
    productRating += rating;
    productRating /= (product.users_id.length + 1)

    const updatedProduct = await prisma.product.update({
        where: {
            id,
        },
        data: {
            rating: productRating,
            users_id: [...product.users_id, userId]
        }
    });

    return updatedProduct;
}

module.exports = addRating;