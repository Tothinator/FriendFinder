
module.exports = function (friends, newFriend) {

    var bestFriend;
    var highestScore = 0;

    for (var i = 0; i < friends.length; i++) {

        var score = 0;
        console.log(friends[i]);
        for (var j = 0; j < 10; j++) {

            if (friends[i].scores[j] === newFriend.scores[j]){
                score++;
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestFriend = i;
        }
    }

    return bestFriend;
}