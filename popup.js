const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');

btn.addEventListener('click', async () => {
    if ('EyeDropper' in window) {
        try {
            const eyeDropper = new EyeDropper();
            const result = await eyeDropper.open();
            
            const color = result.sRGBHex;
            colorGrid.style.backgroundColor = color;
            colorValue.innerText = color;
            
            try {
                await navigator.clipboard.writeText(color);
            } catch (err) {
                console.error(err);
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        console.error('EyeDropper API not supported in this browser.');
    }
});

async function pickColor() {
    try {
        // Picker
        const eyeDropper = new EyeDropper();
        return await eyeDropper.open();
    } catch (err) {
        console.error(err);
    }
}


