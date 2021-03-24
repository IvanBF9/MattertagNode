const {getMatterTags, getMattertagsBySid,  createMattertag, updateMattertag, deleteMattertag} = require("../controllers/mattertagcontroller");

const createRoutes = (app) => {

    app.get("/", getMatterTags);

    app.get("/:sid", getMattertagsBySid);

    app.post("/", createMattertag);

    app.put("/:id", updateMattertag);

    app.delete("/:id", deleteMattertag);

};

module.exports = createRoutes;