const person={
      name: "mg mg",
      age :12,
      gender: "male",
      marry: false,
      hobby:["game","codeing","reading"],
      address: {
           city: "ygn",
           township: "dalla",
           street: "19st"
      },
        
      profile() {
          console.log(this);
          return `${this.name} ${this.age}`
      }

};

const {name,age,gender,hobby,address,skin="grey"} = person; 

console.log(name);
console.log(skin);





