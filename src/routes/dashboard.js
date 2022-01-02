import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send({
    "key1": "value1",
    "key2": "value2",
  });
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.get('/', (req, res) => {
  return res.send({
    "key1": "value1",
    "key2": "value2",
  });
});

export default router;
