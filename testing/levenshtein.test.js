const {levenshteinDistance} = require('../git/levenshtein')

describe('levenshtein', () => {
    test('should return correct values', () => {
        const result = levenshteinDistance('fort', 'fork')

        expect(result).toBe(1);
    });
});