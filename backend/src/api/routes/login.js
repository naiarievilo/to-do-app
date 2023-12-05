import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
  if (req.body?.email || req.body?.password) {
    res.sendStatus(400).send('Email and/or password required.');
  }

  next();
})

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // TODO: Database insertion and response
})

export default router;
