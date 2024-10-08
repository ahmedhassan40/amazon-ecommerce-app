import express, { Router } from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getNewReleasesProducts,
} from "../controllers/productController.js";

import { protect, restrictTo } from "../controllers/authController.js";

const router = express.Router();

router.route("/newReleases").get(getNewReleasesProducts);

router
  .route("/")
  .get(getAllProducts)
  .post(protect, restrictTo("admin"), createProduct);
router
  .route("/:id")
  .get(getProduct)
  .patch(protect, restrictTo("admin"), updateProduct)
  .delete(protect, restrictTo("admin"), deleteProduct);

export default router;
