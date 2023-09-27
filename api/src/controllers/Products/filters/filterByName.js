function filterByName(products, name)
{
    return products.filter(product => product.name == name);
}

module.exports = filterByName;