const fs = require('fs');
const path = require('path');

class CreateFileController {
  async handle(req, res) {
    const { name, content } = req.body;

    if (!name || !content) {
      return res.status(400).json({
        error: 'name e content são obrigatórios'
      });
    }

    const filePath = path.join(__dirname, '../../storage', name);

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return res.status(500).json({
          error: 'Erro ao criar arquivo'
        });
      }

      return res.status(201).json({
        message: 'Arquivo criado com sucesso'
      });
    });
  }
}

module.exports = new CreateFileController();