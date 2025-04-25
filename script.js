class HashMap {
    //no contructor function required, may make sense to implement one later, but for now? nawwwwwwww
    hashMapBuckets = [];
    loadFactor = 0.75;
    capacity = 16;

    capacityThreshold = this.capacity * this.loadFactor;

    setCalls = 0;
    collisions = 0;

    hash = (key) => {
        let hashCode = 0;
       
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        
        // console.log(`${key}: ${hashCode}`);
        return hashCode;
    };

    set = (key, value) => {
        let keyQuery = this.hash(key);
        let arrayLength = this.length();
        this.setCalls++;

        if (arrayLength === this.capacityThreshold) {
            console.log(`Array length: ${arrayLength} === ${this.capacityThreshold}!!!`);
            this.capacity *= 2;
            this.capacityThreshold = this.capacity * this.loadFactor;
            console.log(this.capacity, this.capacityThreshold);
        }

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

        this.hashMapBuckets.forEach(bucket => {
            if (bucket.name === key) {
                hasKey = true;
            };
        });

        return hasKey;
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
    
    clear = () => {
        this.hashMapBuckets = [];
        this.capacity = 12;
        this.capacityThreshold = this.capacity * this.loadFactor;
    }
    
    checkSetCalls = () => {
        return this.setCalls;
    };
    
    checkCollisions = () => {
        return this.collisions;
    };

    printMap = () => {
        return this.hashMapBuckets;
    };

    logCapacityThreshold = () => {
        console.log(this.capacityThreshold);
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
map.set('asdpple', 'red')
map.set('zanana', 'yellow')
map.set('cavvrot', 'orange')
map.set('dogdasd', 'brown')
map.set('elephanfgggsdfsdfasdgt', 'gray')
map.set('frasdg', 'green')
map.set('gsdrapmme', 'purple')
map.set('faaaaaaammmmmhat', 'black')
map.set('gce crmmmeam', 'white')
map.set('fackemmmt', 'blue')
map.set('ditbzmmme', 'pink')
map.set('siobbbn', 'golden')
map.set('applbbbe', 'red')
map.set('bananaznxcv', 'yellow')
map.set('cvarrotttt', 'orange')
map.set('doggarsdasd', 'brown')
map.set('ezxcepxcvhant', 'gray')
map.set('froge', 'green')
map.set('grapesqqdasd', 'purple')
map.set('aasaaadasdhat', 'black')
map.set('icadsasfe cream', 'white')
map.set('jackz et', 'blue')
map.set('ki  g dte', 'pink')
map.set('lio hhn', 'golden')
map.set('asaf dphhple', 'red')
map.set('zanaasd hhhna', 'yellow')
map.set('cavvro hht', 'orange')
map.set('dogdgaashhhd', 'brown')
map.set('elephanhhfgggsdfsdfasdgt', 'gray')
map.set('frashhhhdg', 'green')
map.set('gsdrasdasdaphhe', 'purple')
map.set('hhahhht', 'blacfk')
map.set('gce cafgadfgshsgreaahadfgm', 'white');
map.set('fackefsdfsdft', 'blue');
map.set('ddasdzxcite', 'pink');
map.set('sziasdasdasdon', 'golden');
map.set('zelepxvnxcvbhanhhfgggsdfsdfasdgt', 'gray');
map.set('sfrashhhhdg', 'green');
map.set('fgsdraphhe', 'purple');
map.set('jjjjhahhht', 'blacfk');
map.set('fdaasdgce creaahadfgm', 'white');
map.set('adasdjjjfackefsdfsdft', 'blue');
map.set('jjnjjjddasdzxcite', 'pink');
map.set('namkszion', 'golden');
map.set('a', 'golden');
map.set('chunker', 'golden');
map.clear();
map.set('chunker', 'golden');







