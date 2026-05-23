
class dataBaseHandler{

    constructor(clientReference){

        this.localTokens = {};
        this.database = clientReference.db("public");
        this.usersCollection = this.database.collection("users");
        this.playlistCollection = this.database.collection("playlists");

    }

    async checkExistingAccount(givenAccountID){

        var existingUser = this.localTokens[givenAccountID];

        if (!existingUser){

            existingUser = await this.usersCollection.findOne({

                accountID: givenAccountID

            })

        }

        return !!existingUser;

    }

}
module.exports = {
    dataBaseHandler
}