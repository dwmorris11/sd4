const fs = require('fs');

let file;
fs.readFile('./basketball.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let count = 0;
    file = JSON.parse(data);
    file.courtsByCity.forEach((city) => {
        const [cityCourts] = Object.entries(city); // ["New York", {courts}]
        const [name, courts] = [...cityCourts];
        courts.forEach((court) => {
            if (court.photos.length > 0) {
                count++;
            }
        });

    });
    console.log(count);
});