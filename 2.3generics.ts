{




    // interface User {
    //     id: number;
    //     name: string
    // }
    // function logUser<T extends User>(users: T[]): void{
    //     users.forEach(user => console.log(user.name))
    // }
    // const users:User[] = [
    //     {id:1, name: 'juila'},
    //     {id:2, name: 'julia'}
    // ]

    // console.log(logUser(users));
    type GenericArray<T> = Array<T>

    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: 'Mollik',
            age: 123
        },
        {
            name: 'Motiur',
            age: 321
        }
    ]

    console.log(user[1].name);
}