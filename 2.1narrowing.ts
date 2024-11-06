{
    const kgToGm = (value : string | number | undefined)=>{
        if (typeof value === "string"){
            const convertValue = parseFloat(value) * 1000 
            return convertValue;
        }else if ( typeof value === "number") {
            return value*1000
        }
    }
    const kg = "100"
    const gm1 = kgToGm(100) as number;
    // const gm2 = kgToGm("10") as string;
    console.log(`${kg} kg = ${gm1} gm`);
    // console.log(`${kg} kg = ${gm2} gm`);
}