function groupBy(arr, key) {

    if (!Array.isArray(arr) || arr.length == 0) {
        return {}
    }

    result = {}

    for (i = 0; i < arr.length; i++){
        let value = arr[i][key]
        if(!result[value]){
            result[value] = []
        }
            result[value].push(arr[i])
         
    }

    console.log(result)
    
    // Your implementation
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');





function groupBy1(arr, key) {
  if (!Array.isArray(arr) || arr.length === 0) return {};

  return arr.reduce((result, item) => {
    const value = item[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(item);

    return result;
  }, {});
}
