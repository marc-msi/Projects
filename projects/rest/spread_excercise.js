//Variable Number of Arguements//
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);


//findMin//
const findMin = (...args) => Math.min(...args);

//mergeObjects//
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//double and return Args//
const doubleAndReturnArgs =(arr, ...argue) =>[...arr, argue.map(v => v*2)];

//slice and dice//
const removeRandom = items =>{
    let idx =Math.floor(Math.random()*items.length);
    return[...items.slice(0,idx), ...items.slice(idx+1)];
}

const extend= (array1, array2) =>{
    return [...array1, ...array2];
}

const addKeyVal =(obj, key, val)=> {
    let newObj={...obj}
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) =>{
    let newObj= {...obj}
    delete newObj[key]
    return newObj;
}

const combine=(obj1, obj2) =>{
    return {...obj1, ...obj2};
}

const update = (obj, key, val) =>{
    let newObj= {...obj}
    newObj[key]=val
    return newObj
}
