// Find Two Numbers That Sum to a Target
// Arrays · Hash Map

// Return the indices of two different elements whose sum equals the target. Aim for O(n) time.
// const nums = [2, 7, 11, 15];
 // const target = 9;
 // Expected: [0, 1] -> return the indices



const nums = [2, 7, 11, 15];
const target = 9;



// brute force approch 
/**
 * Time complexity: O(n^2)
 * Space complexity: 0(1)
 */
function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return[i,j];
            }
        }
    }
    return[]
}
console.log(twoSum(nums,target));






// Using Map
/**
 * Time complexity: O(n)
 * Space complexity: 0(n)
 */
function twoSumOptimizeApproch(nums, target){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        let current = nums[i];
        let needed = target-current;
        if(map.has(needed)){
            return [map.get(needed), i]
        }
        map.set(current, i)
    }
    return [];
}
console.log(twoSumOptimizeApproch(nums,target));

/**
 * logic is when we can substract current elem to target element if value are present 
 * in a array then that was the second element
 */