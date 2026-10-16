// Find the Longest Substring Without Repeating Characters

// const str = "abcabcbb";
 // Expected: 3
 // "abc"


const str = "abcabcbb";


// Brute force approch
function longestSubString(str){
    let maxLength = 0;
    for(let i=0; i<str.length; i++){
        let seen = ""
        for(let j=i; j<str.length;j++){
            if(seen.includes(str[j])){
                break
            };
            seen = seen + str[j]
            maxLength = Math.max(maxLength, seen.length);
        }
        
    }
    return maxLength;
}
console.log(longestSubString(str));




// sliding window technique
function longestSubStringSlidingwindow(str){
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const seen = new Set();
    for(right = 0; right<str.length; right++){
        if(seen.has(seen[right])){
            seen.delete(str[left]);
            left++  
        }
        seen.add(str[right]);
        maxLength = Math.max(maxLength, right-left+1)
    }
}
console.log(longestSubStringSlidingwindow(str));