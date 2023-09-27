function filterByPrice(products, maxPrice)
{
    if(!maxPrice) return products;

    return products.filter(prod => prod.price <= maxPrice);
}

module.exports = filterByPrice;