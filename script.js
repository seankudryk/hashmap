class HashMap {
    //no contructor function required, may make sense to implement one later, but for now? nawwwwwwww
    hashMapBuckets = [];
    loadFactor = 0.75;
    capacity = 16;

    setCalls = 0;
    collisions = 0;

    hash = (key) => {
        let hashCode = 0;
       
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 21;
        }
        
        // console.log(`${key}: ${hashCode}`);
        return hashCode;
    };

    set = (key, value) => {
        let keyQuery = this.hash(key);
        this.setCalls++;

        if (this.hashMapBuckets[keyQuery]) {
            console.log(`COLLISION!!!!!! ${this.hashMapBuckets[keyQuery].name}, THIS VALUE WILL BE UPDATED`);
            this.hashMapBuckets[keyQuery].name = key;
            this.hashMapBuckets[keyQuery].personality = value;
            this.collisions++;
        } else {
            this.hashMapBuckets[keyQuery] = new MapBucket(key, value);
        }
    };
    
    
    get = (key) => {
        let currentHashMap = this.hashMapBuckets.filter(fullBucket => fullBucket);
        let value = null; 
        
        currentHashMap.forEach(bucket => {
            // console.log(bucket.personality);
            if (bucket.name === key) {
                value = bucket.personality;
            } 
        })
        
        if (value) {
            return value;
        } else {
            return null;
        }
    };
    
    has = (key) => {
        let hasKey = false;

        this.currentHashMap.forEach(bucket => {
            if (bucket) {};
        });
    };
    
    remove = (key) => {
        
    }
    
    length = () => {
        let arrayLength = 0;
        let currentHashMap = this.hashMapBuckets.filter(fullBucket => fullBucket);
        
        for (let i = 0; currentHashMap[i]; i++) {
            arrayLength++; 
        };
        return arrayLength;
    };
    
    checkSetCalls = () => {
        return this.setCalls;
    } 
    
    checkCollisions = () => {
        return this.collisions;
    }

    printMap = () => {
        return this.hashMapBuckets;
    };
};

class MapBucket {
    constructor (name, personality) {
        this.name = name;
        this.personality = personality;
    }
}

const map = new HashMap;

map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')

console.log(map.length()); //should return 14 (17 .set calls in total, but 3 were collisions);
// console.log(map.printMap());
// console.log(`Set Calls: ${map.checkSetCalls()}`);
// console.log(`Collisions: ${map.checkCollisions()}`);
console.log(map.get("jacket"));





