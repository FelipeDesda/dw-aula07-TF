const fs = require('fs');
const path = require('path');

class DeleteFileController {
  async handle(req, res) {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({
        error: 'Nome do arquivo é obrigatório'
      });
    }

    const filePath = path.join(__dirname, '../../storage', name);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        error: 'Arquivo não encontrado'
      });
    }

    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(500).json({
          error: 'Erro ao deletar arquivo'
        });
      }

      return res.json({
        message: 'Arquivo deletado com sucesso'
      });
    });
  }
}

module.exports = new DeleteFileController();