var play_count = 0;
var computer_score = 0;
var user_score = 0;
document.getElementById('user_score').innerHTML = ''
document.getElementById('computer_score').innerHTML = ''
document.getElementById('user_finalscore').innerHTML = ''
document.getElementById('computer_finalscore').innerHTML = ''

function response_calculator() {
    play_count++

    let user_choice = document.getElementById('choice').value
    console.log(`user choice: ${user_choice}`);

    computer_choice = Math.floor(Math.random() * 3);
    console.log(`computer choice: ${computer_choice}`);
    let answer = '';

    if (user_choice == computer_choice) {
        answer = 'This is a tie, try again';
        updateScores('tie');
    }
    else {
        switch (user_choice) {
            case '0':
                if (computer_choice == 1) {
                    answer = 'You lose';
                    updateScores('cpu');
                }
                else if (computer_choice == 2) {
                    answer = 'You win';
                    updateScores('user');
                }
                break;
            case '1':
                if (computer_choice == 0) {
                    answer = 'You win';
                    updateScores('user');
                }
                else if (computer_choice == 2) {
                    answer = 'You lose';
                    updateScores('cpu');
                }
                break;
            case '2':
                if (computer_choice == 0) {
                    answer = 'You lose';
                    updateScores('cpu');
                }
                else if (computer_choice == 1) {
                    answer = 'You win';
                    updateScores('user');
                }
                break;
        }
    }

    document.getElementById('results').innerHTML = answer;
    console.log(`play count: ${play_count}`);
}

function updateScores(winner) {

    if (winner === 'cpu') {
        computer_score ++;
        console.log(`computer score is: ${computer_score}`)
    }
    else if (winner === 'user') {
        user_score ++;
        console.log(`user score is: ${user_score}`)
    }
    else {
        user_score == user_score;
        computer_score+0;
        computer_score+0;
        console.log(`user score is: ${user_score}`);
        console.log(`computer score is: ${computer_score}`);
    }
    document.getElementById('user_score').innerHTML = `User Score: ${user_score}`;
    console.log(`the user score is ${user_score}`);
    document.getElementById('computer_score').innerHTML = `Computer Score: ${computer_score}`;
    console.log(`the computer score is ${computer_score}`)

    if (play_count === 3 || play_count > 3) {
        document.getElementById('choice').innerHTML = ''
        document.getElementById('user_score').innerHTML = 'please'
        document.getElementById('computer_score').innerHTML = 'restart'
        document.getElementById('user_finalscore').innerHTML = `User Final Score: ${user_score}`;
        document.getElementById('computer_finalscore').innerHTML = `Computer Final Score: ${computer_score}`;
        play_count = 0
        return;
    }
}
