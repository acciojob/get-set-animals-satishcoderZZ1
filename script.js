//complete this code
class Animal {
	private species: string;
	constructor(species: string){
		this.species=species;
	}

	get species(): string{
		return this.species;
	}
	
	makeSound(): void{
		console.log(`The ${this.species} make a sound`);
	}
}

class Dog extends Animal {
	bark(): void{
		console.log("woof");
	}
	
}

class Cat extends Animal {
	purr(): void{
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
