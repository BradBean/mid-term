function firstDuplicate(array) {
   /* 1.  Given an array a that contains only numbers in the range from 1 to a.length,
    find the first duplicate number for which the second occurrence has the minimal index. In other words, 
    if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than 
    the second occurrence of the other number does. If there are no such elements, return -1.
    
    Example:
      For array = [2, 3, 3, 1, 5, 2], the output should be
      firstDuplicate(a) == 3.
    
    There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
    
    For array = [2, 4, 3, 5, 1], the output should be firstDuplicate(array) == -1.
    */

    let firstDuplicate = -1;
    let numbersChecked = [];
  
    array.forEach((num) => {
      if (numbersChecked.includes(num) && firstDuplicate === -1) {
        firstDuplicate = num;
      }
      numbersChecked.push(num);
    });
  
    return firstDuplicate;

}

//firstDuplicate([1,2,3,4,5,'hello world']);
