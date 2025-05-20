// Problem - 1

{
    // 

    const formatString = (input : string, toUpper? : boolean) : string => {

        if (typeof input === 'string' && typeof toUpper === 'boolean') {
            return toUpper ? input.toUpperCase() : input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }

    // console.log(formatString("Hello"));
    // console.log(formatString("Hello", true));
    // console.log(formatString("Hello", false));

    // 
}


// Problem-2

{
    // 

    const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const filterByRating = (item : { title : string; rating : number } []) : {title : string; rating : number } [] => {
    const highestRating = item.filter((rating) => rating.rating >= 4);
    return highestRating;
}

// console.log(filterByRating(books));

    // 
}


// Problem-3


{
    // 

    const concatenateArrays = <T> (...array : T[][]) : T[] => {
        // return array.flat();
        return array.reduce((acc, curr) => acc.concat(curr), [])
    }

    // console.log(concatenateArrays(["a", "b"], ["c"]));
    // console.log(concatenateArrays([1, 2], [3, 4], [5]));

    // 
}


// Problem-4

{
    // 

    class Vehicle {
       private make : string;
        year : number;

        constructor (make : string, year : number) {
            this.make = make;
            this.year = year;
        }

        getInfo () {
            return `Make : ${this.make}, Year : ${this.year}`
        }
    }

    class Car extends Vehicle {
       private model : string;
        constructor (make : string, year : number, model : string) {
            super (make, year)

            this.model = model;
        }

        getModel () {
            return `Model : ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");

    // console.log(myCar.getInfo());
    // console.log(myCar.getModel());

    // 
}


// Problem-5

{
    // 

    const processValue = (value : string | number) : number => {
        if (typeof value === 'string') {
            return value.length;
        }
        else if (typeof value === 'number') {
            return value * 2;
        }
        else {
            throw new Error('Invalid type')
        }
    }

    // console.log(processValue('hello'));
    // console.log(processValue(10));

    // 
}


// Problem-6

{
    // 

    interface Product {
        name : string,
        price : number,
    }

    const products = [
        { name : 'Pen', price : 10 },
        { name : 'Notebook', price : 25 },
        { name : 'Bag', price : 50 }
    ]

    const getMostExpensiveProduct = (products : Product[]) : Product | null => {
        if (!Array.isArray(products) || products.length === 0) {
            return null;
        }

        let mostExpensive = products[0];

        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }

        return mostExpensive;
    }

    // console.log(getMostExpensiveProduct(products));
    // 
}


// Problem-7

{
    // 

    enum Day {
         Monday,
         Tuesday,
         Wednesday,
         Thursday,
         Friday,
         Saturday,
         Sunday
        }

        const getDayType = (day : Day) : string => {
            if (day === Day.Saturday || day === Day.Sunday) {
                return 'Weekend'
            }
            else {
                return 'Weekday'
            }
        }

        // console.log(getDayType(Day.Monday));
        // console.log(getDayType(Day.Sunday));

    // 
}

{
    // 

    const squareAsync = async (n : number) : Promise<number> => {
        if (n % 2 === 0) {
            return new Promise ((resolve) => {
                setTimeout (() => {
                    resolve (n * n);   
                }, 1000);
            })
        }
        else {
            throw Error('Nagative number not allowed')
        }
    }

    // squareAsync(4).then(console.log)
    // squareAsync(-3).then(console.log)

    // 
}