const data = 'This is a text!';

function cleanData(data) {
    const cleanedData = data.replace(/\W/g, '');
    return cleanedData;
}

const result = cleanData(data);
console.log('result :>> ', result);