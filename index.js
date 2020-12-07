import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final



const winnerArray = [];
const stageArray = [];

function whoWon(array) {
    for (let i=0; i<array.length; i++){
        if (array[i]['Home Team Goals'] > array[i]['Away Team Goals']){
            winnerArray.push(array[i]['Home Team Name']);
            fifaData[i].Winner = array[i]['Home Team Name'];
        } else if (array[i]['Home Team Goals'] < array[i]['Away Team Goals']){
            winnerArray.push(array[i]['Away Team Name']);
            fifaData[i].Winner = array[i]['Away Team Name'];
        } else if (array[i]['Home Team Goals'] === array[i]['Away Team Goals']){
            let winner = array[i]['Win conditions'];
            let finalWinner = winner.substr(0,winner.indexOf(' '));
            winnerArray.push(finalWinner);
            array[i].Winner = finalWinner;
        }
    }
}

function findStage(array) {
    for ( let i=0; i<array.length; i++){
        if (array[i].Stage === 'Final') {
            stageArray.push(array[i]);
        }
    } 
}
//console.log(findStage(fifaData));
//console.log(whoWon(fifaData));
//console.log(winnerArray);
//console.log(stageArray);


//console.log(stageArray[stageArray.length - 1]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

//console.log(stageArray[stageArray.length - 1]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

//console.log(stageArray[stageArray.length - 1]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final

//console.log(stageArray[stageArray.length - 1]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */

//console.log(stageArray[stageArray.length - 1]["Winner"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/



function getFinals(array) {
    let finalTeams = [];
    for ( let i=0; i<array.length; i++){
        if (array[i].Stage === 'Final') {
            finalTeams.push(array[i]);
        }
    } 
    return finalTeams
}

//console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callBack) {
    let years = [];
    let finalYears = callBack(array);
    console.log(finalYears);
    for ( let i=0; i<finalYears.length; i++){
        years.push(finalYears[i].Year);
        }
    return years;
}

//console.log(getYears(fifaData, getFinals));




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callBack) {
    let winners = [];
    let finalTeams = callBack(array);
    for (let i=0; i<finalTeams.length; i++){
        if (finalTeams[i]['Home Team Goals'] > finalTeams[i]['Away Team Goals']){
            winners.push(finalTeams[i]['Home Team Name']);
            fifaData[i].Winner = finalTeams[i]['Home Team Name'];
        } else if (finalTeams[i]['Home Team Goals'] < finalTeams[i]['Away Team Goals']){
            winners.push(finalTeams[i]['Away Team Name']);
            fifaData[i].Winner = finalTeams[i]['Away Team Name'];
        } else if (finalTeams[i]['Home Team Goals'] === finalTeams[i]['Away Team Goals']){
            let winner = finalTeams[i]['Win conditions'];
            let finalWinner = winner.substr(0,winner.indexOf(' '));
            winners.push(finalWinner);
            array[i].Winner = finalWinner;
        }
    }
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, callBack1, callBack2) {
    let inThisYear = [];
    let years = callBack1(array);
    let winners = callBack2(array);
    for (let i = 0; i<years.length; i++) {
        inThisYear.push('In ' + years[i] + ', ' + winners[i] + ' won the world cup!');
    }
    return inThisYear;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback) {
    let average = 0;
    let goalSum = [];
    callback.forEach(item => {
        goalSum.push(item['Home Team Goals']);
        goalSum.push(item['Away Team Goals']);
    });
    let goalsAverage = goalSum.reduce((total, item) => {
        return (total + item);
    }, 0);
    average = Math.round(goalsAverage / goalSum.length * 2 * 100) / 100;
    return `${average}`;
}

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
