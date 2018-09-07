class player {
    //               default parameter
    //                      |
    //                      V
    constructor(name = "unknown"){
        this.name = name
    }

    getName(){
        return this.name
    }
}
module.exports = player