let drinkStorage = new HashStorageFunc();

//Class-function
function HashStorageFunc() {
    let self = this;
    this.hash = [];

    self.addValue = function (key,value) {
        this.hash[key] = value;
    }

    self.getValue = function (key) {
        return this.hash[key];
    }

    self.deleteValue = function (key) {
        if (this.hash[key]) {
            delete this.hash[key];
            return true;
        } else {
            return false;
        }
    }

    self.getKeys = function () {
        return Object.keys(this.hash);
    }

    self.viewHash = function () {
        console.log(self.hash);
    }
}
