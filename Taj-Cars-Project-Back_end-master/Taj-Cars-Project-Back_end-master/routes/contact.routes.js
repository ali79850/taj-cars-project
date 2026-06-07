const express = require("express");
const contactController = require("../controllers/contact.controller");
const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContactById);
router.put("/all/read", contactController.markAllAsRead);
router.delete("/:id", contactController.deleteContact);
router.delete("/", contactController.deleteAll);

module.exports = router;
