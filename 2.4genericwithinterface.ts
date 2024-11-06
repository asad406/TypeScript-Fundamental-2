{
    //2.4: Generics With Interface
    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }
    interface SmartWatch {
        brand: string;
        screen: string
    }
    const poorDeveloper: Developer<SmartWatch> = {
        name: 'norim',
        computer: {
            brand: 'HP',
            model: "45k67",
            releaseYear: 2023
        },
        smartWatch:{
            brand: 'hitachi',
            screen: "led"
        }
        
    }
}