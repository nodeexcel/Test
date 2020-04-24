
 
Section 1 - (5 mins)
1)	Explain the difference between an abstract class and an interface.

Ans : Abstract class 
1. Simply abstract class does not support multiple inheritance it can only be extended once 
2. Non-abstract method can be created in abstract class
3 . creating abstract class is simple added the word abstract in front of class
4. Abstract class is faster that interface
Interface :
         1 Interface method are default abstract 
         2. No non abstract method is allowed in interface

2)	What is the purpose of getters and setters in a class?

Ans : getters and setters both are used to simply set a value to a property of object or get a value to the property of a object

const Fruits = { 
set available(name) {
 this.fruitsAvail.push(name);
}
get fruit() {
    if (this.fruitsAvail.length == 0) {
      return undefined;
    }
    return this.fruitsAvail[0];
  }
fruitsAvail: [ ]
}
Fruits.available = “Apple”
console.log(Fruits.fruit);
	
Section 2 - Testing - (5 mins)

3)	Explain the purpose of black box testing

Ans : Black box testing simply test the output generated from system based on whatever input is provided it basically in simple words is based on whatever input I provided irrespective of what I know about the system what kind of output the system returns is it usefull or not it basically help to find the failure cases of system in case when some not system specific or input is given is it able to handle it properly both in case of error generated or a success generated

4)	In your opinion what are the benefits of test cases

Ans : Honestly in my opinion using test cases on a system allows to debug or find scenario in which my system can be broke it allows my system to be better in terms of whatever scenario is generated whatever input or different amount of input passed and on based of them what are the output my system generated is it right or wrong basically it allows to find any hole in the system performance and where can it be improved and as many and viable test cases runs over the system the better is the change to make the system in a great form

Section 3 - NodeJS specific questions - (5 mins)

5)	What is an error first callback, and what is the reason for this pattern existing?

Ans: As per me biggest advantage of this is if error is caught in function it will instatnly throw error the code won’t process more this make this approach fast in terms of speed as per me also it is a great convention to right this pattern code as always handle error first and also this way is simple to manage error generated I can manage it better in terms of Api creation

6)	Explain the difference between fs.readSync and fs.read (File System module in Nodejs)

Ans : fs.read and fs.readSync majorly have one diffrence is that fs.read supports callbacks means I will know if any error is generated but in fs.readSync does not have callback functionality so also fs.readSync as name suggest reads file in synchronous way and stops other execution until response is came

7)	What tasks do you feel should be done asynchronously?

Ans: async in my terms require whenever I now that I require value in a from a function but at the same time that can take time so I can make the function async and use the await keyword to stop the execution of code further until my required value is received also async have lot of use case one I prefer most is async queue which let me process data one by one also ensuring the response 

Section 4 - NodeJS coding - (15 - 20 mins)

8)	(a) is a trivial example of callback hell
○	Refactor the code for the better, using any techniques you are aware of
○	Place code in load_contents.js
○	Take path as an argument
     Ans : so for me best Refactor  the code is better it will take some but it will became other developers much easy to understand the code and method used to solve this can be anything either use promise or async(mine preferred way)

Section 5 - NodeJS coding with classes - Fruit Basket - (40 - 50 mins)
a)	Load data from file `input.json`, the file contents are given in (i) Example input data
b)	You must create and use a FruitBasket class and a Fruit class.
i)	You may create any additional classes based on your approach 
c)	Implement code that will answer the following questions:
i)	How many fruits are in the basket
ii)	How many fruits of a specific type are in the basket
iii)	How heavy is the basket
d)	Output the data to file `output.json`, the file format should match (ii) Example output data for the given input data in (i), this is simply a json file
e)	Create a success scenario black box test

ANS : ALL NEED TO DO IS IS CLONE THE REPO AND DO node app.js you will se result in console

Section 6 - NodeJS test cases - Fruit Basket 
This is an optional section and does not need to be completed if you have already spent more than an hour and a half on the previous sections
f)	Create a failure scenario black box test
g)	Write the unit test cases you feel are most relevant

(a)
const fs = require('fs');
const path = process.argv[2];

function getFileContents(path, callback) {
  fs.exists(path, (exists) => {
    if (exists) {
      console.log('exists');
      fs.stat(path, (err, stats) => {
        if (err) {
          return callback(new Error('Error trying to get stats'));
        }
        console.log(stats);
        if (stats.size > 0) {
          fs.readFile(path, (err, buffer) => {
            if (err) {
              return callback(new Error('Error trying to get stats'));
            }
            return callback(null, buffer);
          })
        } else {
          return callback(new Error('File exists but there is no content'));
        }
      })
    } else {
      return callback(new Error('File does not exist'));
    }
  })
}


getFileContents(path, (err, contents) => {
  if (err) {
    console.error(`There was an error getting contents for ${path}`, err);
    return;
  }
  console.info('File was found and the contents were loaded');
});

 
The Fruit Basket Project
●	We have a fruit basket
○	It has a max allowed weight
●	We have various types of fruits, Apples | Oranges | Peaches | Pears
○	All fruits have a weight
○	All fruits have a color

(i) Example input data:
[{
  "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
  "max_weight": 8,
  "contents": [{
    "type": "apple",
    "color": "green",
    "weight": 1.5
  }, {
    "type": "apple",
    "color": "red",
    "weight": 1
  }, {
    "type": "pear",
    "color": "green",
    "weight": 2.5
  }]
}]


(ii) Example output data for the given input data in (i):
[{
  "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
  "total_fruits": 3,
  "total_weight": 5,
  "fruit_counts": [{
    "type": "apple",
    "count": 2
  }, {
    "type": "pear",
    "count": 1
  }]
}]
