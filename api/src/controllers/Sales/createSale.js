const prisma = require("../../db");

// products es un array de productos
async function createSale(iduser, productArr) {
  const idArr =  productArr.map(prod => {return {id: prod.id}});
 
  const products = await prisma.product.findMany(
    {
      where: {
        OR: idArr
      }
    }
  );

  let total = 0;

  for(let i = 0; i < products.length; i++)
  {
    total += productArr[i].quantity * parseFloat(products[i].price);
  }

 


  const detail = await prisma.detail.create({
    data: {
      total: total,
      sale: {
        create: {
          iduser: iduser,
        },
      },
      products: products.map((prod, index) => {
        return {
          id: prod.id,
          name: prod.name, 
          brand: prod.brand,
          category: prod.category,
          image: prod.image,
          price: prod.price,
          description: prod.description,
          quantity: productArr[index].quantity
        }
      })
    },
  });


  for(let i = 0; i < products.length; i++)
  {
    prisma.product.update({
      where: {
        id: products[i].id
      },
      data: {
        stock: products[i].stock -productArr[i].quantity 
      },
    })
  }

  return detail;
}

module.exports = createSale;
