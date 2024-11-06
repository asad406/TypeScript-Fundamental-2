{
    //add a new property in alias by intersection(&)
    type User = {
        name: string;
        email: string
    }

    type NewUser = User & { id: number }

    const newUser: NewUser = {
        name: 'norim',
        email: 'norim@m.com',
        id: 1234
    }

    // console.log(newUser);
    //add a new property in interface
    interface User2 {
        name: string;
        email: string;
    }
    interface NewUser2 extends User2 { id: number }

    const newUser2: NewUser2 = {
        name: 'binal',
        email: 'bm@m.com',
        id: 1234
    }

    console.log(newUser2);

}