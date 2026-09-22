window.addEventListener('resize', resizeImageMap);
window.addEventListener('load', resizeImageMap);

function resizeImageMap() {
    const img = document.getElementById('resizable-image');
    const map = document.getElementById('resizable-map');
    const scaleX = img.offsetWidth / img.naturalWidth;
    const scaleY = img.offsetHeight / img.naturalHeight;

    Array.from(map.getElementsByTagName('area')).forEach(area => {
        const coords = area.coords.split(',').map(Number);
        // Update x (even indices) and y (odd indices)
        for (let i = 0; i < coords.length; i++) {
            coords[i] = i % 2 === 0 ? coords[i] * scaleX : coords[i] * scaleY;
        }
        area.coords = coords.join(',');
    });
}   
