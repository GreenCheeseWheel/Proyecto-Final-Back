const prisma = require("../../db");

const addRating = async (id, userId, newRating) => {
    
    // SI EL PRODUCTO O EL USUARIO NO EXISTEN LANZA ERROR
    await prisma.rating.upsert({
        where: {
            productId: id,
            userId,
        },
        update: {
            rating: newRating
        },
        create: {
            rating: newRating,
            userId,
            productId: id
        }
    });


    const updatedProduct = await prisma.product.findFirst({
        where: {
            id,
        },
        include: {
            ratings
        }
    });

    let currRating = 0;

    let rating_arr = updatedProduct.ratings;

    for(const rtng of rating_arr)
    {
        currRating += rtng.rating;
    }

    currRating /= rating_arr.length;


    return {...updatedProduct, rating: currRating};
}

module.exports = addRating;