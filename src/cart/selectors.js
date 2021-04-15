const enrich = (item, products) => {
  const product = products.find((e) => e.name === item.name)
  const price = (parseFloat(product.price) * item.quantity).toString()
  return { ...item, price }
}

export const fullCart = (products, cart) =>
  cart.filter((item) => item.quantity > 0).map((item) => enrich(item, products))

export const total = (products, cart) =>
  fullCart(products, cart)
    .reduce((acc, item) => acc + parseFloat(item.price), 0)
    .toString()
