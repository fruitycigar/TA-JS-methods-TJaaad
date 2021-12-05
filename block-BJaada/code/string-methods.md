Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

   - Parameter: 
   - Return: 
   - Example:
     ```js
     
     ```.
   - 

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

    - Parameter: (none)
    - Return: String value in uppercase.
    - Example:
    ```js
    let iD = `i am jason bourne.`;
    iD.toUpperCase(); // "I AM JASON BOURNE."
    let address = `rue de maison`;
    address.toUpperCase(); // "RUE DE MAISON"
    let town = `agartala`;
    town.toUpperCase(); // "AGARTALA"
    ```
    - `toUpperCase` is applied to a variable with a string value and returns it in uppercase. If variable, does not confirm to the string value type, it attempts to convert it to a string value before return it in uppercase.

3. `toLowerCase`
   - Parameter: (none)
   - Return: string value in lowercase.
   - Example:
     ```js
     let str = `I am on a mission to uplift all my people in TN.`;
     str.toLowerCase();
     let blu = `WHO DO YOU THINK YOU'RE TALKING TO?`;
     blu.toLowerCase();
     let loc = 'I am at the palace in Istanbul.';
     loc.toLowerCase();
     ```
   - `toLowerCase` returns the calling string value in lowercase.

4. `trim`
   - Parameter: (none)
   - Return: returns the calling string value devoid of whitespaces at both the beginning and the end.
   - Example:
     ```js
     let place = `  goa     `;
     place.trim();
     let num = `  213       `;
     num.trim();
     let color = `  white     `;
     color.trim();
     ```
   - `trim` returns the calling string and removes any and all empty spaces before and after the main string value.

5. `trimEnd`
   - Parameter: (none)
   - Return: returns the calling string value devoid of whitespaces towards the end.
   - Example:
     ```js
     let place = `  goa     `;
     place.trimEnd(); // `  goa`
     let num = `  213       `; 
     num.trimEnd(); // `  213`
     let color = `  white     `; 
     color.trimEnd(); // `  white`
     ```
   - `trimEnd` returns the calling string and removes any and all empty spaces after the main string value.

6. `trimStart`
   - Parameter: (none)
   - Return: returns the calling string value devoid of whitespacesbut only towards the beginning.
   - Example:
     ```js
     let place = `  goa     `;
     place.trimStart(); // `goa     `
     let num = `  213       `;
     num.trimStart(); // `213       `
     let color = `  white     `;
     color.trimStart(); // `white     `
     ```
   - `trim` returns the calling string and removes any and all empty spaces before the main string value.

7. `concat`

   - Parameter: (str, str2, str3, strN, ....)
   - Return: Returns the concatenated value of the specified strings along with the main string.
   - Example:
     ```js
     let age = `23`;
     age.concat(` is the worst age to be in. `); // "23 is the worst age to be in."

     let hello = `Hey, hey, hey!`;
     hello.concat(` lollipops, I need lollipops.`); // "Hey, hey, hey! lollipops, I need lollipops."

     let str1 = `Hot Wheels`;
     let str2 = `beat that!`;
     str.concat(', ', str2); // "Hot Wheels, beat that!"
     ```
   - `concat` returns a concatenated string value of all the parameters it has been fed without affecting the original value of any of the strings.

8. `endsWith`

   - Parameter: 
    - (string) the value with which we check if the calling string ends with.
    - (index) optional parameter that checks if the specified string value matches with the index given. It is a number data type that defaults to str.length.
   - Return: a boolean value (true or false) depending on whether the string ends with the parameter or not.
   - Example:
     ```js
     let val = `concubine`;
     val.endsWith(`bine`); // true

     let bus = `toyota`;
     bus.endsWith(`ota`); // true

     let car = `I have a Maybach.`;
     car.endsWith(`bach`, 17); // false
     
     ```
   - `endsWith()` checks if the parameter that it receives matches with the end of the calling string.

9. `includes`

   - Parameter
    - (string) - string data type
    - (position) - optional paramter that defaults to 0 (is a number data type).
   - Return: true or false depending on whether the condition checks out or not.
   - Example:
     ```js
     let eg = `Dehydrate the zaluba computations!`;
     eg.includes(`zaluba`); // true

     let str = `This is not your home.`;
     str.includes(`Not`); // false

     let stat = `He is currently speaking to Zhukov`;
     stat.includes(`Zhukov`); // true
     ```
   - `includes` checks if the string that it is given is contained within the calling string and returns a boolean confirming the same.

10. `indexOf`

   - Parameter: 
    - (searchValue) - string data type
    - (position) - optional number data type, defaults to 0.
   - Return: The position(index) of the specified string value.
   - Example:
     ```js
     `dune`.indexOf(`n`); // 2
     `chani`.indexOf(`z`); // -1
     `nahasapeemapetilon`.indexOf(`a`, 4); // 5 
     ```
   - `indexOf` scans the string value for the position of the searchValue that it is fed and returns the index of the same.

11. `lastIndexOf`

   - Parameter: 
    - (searchValue) - string data type
    - (fromIndex) - optional number data type
   - Return: Returns the index of the last occurence of the specified string, but searches leftward from the last chaarcter.
   - Example:
     ```js
     `falcon`.lastIndexOf('l'); // 2
     `malayalam`.lastIndexOf('m'); // 8
     `malayalam`.lastIndexOf('m', 4); // 0
     ```
   - `lastIndexOf` looks for the position of the final occurence of the specified string value, but begins the search leftward from the final character.

12. `padEnd`

   - Parameter:
    - (targetLength) - number data type
    - (padString) - optional string data type
   - Return: returns the calling string with adequate padding (empty or otherwise) to match the target length.
   - Example:
     ```js
     let name = `aparajith`;
     name.padEnd(23); // "aparajith              "

     let str = `dogg`;
     str.padEnd(45, 'o'); // "doggooooooooooooooooooooooooooooooooooooooooo"
     ```
   - 

13. `padStart`

   - Parameter
    - (targetLength) - number data type
    - (padString) - optional string data type
   - Return: Returns a new string vaue which is the calling string value but with length adjusted using whitespaces or other characters.
   - Example:
     ```js
     `buggy`.padStart(7); / "  buggy"
     `fremen`.padStart(10, 'w'); // "wwwwfremen"
     `boogaloo`. padStart(20, '*'); // "************boogaloo"
     ```
   - 

14. `repeat`
   - Parameter (count) - number data type
   - Return: Returns a new string value containing the specified number of copies of said string.
   - Example:
     ```js
     `loo`.repeat(2); // `looloo`
     `saab`.repeat(1; // `saab`
     `bahasa`.repeat(3); // `bahasabahasabahasa`
     ```
   - 

15. `replace`

   - Parameter
    - (substr) - string data type
    - (newsubstr) - string data type
   - Return: The original string, but with the specified sub string replaced with the new sub-string.
   - Example:
     ```js
     let sent = `Dogs hate frogs.`;
     sent.replace(`Dogs`, `Cats`); // "Cats hate frogs."

     let phrase = `We are all humans.`;
     phrase.replace(`humans`, `dogs`); "We are all dogs."
     
     let cats = `All the cats don't get along well with those other cats over there.`;
     cats.replace(`cats`, `ferrets`); // "All the ferrets don't get along well with those other cats over there." 
     ```
   - 

16. `slice`

   - Parameter
    - (beginIndex) - number data type
    - (endIndex) - optional number data type
   - Return: Returns a portion of the string as specified by the input.
   - Example:
     ```js
     `dune is a good book`.slice(0, 3); // "dune"
     `Wolf Bitzer is an idiot`.slice(5); // "Bitzer is an idiot"
     `We are done.`.slice(-3); // "ne."
     ```
   - 

17. `split`

   - Parameter
    - (seperator)  - optional, and is usually a string value.
    - (limit) - optional, number data type
   - Return: An array with each element being a part of the original string, broken down as per the seperator and stopped using the limit.
   - Example:
     ```js
     `I am here`.split(); // ["I am here."]
     `I am here`.split(''); // [ "I", " ", "a", "m", " ", "h", "e", "r", "e" ]
     `I am here`.split(' ', 2);; // [ "I", "am" ]
     ```
   - 

18. `substring`

   - Parameter
    - (indexStart) - number data type
    - (indexEnd) - (optional) number data type
   - Return: Returns a portion of the calling string, as specified by the index that are given as inputs.
   - Example:
     ```js
     'Arrakis'.substring(3); // "akis"
     'Arrakis'.substring(3, 6); // "aki"
     `Bene Gesserit`.substring(9); // "erit"
     ```
   - 