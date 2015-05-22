'use strict'

module.exports = function (robot) {

    // say 'hello world' when hear someone say hello
    robot.hear(/hello/i, function (res) {
        // send a message to the room receive this message
        res.send('world')
    })

    /*
    // will respond to 'hubot make me a sandwich'
    robot.respond(/make me a sandwich/i, function (res) {
        // using 'reply' will include the name of sender
        res.reply('do it yourself')
    })
    */

    /*
    // alternate response when hearing sudo together
    robot.respond(/sudo make me a sandwich/i, function (res) {
        res.reply('okay')
    })
    */

    /*
    // define some random responses
    var randomResponse = [
        'something',
        'hello',
        '...',
        'I refuse :angry:'
    ];
    robot.respond('say something', function (res) {
        // choose on of the response from `randomResponse`
        var response = res.random(randomResponse)
        // send it back
        res.send(response)
    })
    */
}
