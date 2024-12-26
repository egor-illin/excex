let columnSet = {
    'name': true,
    'age': true,
    'email': true
};

let column = 'address';

if (!(column in columnSet)) {
    // If column is not in columnSet, add it
    columnSet[column] = true;
}

console.log(columnSet);
// Output: { name: true, age: true, email: true, address: true }
