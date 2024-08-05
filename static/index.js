const inputField = document.getElementById("input_field");
const inputButton = document.getElementById("input_button");
const outputField_list = document.getElementsByClassName("scrolling-box");
const outputField = outputField_list[0];
var outputNum = 1;
var rdyForRow = false;
var rdyForCol = false;
var row = 0;
var col = 0;




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



function printOutput(content){
    console.log(inputField.value + outputNum)
    outputField.innerHTML += '<output_line id="' + outputNum + '">' + content + '</output_line>'
    outputNum++;
}


// import random

// Board for holding ship locations
HIDDEN_BOARD = []
for(let i = 0; i < 8; i++){
    HIDDEN_BOARD.push([])
    for(let j = 0; j < 8; j++){
        HIDDEN_BOARD[i].push(" ")
    }
}
// console.log(HIDDEN_BOARD)
//  Board for displaying hits and misses
GUESS_BOARD = [];
for(let i = 0; i < 8; i++){
    GUESS_BOARD.push([])
    for(let j = 0; j < 8; j++){
        GUESS_BOARD[i].push(" ")
    }
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

inputButton.addEventListener('click', function (e) {
    if(rdyForRow){
        row = inputField.value - 1;
        if(![0, 1, 2, 3, 4, 5, 6, 7].includes(row)){
            printOutput('Not an appropriate choice, please select a valid row')
            printOutput("Enter the row of the ship: ")
            return;
        }
        rdyForRow = false;
        printOutput("Enter the column of the ship: ")
        rdyForCol = true;
        inputField.value = "";
        outputField_list.scrollTop = outputField_list.scrollHeight;
        return;
    }
    if(rdyForCol){   
        col_let = inputField.value.toUpperCase();
        if(!["A", "B", "C", "D", "E", "F", "G", "H"].includes(col_let)){
            printOutput('Not an appropriate choice, please select a valid column')
            printOutput("Enter the column of the ship: ")
            return;
        }
        column = letters_to_numbers[col_let]
        rdyForCol = false;
        inputField.value = "";
        if(GUESS_BOARD[row][column] == "-" || 
            GUESS_BOARD[row][column] == "X"){
                printOutput("You guessed that one already.")
        }
        else if(HIDDEN_BOARD[row][column] == "X"){
                printOutput("Hit")
                GUESS_BOARD[row][column] = "X"
                turns -= 1
            }
            else{
                printOutput("MISS!")
                GUESS_BOARD[row][column] = "-"
                turns -= 1
            }
            if(count_hit_ships(GUESS_BOARD) == 5){
                printOutput("You win!")
                // break;
            }
            printOutput("You have " + turns + " turns left")
            if(turns == 0){
                printOutput("You ran out of turns")
            }
            print_board(GUESS_BOARD)
            rdyForRow = true;
            printOutput("Enter the row of the ship: ");
            outputField_list.scrollTop = outputField_list.scrollHeight;
    }
    console.log("Row = " + row + ".  Column = " + column);
});
 

create_ships(HIDDEN_BOARD)
turns = 10
// while(turns > 0){
printOutput('Guess a battleship location')
print_board(GUESS_BOARD)
printOutput("Enter the row of the ship: ");
rdyForRow = true;
outputField_list.scrollTop = outputField_list.scrollHeight;





   
// }

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

// computer create 5 ships
function create_ships(board){
    // console.log("Creating Ships...")
    for(let ship = 0; ship <= 5; ship++){
        // console.log("createing ship #" + ship)
        var ship_row = Math.floor(Math.random()*7);
        var ship_column = Math.floor(Math.random()*7);
        // console.log(ship_row + "," + ship_column)
        // while(board[ship_row][ship_column] == "X"){
        //     ship_row, ship_column = get_ship_location()
        // }
        board[ship_row][ship_column] = "X"
    }
    console.log("Finish creating ships.")
    print_board(board)
}

// function get_ship_location(){

    // row = input("Enter the row of the ship: ").upper()
    // while(!row in "12345678"){
    //     printOutput('Not an appropriate choice, please select a valid row')
    //     row = input("Enter the row of the ship: ").upper()
    // }
    // column = input("Enter the column of the ship: ").upper()
    // while(!column in "ABCDEFGH"){
    //     printOutput('Not an appropriate choice, please select a valid column')
    //     column = input("Enter the column of the ship: ").upper()
    // }
    // return [int(row) - 1, letters_to_numbers[column]]
// }

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


