const inputField = document.getElementById("input_field");
const inputButton = document.getElementById("input_button");
const outputField_list = document.getElementsByClassName("scrolling-box");
const outputField = outputField_list[0];
var outputNum = 1;




// function fetchData() {
//     fetch('http://127.0.0.1:5000/data')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log('Response data:', responseData);
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }
// fetchData()
// function printOutput(content){
//     console.log(inputField.value + outputNum)
//     outputField.innerHTML += '<output_line id="' + outputNum + '">' + content + '</output_line>'
//     outputNum++;
// }


// import random

// Board for holding ship locations
HIDDEN_BOARD = []
for(let i = 0; i < 8; i++){
    HIDDEN_BOARD.push([])
    for(let j = 0; j < 8; j++){
        HIDDEN_BOARD[i].push(" ")
    }
}
//  Board for displaying hits and misses
GUESS_BOARD = [];
for(let i = 0; i < 8; i++){
    GUESS_BOARD.push([])
    for(let j = 0; j < 8; j++){
        GUESS_BOARD[i].push(" ")
    }
}

function print_board(board){
    var outputString = "";
    outputString += "&nbsp&nbspA B C D E F G H<br>";
    outputString += "&nbsp&nbsp+-+-+-+-+-+-+-+<br>";
    for(let i = 0; i < board.length; i++){
        outputString += (i + 1) + "|";
        for(let j = 0; j < board[i].length; j++){
            outputString += board[i][j] + "|";
        }
        outputString += "<br>"
    }
    printOutput(outputString);
}


letters_to_numbers = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4,
    'F': 5,
    'G': 6,
    'H': 7
}


// create_ships(HIDDEN_BOARD)
turns = 10
// while(turns > 0){
// print('Guess a battleship location')
print_board(GUESS_BOARD){
    row, column = get_ship_location()
    if(GUESS_BOARD[row][column] == "-"){
        print("You guessed that one already.")
    }
    else if(HIDDEN_BOARD[row][column] == "X"){
        print("Hit")
        GUESS_BOARD[row][column] = "X"
        turns -= 1
    }
    else{
        print("MISS!")
        GUESS_BOARD[row][column] = "-"
        turns -= 1
    }
    if(count_hit_ships(GUESS_BOARD) == 5){
        print("You win!")
        break
    }
    console.log("You have " + str(turns) + " turns left")
    if(turns == 0){
        print("You ran out of turns")
    }
}

// computer create 5 ships
function create_ships(board){
    for(let ship = 0; ship < 5; ship++){
        var ship_row = Math.random(7);
        var ship_column = Math.random(7);
        while(board[ship_row][ship_column] == "X"){
            ship_row, ship_column = get_ship_location()
        }
        board[ship_row][ship_column] = "X"
    }
}

function get_ship_location(){
    row = input("Enter the row of the ship: ").upper()
    while(!row in "12345678"){
        print('Not an appropriate choice, please select a valid row')
        row = input("Enter the row of the ship: ").upper()
    }
    column = input("Enter the column of the ship: ").upper()
    while(!column in "ABCDEFGH"){
        print('Not an appropriate choice, please select a valid column')
        column = input("Enter the column of the ship: ").upper()
    }
    return int(row) - 1, letters_to_numbers[column]
}

// check if all ships are hit
function count_hit_ships(board){
    count = 0
    for(row in board){
        for(column in row){
            if(column == "X"){
                count += 1
            }
        }
    }
    return count
}


