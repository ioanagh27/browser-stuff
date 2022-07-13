

const updateBitcoinButtonText = (val) => {
    document.getElementById("bitcoin-button").textContent = val;
}



//handle node/browser differences


if (typeof exports != 'undefined') {
    module.exports = {
        updateBitcoinButtonText
    }
}
