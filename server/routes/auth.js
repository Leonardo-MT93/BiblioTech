import { Router } from "express";



const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'get API',
        ok: true
    })
})


export default router;