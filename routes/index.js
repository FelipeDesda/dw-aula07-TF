const express = require('express');
const router = express.Router();

const CreateFileController = require('../app/Controllers/CreateFileController');
const DeleteFileController = require('../app/Controllers/DeleteFIleController');

// rota para criar arquivo
router.post('/files', (req, res) => {
  return CreateFileController.handle(req, res);
});

// rota para deletar arquivo
router.delete('/files/:name', (req, res) => {
  return DeleteFileController.handle(req, res);
});

module.exports = router;
