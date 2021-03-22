const {getMatterTags, createMattertag, updateMattertag, deleteMattertag} = require("../controllers/mattertagcontroller");

const createRoutes = (app) => {

    app.get("Mattertags/", getMatterTags);

    app.post("Mattertag/", createMattertag);

    app.put("Mattertag/:id", updateMattertag);

    app.delete("Mattertag/:id", deleteMattertag);

};

module.exports = createRoutes;