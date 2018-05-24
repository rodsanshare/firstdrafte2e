const express = require('express')
const app = express()

app.use(express.static('client'));

//var dbContext = ['One', 'Two', 'Three'];
var dbContext = [
    {
        'consumerId': 1,
        'firstName': 'Firstnameone',
        'lastName': 'Lastnameone',
        'vehicleId': 'A1B2C3'
    },
    {
        'consumerId': 2,
        'firstName': 'Firstnametwo',
        'lastName': 'Lastnametwo',
        'vehicleId': '111111111'
    }
];

app.get('/consumers', (req, res) => res.send(dbContext))

app.listen(3000, () => console.log('Example app listening on port 3000!'))