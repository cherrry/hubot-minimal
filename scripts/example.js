'use strict'

module.exports = function (robot) {

    // say 'hello world' when hear someone say hello
    robot.hear(/hello/i, function (res) {
        res.send('hello world')
    })
}
