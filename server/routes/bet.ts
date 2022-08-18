import express, { Request, Response } from "express";

const router = express.Router();

router.get("/me", (req: Request, res: Response) => {
    res.status(200).send({
        message: "Bet placed by me"
    })
})

export default router;