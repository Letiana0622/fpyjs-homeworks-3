
class Good {
  constructor (id, name, description, sizes, price, available){
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = available;
  }
  setAvailable(value) {this.available = value;}
}

arrayGoods = [];
arrayGoods.push(good1 = new Good(1,'hat','green',['L'],200,'true'))
arrayGoods.push(good2 = new Good(2,'polo','yellow',['S','M','L','XL','XXL'],300,''))
arrayGoods.push(new Good(3,'shirt','white',['S','M','L','XL'],100,'true'))
arrayGoods.push(new Good(4,'skirt','blue spotted',['XS'],100,'true'))
arrayGoods.push(new Good(5,'dress','red',['S','M','L','XL','XXL'],100,''))
console.log(arrayGoods)

class GoodsList {
  #goods;

  constructor (filter, sortPrice, sortDir) {
    this.#goods = [];
    this.#goods = arrayGoods;
    this.filter = filter;
    this.sortPrice = sortPrice;
    this.sortDir = sortDir;}

    get goods() {
      return this.#goods;
    }
}

let GoodsList1 = new GoodsList('/<regexp>/<flags>','true', 'true')
let GoodsList2 = new GoodsList('/<regexp>/<flags>','true', 'false')

//console.log(good1,good2,good3,good4,good5)
console.log(GoodsList1, GoodsList2)
console.log(GoodsList.goods)
//node fpyjs-homeworks-3-1.js


