// you are given a *sorted* array, also a target, you must return the 2 indices that sum up to the target
// [1, 4, 8, 12], target = 20 => [2, 3]
// naive approach
// outer loop increments by 1 each iteration until length -1
// inner loop increments by 1 each iteration until length
// speed, time-complexity, space space-complexity, readability

const elements = Araay.from(Array(20).keys())
console.log(elements)

target = 37

const two_sum_naive = (arr, t) => {
    for (let i =0; i <arr.length -1; i++) {
        for(let j = i+1; j <arr.length; j++) {
            if (arr[i] = arr[j] == t) {
                return [i,j]
            }
        } 
    }
    return -1
}

// O(n)
// create a cache {}
// loop through array length
// each time we see an element we put it in the cache with the key as the element and the index as the value
// then we go ahead and check if (target - arr[i] in cache), return the indices

const two_sum_cache = (arr, t) => {
    cache ={}
    for (let i = 0; i < arr.length; i++) {
        cache[arr[i]] = i
        if (target - arr[i] in cache) {
            console.log(cache)
            return [cache[target-arr[i]], i]
        }
    }
}