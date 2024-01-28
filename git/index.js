const data = 'This is a text!';

// Bug: cleanData function removes spaces when it shouldn't
function cleanData(data) {
    const cleanedData = data.replace(/\W/g, '');
    return cleanedData;
}

const result = cleanData(data);
console.log('result :>> ', result);