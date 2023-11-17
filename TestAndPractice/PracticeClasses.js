class Animal
{
constructor(animalOptions){
    this.color = animalOptions.color;
    this.age = animalOptions.age;
    this.weight = animalOptions.weight;
    this.type = animalOptions.type;
    this.voice = animalOptions.voice
    this.height = animalOptions.height
}
voice(voice){
    console.log(this.voice)
}
    HealthCheck(animal){
        let BMI = this.weight / this.height;
        return BMI
    }
}


const Animal1 = new Animal({
    color: 'Black',
    age: 43,
    weight: 50,
    type: 'cat',
    voice: 'Meow',
    height: 20,
});
//console.log('animal age:', Animal1.age, ', animal weight:', Animal1.weight);
//console.log('this animal says:', Animal1.voice)
let BodyMassIndex = (Animal1) => 
{
let BMI = Animal1.weight / Animal1.height;
return BMI
}
//let BMI1 = BodyMassIndex(Animal1)
//console.log(BMI1)
//if (BMI1 > 2){
     //console.log('Your pet is healthy');}

    //else
   // {
     //   console.log('Your pet is sick')
    //}
    const Animal2 = new Animal({
        color: 'Black',
        age: 43,
        weight: 35,
        type: 'cat',
        voice: 'Meow',
        height: 20,
    })
    let BMI1 = Animal1.HealthCheck()
    let BMI2 = Animal2.HealthCheck()
console.log(BMI1, BMI2)
   



