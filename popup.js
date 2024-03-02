const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');
const copyButton = document.querySelector('.copyButton');
const selectedColorDiv = document.querySelector('.selectedColor');

btn.addEventListener('click', async () => {
    if ('EyeDropper' in window) {
        try {
            const eyeDropper = new EyeDropper();
            const result = await eyeDropper.open();
            
            const color = result.sRGBHex;
            colorGrid.style.backgroundColor = color;
            colorValue.innerText = color;
            
            selectedColorDiv.style.display = 'flex';
            
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

copyButton.addEventListener('click', () => {
    const colorValueText = colorValue.innerText.trim();
    
    if (colorValueText !== '') {
        navigator.clipboard.writeText(colorValueText)
            .then(() => {
                copyButton.innerText = 'Copied';
                setTimeout(() => {
                    copyButton.innerText = 'Copy';
                }, 1000);
            })
            .catch((error) => {
                console.error('Unable to copy color value to clipboard:', error);
            });
    }
});

