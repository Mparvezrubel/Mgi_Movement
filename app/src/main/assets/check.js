async function loadData() {
    const content = document.getElementById('content');
    const title = document.getElementById('title');

    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Unable to load data.json (' + response.status + ')');
        }

        const data = await response.json();
        title.textContent = data.title || 'MGI Movement Register';

        const meta = data.meta || {};
        const sheet = (data.sheets && data.sheets[0]) || {};
        const rows = sheet.rows || [];

        const summary = [
            '<strong>SR:</strong> ' + (meta.sr || 'N/A'),
            '<strong>DB:</strong> ' + (meta.db || 'N/A'),
            '<strong>Territory:</strong> ' + (meta.territory || 'N/A'),
            '<strong>Region:</strong> ' + (meta.region || 'N/A'),
            '<br><br>',
            '<strong>Records:</strong> ' + rows.length
        ].join(' ');

        content.innerHTML = summary;
    } catch (error) {
        title.textContent = 'MGI Movement Register';
        content.textContent = 'Data could not be loaded: ' + error.message;
    }
}

window.addEventListener('DOMContentLoaded', loadData);
