// Find the Top K Most Frequent Elements

// Return the k most frequent numbers in an array.
// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;

 // Expected: [1, 2]


// Challenge: Try to achieve better than O(nlog n) time.




function topKFrequentElement(nums, k){
    if(k<=0) return [];
    const frequency = new Map();

    for(let num of nums){
        frequency.set(num, (frequency.get(num) || 0)+ 1);
        console.log(frequency);
    }

    let bucket = Array.from({length: nums.length+1},() => []);
    console.log(bucket);
    for(let [num,count] of frequency){
        bucket[count].push(num);
    }

    const result = [];

    for(let i=bucket.length-1; i>=1; i--){
        for(let num of bucket[i]){
            result.push(num)
            if(result.length === k){
                return result;
            }
        }
    }
    return result;
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequentElement(nums,k));