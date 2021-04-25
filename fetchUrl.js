const fetch = require('node-fetch');
const fs = require('fs');
const { json } = require('express');


function getAllFetchDetails() {

    fetch(`https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD`)
        .then(res => res.json())
        .then(json => {
            fs.appendFile('myfile.json', json.data, function(err) {
                if (err) throw err;
                console.log('Saved');

            })
        });

    fetch(`https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history`)
        .then(res => res.json())
        .then(json => {
            fs.appendFile('myfile.json', json.data, function(err) {
                if (err) throw err;
                console.log('Saved');
            })
        })


    fetch(`https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD`)
        .then(res => res.json())
        .then(json => {
            fs.appendFile('myfile.json', json.data, function(err) {
                if (err) throw err;
                console.log('Saved');
            })
        });

    fetch('https://api.github.com/users/mralexgray/repos')
        .then(res => res.json())
        .then(json => {
            fs.appendFile('myfile.json', json.data, function(err) {
                if (err) throw err;
                console.log('Saved');
            })
        });
}

module.exports = getAllFetchDetails;