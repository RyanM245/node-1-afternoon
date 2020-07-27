const products = require('../products.json')


const getProducts = (req , res)=> {
    if(req.query.price){
        const pricedItem = products.filter(el=>el.price >= parseInt(req.query.price))
        return res.status(200).send(pricedItem)
    }
    res.status(200).send(products)
}

module.exports = getProducts
