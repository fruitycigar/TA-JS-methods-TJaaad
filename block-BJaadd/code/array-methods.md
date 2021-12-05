Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

   - Parameter: 
   - Return: 
   - Example:
     ```js
     
     ```
   - `  ` 
   - 

2. `join`

   - Parameter: 
    - (optional) separator
   - Return: a string value which is a combination of all the elements within the array separated by a , in the absence of a clearly defined separator.
   - Example:
     ```js
     let flick = [`the`, `taking`, `of`, `pelham`, `1-2-3-4`];
     console.log(flick.join(' ')); // the taking of pelham 1-2-3-4
     let num = [1, 2, 3, 4];
     console.log(num.join()); // 1,2,3,4
     let animals = [`turtle`, `duck`];
     console.log(animals.join()); // turtle,duck
     ```
   - `join` is a method that takes all the elements that it is passed on to and combines them into a single string, separated by a comma in the absence of a separator parameter.
   - No, it does not mutate the original string.

3. `flat`

   - Parameter: 
    - (optional) depth parameter which defaults to 1 when not specified.
   - Return: An array which recursively integrates arrays (or objects) within arrays to the specified depth and reproduces a new array.
   - Example:
     ```js
     let num = [12, 345, [124, [1,2,3]]];
     console.log(num.flat()); // [ 12, 345, 124, [1, 2, 3] ]
     let pik = [`pen`, [[`pineapple`], [`apple`]], `long-pen`];
     console.log(pik.flat()); // [`pen`, [`pineapple`], [`apple`], `long-pen`]
     console.log(num.flat(2)); // [ 12, 345, 124, 1, 2, 3 ]
     ```
   - `flat` is a method which reproduces the original array with it's sub-arrays integrated into the main array as an element (to the depth specified in the optional parameter). 
   - No, it does not mutate the original array.
   
4. `push`

   - Parameter: (elements) which are to be added to the end of the original array.
   - Return: It pushes the specified elements into the end of the array and returns the count of the newly mutated array.
   - Example:
     ```js
     let eg = [1, 2, 3, 4];
     eg.push(5, 6, 7); // 7
     ```
   - `push` accepts a series of parameters and pushes them to the end of the array it is being passed upon, after which it returns the count of the newly mutated array that it was originally passed upon. 
   - Yes, it mutates the array beyond all recognition.
   
5. `indexOf`

   - Parameter
    - (searchTerm) which is the term whose index need to be retrieved.
    - (optional) (fromIndex) which is the index fom which you want the search to start from.
   - Return: Returns the index of the term that was entered as the parameter.
   - Example:
     ```js
     let cars = [`toyota`, `honda`, `scania`, `saab`, `holden`, `chevrolet`, `gm`, `ford`, `Lada`, `honda`, `saab`];
     console.log(cars.indexOf(`honda`)); // 1
     console.log(cars.indexOF(`toyota`, 3)); -1
     console.log(cars.indexOf(`saab`)); 3
     console.log(cars.indexOf(`saab`, 5)); 10
     ```
   - `indexOf` is a mathod that searches for the index of the term that is being searched and retreives the same. 
   - No, it does not mutate the original array.
   
6. `lastIndexOf`

   - Parameter
    - (searchTerm) the term whose last index is being retrieved.
    - (optional) (fromIndex) The point from which the method begins it's search (is counted from the right-most element of the array.) 
   - Return: 
   - Example:
     ```js
     let num = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     console.log(lastIndexOf.num(1)); // 8
     console.log(lastIndexOf.num(4,4)); 3
     console.log(lastIndexOf.num(2)); // 7
     ```
   - ` lastIndexOf` is a method that retrives the index of the last occurrence of the search term in question.
   - No, it does not mutate the array.
   
7. `includes`

   - Parameter
    - (searchTerm) the term whose occurrence is being verified.
    - (optional) (fromIndex) ther point from which you want the search to begin. 
   - Return: Returns a boolean value confirming the presence of the term that is being searched.
   - Example:
     ```js
     let arpt = [`AMD`, `JFK`, `MAD`, `BLR`, `DEL`];
     console.log(arpt.includes((`JFK`)); // true
     console.log(arpt.includes((`MUM`)); // false
     console.log(arpt.includes((`JFK`, 2)); // false
     ```
   - `includes` checks whether a given term is present within the array or not. 
   - No, it does not mutate the original array.
   
8. `reverse`

   - Parameter: none
   - Return: Returns the reversed version of the array it is being passed upon.
   - Example:
     ```js
     let seq = [`first`, `second`, `third`, `fourth`, `fifth`];
     console.log(seq.reverse()); // [ "fifth", "fourth", "third", "second", "first" ]
     ```
   - ` reverse` takes the original array and flips it upside down. First becomes last, penultimate becomes second, etc. 
   -  Yes, it doesn't just mutate the arry. It freaking destroys it.
   
9. `every`

   - Parameter: 
    - (callbackFn) - the function that will be used to determine the truthiness/falsiness of the elements within the array.
   - Return: Returns true if all the elements in the array confirms the specs defined by the functiomn, false otherwise.
   - Example:
     ```js
     let num = [1,4,6,9,23,45,87];
     let isBelow = (value) => value < 100;
     console.log(num.every(isBelow)); // true
     ```
   - ` every` returns a boolean value after checking if all the elements in the array meets the condition specfied by the function it accepts as a parameter. 
   - No mutattion here. Very sedate, well-behaved function.
   
