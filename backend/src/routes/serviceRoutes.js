const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/serviceController");
const authMiddleware = require("../middleware/auth");

// Get all services (public)
router.get("/", async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();

    const [services] = await connection.execute(
      "SELECT * FROM services WHERE is_active = TRUE ORDER BY category, name",
    );

    res.json({
      success: true,
      data: { services },
    });
  } catch (error) {
    console.error("Get services error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  } finally {
    if (connection) connection.release();
  }
});
