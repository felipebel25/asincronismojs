const something = () =>
{
    return new Promise((resolve,reject) =>
    {
        (true)
        ?setTimeout(() =>{
        resolve("resuelto")},3000)
        :reject(new Error("Error"));
    })

}

const say = async () => {
    try{
       const jaja = await something();
       console.log(jaja);
    }
    catch(error){
        console.error(error);

    }
}

say();