10. `shift`

   - Parameter: (none) -  one of the best methods, ever.
   - Return: returns the first element of ther array (which it removes)
   - Example:
     ```js
     let num = [0,23,45,56];
     console.log(shift.num()); // 0
     ```
   - ` shift` removes the first element of the array (index 0) and returns the element that it removed. In other words, it is your own personal digital assassin that beheads the original array and returns the head. 
   - Yes. Mutates the original array be slashing the head.
   
11. `splice`

   - Parameter
    - (start); specifies the part from which you want the splicing to start.
    - (replaceNum) number of elements you want to replace starting from the aforementioned index.
    - (item) item to replace it with.
   - Return: Returns an array with all the elements that it removes. Pretty sweet, eh?
   - Example: 
     ```js
     let fruits = [`apple`, `orange`, `kiwi`, `avocados`, `jackfruit`];
     fruits.splice(1, 1, 'banana'); // [ "orange" ]
     fruits. splice (2, 0, `pomagranate`); // []
     console.log(fruits); // [`apple`, `banana`, `pomagranate`, `kiwi`, `avocados`, `jackfruit`]
     ```
   - ` splice` is the JavaScript equivalent of a scalpel. You can replace, insert or delete parts (or the whole) of an array with it. Extremely handy, must be used with caution. 
   - Highly destructive. It's like that back alley doctor with an ultra-sharp scalpel who can work wonders on any body that comes under his care.
   
12. `find`

   - Parameter: (callbackFn) used to determine which element to find
   - Return: The first element to satisfy the conditions specified by the function.
   - Example:
     ```js
    let random = [12,34,45,52,11,1234,34];
    console.log(random.find(element => element > 50)); // 52
    ```
   - `find` checks the array for the first element that satisfies the function and returns it. 
   - No, it does not mutate the array.
   
13. `unshift`

   - Parameter: (elements) to be added to the beginning of the array.
   - Return: Returns the length of the newly formed arry.
   - Example:
     ```js
     let exp = [1,34,3,2,7,89];
     console.log(exp.unshift(11,234,43)); // 9
     ```
   - ` unshift` adds the parameters to the beginning of the array and returns the total length of the newly formed array. 
   - This is a mutative method. It alters the original array.
   
14. `findIndex`

   - Parameter: (callbackFn)
   - Return: Returns the index of the first element to satisfy the callback function. Returns -1 otherwise.
   - Example:
     ```js
     let num = [1,23,44,456,2345,2,34,54,2344];
     console.log(num.findIndex(element => element >2000)); // 4
     ```
   - `findIndex` returns the index of the first element that satisfies the conditions specified in the callback function. 
   - No, no mutations here.
   
15. `filter`

   - Parameter: (callbackFn)
   - Return: Returns a newly formed array containing the elements that satify the conditions of the callback function.
   - Example:
     ```js
     let num = [23,234,44,2134,16,389,233];
     console.log(num.filter(elements => element > 200)) // [234, 2134, 389, 233]
     ```
   - `filter` is a method that returns a newly formed array containing those elements from the original array which fit the condition specified within the callback function. 
   - No, does not mutate the original array.
   
<!-- 16. `flat`

   - Parameter: 
   - Return: 
   - Example:
     ```js
     
     ```
   - `  ` 
   -  -->
   
17. `forEach`

   - Parameter: (callbackFn)
   - Return: Nothing, as there is generally no return statement.
   - Example:
     ```js
     let num = [1, 2, 3];
     console.log(num.forEach(element => console.log(num + 1)))); // 2   3   4
     ```
   - `forEach` is a handy function which runs the specified callback function on each of the element in the array that it is being passed on. 
   - No, does not mutate the original array in anyway.
   
18. `map`

   - Parameter: (callbackFn)
   - Return: Returns a new array with updated values.
   - Example:
     ```js
     let arr = [0,23,34,56,100];
     console.log(arr.map(num => num * 10)); // [0, 230, 340, 560, 1000]     
     ```
   - `map` is a method which passes every element in the array through the callback function and creates a new array with the resultant values. 
   - No, it does not mutate the original array.
   
19. `pop`

   - Parameter: (none)
   - Return: The element that is removes.
   - Example:
     ```js
     let pens = [`cello`, `pilot`, `reynolds`, `uniball`];
     console.log(pens.pop); // `uniball`
     ```
   - `pop` removes the last element in the array it is being passed on and returns the element that is has removed. 
   - Yes, there is mutation.
   
20. `reduce`

   - Parameter: (callbackFn) which must bhe an operation that allows the function to reduce the whole function to a single value.
   - Return: Whatever value remains at the end of the reducer function.
   - Example:
     ```js
     let num = [2,3,4,5];
     let red = (prev, curr) => prev * curr;
     console.log(num.red(reduc)); // 120
     ```
   - ` reduce` is a method that works with a user-defined 'reducer' function that is run on every element and reduces it to a single element that it then returns. 
   - No mutation here.
   
21. `slice`

   - Parameter: 
    - (optional) start
    - (optional) end
   - Return: An array with the 'sliced' portion.
   - Example:
     ```js
     let anim = [`dog`, `cat`, `iguana`, `boa`, `rat`, `gerbil`, `hamster`];
     console.log(anim.slice(1,3)); // [`cat`, `iguana`]
     ```
   - `  ` 
   - No, it does not mutate the original array.
   
22. `some`

   - Parameter: (callbackFn)
   - Return: True or false.
   - Example:
     ```js
     let elm = [22, 34, 45, 67, 49];
     console.log(elm.some(number => number % 8 === 0)); // false
     ```
   - ` some` returns true if there is at least one element in the original array that confirms to the conditions specified in the callback function. Otherwise, it returns false. 
   - No, it does not mutate the original array.