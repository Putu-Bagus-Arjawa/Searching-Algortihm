# Searching-Algortihm
Searching algorithm is a method to search a value from bunch of data.

First algorithm is Linear Search

Linear search is searching data that have sorted from indeks 0 to n,  time complexity of this algorithm is O(n).
This algorithm is work by search data by looping, and then each indeks from data will compared by target value. If the value of target same with array, then it will return true value.

Second algorithm is Binary Search

Binary search, compared target with middle value of data, time compexity of this algorithm if goes best case O(1) and if its worst case or average case, then the time complexity is  O(log n), swiftly than linear search.

Mid is a variable with value (start+ end)/2  functioned as an index of array that will used wthen the array get compared by the target value.
Start value is an 0 indeks or early array's index. Whereas, end value is the last index of an array. Later in Binary Search, will do an iteration of while start smaller or same with the value of end. If not found, then the function will return "Data not Found"

