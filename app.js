const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/cart', (req, res) => {
    res.send('Корзина!')
})
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})