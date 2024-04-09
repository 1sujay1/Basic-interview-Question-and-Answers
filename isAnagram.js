//1st approach
function findAnagram(word1, word2) {
  if (word1.length != word2.length) return false;
  let globalObj = {};
  let globalObj2 = {};
  for (let i = 0; i < word1.length; i++) {
    globalObj[word1[i]] = (globalObj[word1[i]] || 0) + 1;
    globalObj2[word2[i]] = (globalObj2[word2[i]] || 0) + 1;
  }
  for (const key of globalObj) {
    if (globalObj[key] !== globalObj2[key]) return false;
  }
  return true;
}

console.log(findAnagram("anagram", "nagaram"));
console.log(findAnagram("anagram", "nagarama"));
// 2nd approach
// const isAnagram = (w1, w2) => {
//   w1 = w1.split("").sort().join("");
//   w2 = w2.split("").sort().join("");
//   console.log(w1, w2);
//   return w1 == w2;
// };
