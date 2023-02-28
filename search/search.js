function search(nameList, searchTerm) {
    /*
    Given an array of names, write a function named search which takes two parameters: a list of names
    and a string to search for, and returns an array of all the names that contain the specified string.
    Your function should be case insensitive.
    */


    const upperSearchString = searchTerm.toUpperCase();
    
    return nameList.filter((name) => {
        const upperName = name.toUpperCase(); 
          return upperName.includes(upperSearchString); 
    });
      
}