// Simple sorting method
// const points=[3,0,2,5,-1,4,1,10,2315,20,12]
// points.sort(function(a,b){return a-b});
// QuickSort Method
function QuickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    
    // remove duplicate values from array
    arr = Array.from(new Set(arr));
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    
    return QuickSort(left).concat(pivot, QuickSort(right));
  }
  
  // Test case
  var unsortedArray = [3, 0, 2, 5, -1, 4, 1, 10, 23, 15, 20, 12];
  var sortedArray = QuickSort(unsortedArray);
  console.log(sortedArray.join(', ')); 
  