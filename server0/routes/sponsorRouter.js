const express = require("express");
const router = express.Router();
const sponsorController = require("../controllers/sponsorController");


const upload = require("../middleware/handleImage")
// const protected =require("../middleware/Protected")
router.get("/api/sponsorP", sponsorController.allSponsorP);
router.get("/api/sponsorA", sponsorController.allSponsorA);
router.post("/api/sponsor",upload.single("image"), sponsorController.newSponsor);
// router.get("/api/sponsor/:id", sponsorController.oneSponsor);
router.put("/api/sponsor/:id", sponsorController.updateSponsor);
// router.delete("/api/sponsor/:id", sponsorController.deleteSponsor);


module.exports = router;