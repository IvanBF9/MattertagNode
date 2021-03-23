const {getMatterTags, createMattertag, updateMattertag, deleteMattertag} = require("../controllers/mattertagcontroller");

const createRoutes = (app) => {

    app.get("/", getMatterTags);

    app.post("/", createMattertag);

    app.put("/", updateMattertag);

    app.delete("/", deleteMattertag);

};

module.exports = createRoutes;