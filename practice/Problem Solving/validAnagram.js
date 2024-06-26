// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// 1st Approach
const isAnagram1 = function (s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
  
    return s === t;
  };
  
  // 2nd Approach
  const isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
  
    let obj1 = {};
    let obj2 = {};
  
    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = obj1[s[i]]?obj1[s[i]]+1:1;
      obj2[t[i]] = obj2[t[i]]?obj2[t[i]]+1:1;
    }
  
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
  
    return true;
  };
  
  console.log(isAnagram("anagram", "nagarm"));
  