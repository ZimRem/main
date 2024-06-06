const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/auth', (req, res) => {
    const { address } = req.body;
    // Обрабатываем адрес кошелька для аутентификации
    console.log('Received address:', address);

    // Здесь можно добавить логику проверки адреса и возврата данных пользователя
    res.json({ message: 'Wallet authenticated', address });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
