let tanya = true;
let count = 0;

while (tanya) {
    tanya = confirm('Apakah anda mau mengulang');

    if (tanya === true) {
        count++;
    } else {
        alert('Perulangan sudah dilakukan sebanyak ' + count);
    }
}