// src/routes/api.ts
import { Router, Request, Response } from 'express';
import { pool, checkDbConnection } from '../db';

export const apiRouter = Router();


apiRouter.get('/markers/:id/images', async (req: Request, res: Response) => {
  const markerId = req.params.id;

  try {
    console.log("Marker ID:", markerId);

    const result = await pool.query(
      "SELECT id, filename, caption FROM marker_images WHERE marker_id = $1",
      [markerId]
    );

    console.log("DB rows:", result.rows);

    const baseUrl = `${req.protocol}://${req.get('host')}`;

const images = result.rows.map((img: any) => ({
  id: img.id,
  url: `/uploads/${img.filename}`,
  caption: img.caption || img.filename
}));

    res.json(images);

  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});


