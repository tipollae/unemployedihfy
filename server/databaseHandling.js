
class databaseHandler{

    constructor(clientReference){

        this.localTokens = {};
        this.database = clientReference.db("public");
        this.usersCollection = this.database.collection("users");
        this.playlistCollection = this.database.collection("playlists");

    }

    async checkExistingAccount(givenAccountID){

        var existingLocalUser = this.localTokens[givenAccountID];
        var existingDatabaseUser = null;

        if (!existingLocalUser){

            existingDatabaseUser = await this.usersCollection.findOne({

                accountID: givenAccountID

            })

        }

        return !!(existingLocalUser || existingDatabaseUser);

    }

}
module.exports = {
    databaseHandler
}