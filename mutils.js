////////////////////////////////
//Utility Functions
//Created by Alex Merced
////////////////////////////////

class Rand {
    static num(num) {
        return Math.floor(Math.random() * num);
    }

    static index(arr) {
        return Rand.num(arr.length);
    }

    static range(low, high) {
        let num = low - 1;
        while (num < low || num > high) {
            num = Rand.num(high);
        }
        return num;
    }
}

/////////////////
//PowerSet
//Purpose: Leveraging the benefits of sets and arrays
/////////////////

class MSet extends Set {
    isSuperset(subset) {
        for (let elem of subset) {
            if (!this.has(elem)) {
                return false;
            }
        }
        return true;
    }

    union(setB) {
        return new MSet([...this, ...setB]);
    }

    intersection(setB) {
        let _intersection = new Set();
        for (let elem of setB) {
            if (this.has(elem)) {
                _intersection.add(elem);
            }
        }
        return new MSet([..._intersection]);
    }

    symmetricDifference(setB) {
        let _difference = new Set(this);
        for (let elem of setB) {
            if (_difference.has(elem)) {
                _difference.delete(elem);
            } else {
                _difference.add(elem);
            }
        }
        return new MSet([..._difference]);
    }

    difference(setB) {
        let _difference = new Set(this);
        for (let elem of setB) {
            _difference.delete(elem);
        }
        return new MSet([..._difference]);
    }
}

////////////////////////////////
//SUPER ARRAY
//Created by Alex Merced
////////////////////////////////

class MArray extends Array {
    random() {
        const randomIndex = Math.floor(Math.random() * this.length);

        const RandomValue = this[randomIndex];
        return RandomValue;
    }

    remove(callback) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i)) {
            } else {
                newArray.push(this[i]);
            }
        }
        return new MArray(...newArray);
    }

    undupe() {
        return new MArray(...new Set(this));
    }

    randElim() {
        return this.splice(Rand.index(this), 1);
    }

    leaveOne() {
        const newArray = [];
        while (this.length > 1) {
            newArray.push(this.randElim()[0]);
        }
        return new MArray(...newArray);
    }

    leaveSome(num) {
        const newArray = [];
        while (this.length > num) {
            newArray.push(this.randElim()[0]);
        }
        return new MArray(...newArray);
    }

    findRemove(value) {
        return this.splice(
            this.findIndex((val) => val === value),
            1
        );
    }

    addLength(length, value) {
        while (this.length < length) {
            this.push(value);
        }
        return this;
    }

    lessLengthRight(length) {
        const removed = [];
        while (this.length > length) {
            removed.push(this.pop());
        }
        return new MArray(...removed);
    }

    lessLengthLeft(length) {
        const removed = [];
        while (this.length > length) {
            removed.push(this.shift());
        }
        return new MArray(...removed);
    }

    someMore(callback, number) {
        let counter = this.filter(callback).length;
        return counter >= number;
    }

    everyLess(callback, number) {
        let counter = this.remove(callback).length;
        return counter <= number;
    }

    mapToObject(callback) {
        const newObj = {};
        for (let i = 0; i < this.length; i++) {
            const propToBe = callback(this[i], i);
            if (propToBe instanceof Array && propToBe.length >= 2) {
                newObj[propToBe[0]] = propToBe[1];
            }
        }
        return newObj;
    }

    mapToMap(callback) {
        const newMap = new Map();
        for (let i = 0; i < this.length; i++) {
            const propToBe = callback(this[i], i);
            if (propToBe instanceof Array && propToBe.length >= 2) {
                newMap.set(propToBe[0], propToBe[1]);
            }
        }
        return newMap;
    }

    mapToSet(callback) {
        const newSet = [];
        for (let i = 0; i < this.length; i++) {
            newSet.push(callback(this[i], i));
        }
        return new Set(newSet);
    }

    mapToUnique(callback) {
        const newSet = [];
        for (let i = 0; i < this.length; i++) {
            newSet.push(callback(this[i], i));
        }
        return new MArray(...new Set(newSet));
    }

    squish() {
        const removedValues = [];
        removedValues.push(this.shift());
        removedValues.push(this.pop());
        return new MArray(...removedValues);
    }

    shuff() {
        const original = new MArray(...this);
        const shuffled = [];
        for (let i = 0; i < this.length; i++) {
            shuffled.push(original.randElim());
        }

        return new MArray(shuffled.flat());
    }

    toStrings() {
        return this.map((value) => String(value));
    }

    toNums() {
        return this.map((value) => Number(value));
    }

    toBools() {
        return this.map((value) => Boolean(value));
    }

    iPop() {
        const newArr = [...this];
        newArr.pop();
        return new MArray(...newArr);
    }

    iShift() {
        const newArr = [...this];
        newArr.shift();
        return new MArray(...newArr);
    }

    iPush(value) {
        const newArr = [...this];
        newArr.push(value);
        return new MArray(...newArr);
    }

    iUnshift(value) {
        const newArr = [...this];
        newArr.unshift(value);
        return new MArray(...newArr);
    }

    iSplice(index, amount) {
        const newArr = [...this];
        newArr.splice(index, amount);
        return new MArray(...newArr);
    }
}

module.exports = {
    Rand,
    MSet,
    MArray,
};
