
async function checkExistingAccountID(){

    console.log("test")

    try{

        console.log("before fetch");
        const response = await fetch("../public/accountData.json");
        console.log("after fetch");
        if (!response.ok) throw new Error("Network response failed");
        const accountData = await response.json();
        socket.emit("check-existing-account", accountData.accountID);
        console.log(`accountID: ${accountData.accountID}`);

    }

    catch(error){

        console.error("Fetch error: " + error);

    }

}

socket.on("check-existing-account", ()=>{

    checkExistingAccountID();

})