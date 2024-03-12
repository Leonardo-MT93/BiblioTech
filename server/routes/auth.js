import { Router } from "express";



const router = Router();

router.post('/login', (req, res) => {
    res.json({
        msg: 'post API - login',
        ok: true
    })
})



export default router;