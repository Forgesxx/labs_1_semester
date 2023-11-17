class animal {
    constructor(animalOptions){
     this.age = animalOptions.age
     this.type = animalOptions.type
     this.weitght = animalOptions.weitght
     this.voice = animalOptions.voice
     this.height = animalOptions.height
    }
    aVoice(){
        console.log(this.voice)
    }
    HealthCheck(){
        let BMI = this.weitght / this.height;
        return BMI;
    }
}
const animals = [
    new animal({
        age: 10,
        type: 'cat',
        weitght: 20,
        voice:'Meow',
        height: 20,
    }),
    new animal({
        age: 15,
        type: 'dog',
        weitght: 40,
        voice:'Wooof',
        height: 60,
    })
] 
animals.forEach((animal, index) => {
    let BMI = animal.HealthCheck();
    console.log(`Body Mass Index for Animal ${index + 1}:`, BMI);
  });
