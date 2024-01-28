/**
 * You have a bunch of text files to analyze.
 * You need to compile a list of all unique words among the texts,
 * as well as a list of the positions that unique words exist at in each text.
 * 
 * (Note: this example is obviously contrived and flawed.
 * It is only to be used as a demonstration of the utility of type safety.)
 */
const text1 = 'This is a very long text. Don\'t underestimate me.';
const text2 = 'This text is also very lengthy. Don\'t doubt me!'
const text3 = 'And this one is a bit shorter.'

const texts = [text1, text2, text3];

/**
 * You keep track of two lists:
 * - all unique words among all the texts
 * - every position at which a unique word occurs
 */

// Task: add type annotations to help detect the bug!
const uniqueWords = [];
const positions = [];

texts.forEach(function(text) {
    const textWithoutPunctuation = text.replace(/[^\w ]/g, '');
    const lowercasedText = textWithoutPunctuation.toLowerCase();
    const wordsInText = lowercasedText.split(' ');

    wordsInText.forEach(function(word, spot) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
            positions.push(word);
        }
    })
})

console.log(`All unique words: \n${uniqueWords.join(' ')}\n`)
console.log(`All positions: \n${positions.join(' ')}\n`)
