{

function stringFormat(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

console.log(stringFormat("Hello"));
console.log(stringFormat("Hello", true));
console.log(stringFormat("Hello", false));

function filterAt(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.0 },
  { title: "Book B", rating: 2.2 },
  { title: "Book C", rating: 5.0 }
];

console.log(filterAt(books));

function concatArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(concatArrays([1, 2], [3, 4], [5]));
console.log(concatArrays(["a", "b"], ["c"]));

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo (): string {
    return (`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return (`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());
console.log(myCar.getModel());

function valueProcessing ( value: string | number ) : number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(valueProcessing("Hello"));
console.log(valueProcessing(5));

interface Product {
  name: string,
  price: number
}

function getMostExpensiveProducts (products: Product[]) : Product | null {
  if (products.length === 0) {
    return null;
  }

  products.sort((a, b) => b.price - a.price);
  return products[0];
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProducts(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType (day: Day): string {
  if (day === Day.Friday || day === Day.Saturday) {
    return "Weekend"
  } else {
    return "Weekday"
  }
}

console.log(getDayType(Day.Friday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Monday));

async function squareAsync(n:number) : Promise<number> {
  return new Promise((res, rej) => {
    if (n < 0) {
      rej("Number cannot be negative");
    } else {
      setTimeout(() => {
        res(n * n);
      }, 1000)
    }
  })
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);





















}