const prisma = require("../../db");

// products es un array de productos
async function createSale(iduser, productArr) {
  const idArr =  productArr.map(prod => {return {id: prod.id}});
 
  const quantityArr = productArr.map(prod => prod.quantity);

  const products = await prisma.product.findMany({
    where: {
      OR: idArr
    }
  });

 

  if (!products || !products.length) {
    throw Error("Inexistent products provided");
  }    

  let total = 0;

  for(let i = 0; i < quantityArr.length; i++)
  {
    total += quantityArr[i] * products[i].price;
  }

  console.log("EL TOTAL: " + total);

  const detail = await prisma.detail.create({
    data: {
      total: total,
      sale: {
        create: {
          iduser: iduser,
        },
      },
      products: {
        connect: products,
      },
    },
    include: {
      products: true,
    }
  });


  for(let i = 0; i < products.length; i++)
  {
    prisma.product.update({
      where: {
        id: products[i].id
      },
      data: {
        stock: products[i].stock -quantityArr[i] 
      },
    })
  }

  return detail;
}

module.exports = createSale;
