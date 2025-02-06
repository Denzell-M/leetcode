/*
2703. Return Length of Arguments Passed
Easy
Companies
Write a function argumentsLength that returns the count of arguments passed to it.

 

Example 1:

Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.

Example 2:

Input: args = [{}, null, "3"]
Output: 3
Explanation: 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.

 

Constraints:

    args is a valid JSON array
    0 <= args.length <= 100

*/

type JSON2703Value = null | boolean | number | string | JSON2703Value[] | { [key: string]: JSON2703Value };

function argumentsLength(...args: JSON2703Value[]): number {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */