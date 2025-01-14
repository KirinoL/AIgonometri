const scriptURL = 'https://script.google.com/macros/s/AKfycbx8QzJF2PYE9qFS0Zz894vnifYOl9ESCmKeLmoQwEd2maFW7RTgPpH8hird34CcrJ8H/exec'; 
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    const formData = new FormData(form);

    const data = {
        nama: formData.get('nama'),
        absen: formData.get('absen'),
        kls: formData.get('kls'),
        depart: formData.get('sekolah')
    };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(response => {
        alert('Data berhasil dikirim!');
        form.reset(); 
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert('Gagal mengirim data.');
    });
});
