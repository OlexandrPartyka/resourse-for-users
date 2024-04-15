const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let number = 0;

app.use(bodyParser.json());

// Отримання поточного числа
app.get('/number', (req, res) => {
    res.json({ number });
});

// Заміна поточного числа
app.post('/number', (req, res) => {
    const { number: newNumber } = req.body;
    if (newNumber !== undefined) {
        number = newNumber;
        res.json({ message: 'Number updated successfully' });
    } else {
        res.status(400).json({ error: 'No number provided' });
    }
});

// Видалення поточного числа
app.delete('/number', (req, res) => {
    number = 0;
    res.json({ message: 'Number deleted successfully' });
});

// Оновлення поточного числа
app.patch('/number', (req, res) => {
    const { number: newNumber } = req.body;
    if (newNumber !== undefined) {
        number = newNumber;
        res.json({ message: 'Number patched successfully' });
    } else {
        res.status(400).json({ error: 'No number provided' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
