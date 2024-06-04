const {onRequest} = require("firebase-functions/v2/https");
const userFunctions = require("./User");
const server = require("./server");

exports.userEndpoints = onRequest(server.app);
exports.otherUserFunction = onRequest(userFunctions.someFunction);
