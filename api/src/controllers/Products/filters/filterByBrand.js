function filterByBrand(products, brandName)
{
    if(!brandName) return products;

    return products.filter(prod => prod.brand.trim() == brandName.trim())
}

module.exports = filterByBrand;