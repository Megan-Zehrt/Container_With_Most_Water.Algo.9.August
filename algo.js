// 11. Container With Most Water



// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let maxArea = 0
    let l = 0
    let r = height.length-1

    while(l < r){

        let h =  Math.min(height[l], height[r])

        let w = r - l

        let area = h * w

        maxArea = Math.max(maxArea, area)

        if(height[l] < height[r]){
            l++
        }else{
            r--
        }

        
    }

    return maxArea
};