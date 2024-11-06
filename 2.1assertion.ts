{
    // Type assertion
    const value: any = "hello world, From Bangladesh"
    const stringLength: number = (value as string).length
    console.log(stringLength);
    //Type Assertions within Functions in TypeScript
    function processData(data: any): string {
        const strData = data as string;
        return strData.toUpperCase();
    }
    console.log(processData('inroduction243434343434'));

    //Example with Type Guard:
    function processData2(data: any): string | number {
        if (typeof data === 'string') {
            const strData = data as string
            return strData.toUpperCase()
        } else if (typeof data === 'number') {
            return data * 2
        }else{
            throw new Error('Invalid data type!')
        }
    }
    console.log(processData2(434));
}