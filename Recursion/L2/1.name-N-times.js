let reverseArrayTwoPointer = (arr, left, right) => {
    if(left >= right){
      return;
    }
    
      let temp = arr[left];
      arr[left]=arr[right];
      arr[right]=temp;
    
      left++;
      right--;
    
    
   reverseArrayTwoPointer(arr, left, right);
  }
  
  var arr = [1,2,3,4,5,6];
  var res = (reverseArrayTwoPointer(arr, 0, arr.length-1));
  console.log(res);