function fancyBarcodes(input) {
    const patterns = /@[#]+([A-Z][a-zA-Z0-9]{4,}[A-Z])@[#]+/g;

    const numberProductsToScan = parseInt(input.shift());
    const defaultBarcode = "00";
    const groupD = "Product group:";

    for (let i = 0; i < numberProductsToScan; i++) {
        const barcode = input.shift();
        let found = false;
        let match;

        while ((match = patterns.exec(barcode)) !== null) {
            found = true;
            const result = match[1].replace(/\D/g, '');
            console.log(`${groupD} ${result || defaultBarcode}`);
        }

        if (!found) {
            console.log("Invalid barcode");
        }
    }
}