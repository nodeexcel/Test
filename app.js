const input = require('./input.json');
class FruitBasket {
    constructor() {
        this.inputData = input
    }
    getFruitCount = ( data )=>{
        return data.contents.length;
    }
    
}

class Fruit extends FruitBasket {
    Response = () => {
      let final = [];
      this.inputData.forEach((item)=> {
        let fruits = [];
        let contents = item.contents;
       
        let total_weight = 0;
        contents.forEach((fruit)=> {
            let exist = fruits.findIndex((f)=> f.type == fruit.type)
            if(exist > -1){
                fruits[exist].count ++
            }
            else {
                fruits.push({ type :fruit.type, count : 1})
            }
            total_weight = total_weight + fruit.weight;
        })
        
        final.push({
          id: item.id,
          total_weight,
          total_fruits: this.getFruitCount(item),
          fruit_count: fruits
        })
      })
        return final;
    }
}
let FruitClass = new Fruit();
console.log(FruitClass.Response());