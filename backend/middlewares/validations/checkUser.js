const User = require('../../models/Pet');

module.exports.checkUser = async function async(req, res, next) {
  const { name, email, phone, password, confirmPassword } = req.body;

  if (!name) {
    res.status(422).json({
      message: 'Por favor, informe um nome. Esse campo é obrigatório!',
    });
    return;
  }

  if (!email) {
    res.status(422).json({
      message: 'Por favor, informe um email. Esse campo é obrigatório!',
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(422).json({
      message: 'Por favor, informe um e-mail válido!',
    });
    return;
  }

  if (!phone) {
    res.status(422).json({
      message: 'Por favor, informe um telefone. Esse campo é obrigatório!',
    });
    return;
  }

  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!phoneRegex.test(phone)) {
    res.status(422).json({
      message: 'Por favor, informe um número de telefone válido!',
    });
    return;
  }

  if (!password) {
    res.status(422).json({
      message: 'Por favor, informe uma senha. Esse campo é obrigatório!',
    });
    return;
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{6,}$/;
  if (!passwordRegex.test(password)) {
    res.status(422).json({
      message:
        'A senha deve ter no mínimo 6 caracteres, incluindo pelo menos uma letra maiúscula e um número.',
    });
    return;
  }

  if (!confirmPassword) {
    res.status(422).json({
      message:
        'Por favor, informe a confirmação de senha. Esse campo é obrigatório!',
    });
    return;
  }

  if (password !== confirmPassword) {
    res.status(422).json({
      message: 'As senhas não coincidem. Por favor, tente novamente.',
    });
    return;
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(422).json({
      message:
        'Este e-mail já está cadastrado. Por favor, utilize outro endereço de e-mail.',
    });
    return;
  }

  next();
};
