//Ryan Herman
//Code sourced from CMPSC 297 canvas page (Spring 2022)

//Purpose: Mine a new block and append it to blockchain after validation

// ./routes/mine.js

// * The server mines a new block, and adds it to its personal chain.



function mine(app) {

    app.get("/mine", (request, response) => {

        // Add the block to our chain, which calls mine()

        global.blockchain.addBlock();



        // Clear our transactions

        global.transactions = [];



        // Send a success response

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        response.status(200).send(msg);

    });

}



module.exports = mine;