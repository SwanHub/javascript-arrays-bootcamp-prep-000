
  var chocolateBars = [
    "snickers", 
    "hundred grand", 
    "kitkat", 
    "skittles"
    ]
    
    function addElementToBeginningOfArray(array, element) {
      var newArray = array.unshift(element)
      return newArray
    }
    
    const c = [1];
    
    function addElementToBeginningOfArray(array, element) {
      [element, ...array];
      return array
    }
    
    addElementToBeginningOfArray(c, 'foo');
    
     function addElementToBeginningOfArray(array, element) {
      array.unshift(element)
      return array
    }
    
    addElementToBeginningOfArray([1], 'foo');
    
    function destructivelyAddElementToBeginningOfArray(array, el) {
      array.unshift(el)
      return array 
    }
  
    
    function addElementToEndOfArray(array, el) {
      var newArray = array.push(el)
      return newArray
    }
    
    function destructivelyAddElementToEndOfArray(array, el) {
      array.push(el)
      return array 
    }
    
    function accessElementInArray (array, index) {
      return array[index]
    }
    
    function destructivelyRemoveElementFromBeginningOfArray(array) {
      array.shift();
    }
    
    function removeElementFromBeginningOfArray(array) {
      array.slice(1)
      return array
    }
    
    function destructivelyRemoveElementFromEndOfArray(array) {
      array.pop()
      return array
    }
    
    function removeElementFromEndOfArray(array) {
      array.slice(0, array.length - 1)
      return array
    }
    
    
    
    