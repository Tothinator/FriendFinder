
module.exports = function (friends, newFriend) {

    var bestFriend;
    var lowestScore = -1;

    for (var i = 0; i < friends.length; i++) {

        var score = 0;
        // console.log(friends[i]);
        for (var j = 0; j < 10; j++) {
            score = Math.abs(friends[i].scores[j] - newFriend.scores[j])
        }
    }

        if (score < lowestScore || lowestScore === -1) {
            lowestScore = score;
            bestFriend = i;
        }
    }

    return bestFriend;
}