//promise always takes two arguments - resolve and reject
let dataReady = false;
function readDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dataReady)
                console.log("Loaded...");
            else
                console.log("Failed...");
        }, 1000); 
    })
}

async function getData(){
    try{
        let getData = await readDB();
        console.log(getData());     
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("completed");
    }
}

getData();