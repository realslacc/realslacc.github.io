const downloadData = document.querySelector('#download-data-btn');
const uploadData = document.querySelector('#upload-data-btn');

downloadData.addEventListener('click', function downloadData() {
    const data = localStorage.getItem('products');
    navigator.clipboard.writeText(data);
    alert('Data copied to clipboard! Paste this somewhere safe.');
});

uploadData.addEventListener('click', function uploadData() {
    const dataToUpload = prompt('Paste the data you previously downloaded.');
    if (dataToUpload != null || dataToUpload != '') {
        const confirm = prompt('WARNING: This will overrwrite any data you currently have. If you wish to continue, type \'yes\'.');
        if (confirm == 'yes') {
            localStorage.setItem('products', dataToUpload);
        }
    }
}); 