class Product {
  constructor(name, sizes, colors, price, hasStock = true) {
    this.name = name
    this.sizes = sizes || []
    this.colors = colors || []
    this.price = price || 0
    this.hasStock = hasStock
  }
}

class ProductBuilder {
  constructor(name) {
    this.name = name
  }

  setPrice(price) {
    this.price = price
    return this
  }

  setSizes(sizes) {
    this.sizes = sizes
    return this
  }

  setColors(colors) {
    this.colors = colors
    return this
  }

  setHasStock(hasStock) {
    this.hasStock = hasStock
    return this
  }

  build() {
    return new Product(this.name, this.sizes, this.colors, this.price, this.hasStock)
  }
}

const product = new ProductBuilder('Dress')
  .setHasStock(true)
  .setSizes([
    'S',
    'M',
    'L'
  ])
  .setPrice('100TL')
  .build()

console.log('PRODUCT:', product)
