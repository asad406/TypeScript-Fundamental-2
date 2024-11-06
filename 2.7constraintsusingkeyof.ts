{
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "Mrhima",
        age: 26,
        address: "sat"
    }
    const result1 = getPropertyValue(user, "name")
    console.log(result1);
    const car = {
        model: "Toyota 100",
        year: 2300
    }
    const result2 = getPropertyValue(car, "model")
    console.log(result2);

 }