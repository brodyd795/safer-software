/**
 * Imagine you've been tasked with writing the Levenshtein algorithm for a class project.
 * This could take you quite a while, with many, many iterations.
 * 
 * Using proper version control (e.g. git) for this would be much simpler and effective
 * than without (e.g. file naming "algorithm_v2_FINAL").
 */

/**
 * Calculate the minimum number of single-character edits to change one string into another.
 * Useful for spell-checking algorithms.
 * 
 * Source: https://www.30secondsofcode.org/js/s/levenshtein-distance/
 */
function levenshteinDistance(s, t) { // example refactor: rename to "source" and "target"
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
      arr[i] = [i];
      for (let j = 1; j <= s.length; j++) {
        arr[i][j] =
          i === 0
            ? j
            : Math.min(
                arr[i - 1][j] + 1, // example bug: change to - 1
                arr[i][j - 1] + 1,
                arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
              );
      }
    }
    return arr[t.length][s.length];
  }
  
  levenshteinDistance('duck', 'dark'); // 2
  levenshteinDistance('foo', 'foobar'); // 3