/*
	author: Adrian Prendas Araya
	email: a6r2an@gmail.com
*/
let sudoku0 = [[0,0,0,2,6,0,7,0,1],
			   [6,8,0,0,7,0,0,9,0],
			   [1,9,0,8,3,4,5,6,0],
			   [8,2,0,1,0,0,0,4,0],
			   [0,0,4,6,0,2,9,0,0],
			   [0,5,0,0,0,3,0,2,8],
			   [0,0,9,3,0,0,0,7,4],
			   [0,4,0,0,5,0,0,3,6],
			   [7,0,3,0,1,8,0,0,0]];

let sudoku1 = [[5,3,0,0,7,0,0,0,0],
			   [6,0,0,1,9,5,0,0,0],
			   [0,9,8,0,0,0,0,6,0],
			   [8,0,0,0,6,0,0,0,3],
			   [4,0,0,8,0,3,0,0,1],
			   [7,0,0,0,2,0,0,0,6],
			   [0,6,0,0,0,0,2,8,0],
			   [0,0,0,4,1,9,0,0,5],
			   [0,0,0,0,8,0,0,7,9]];

let sudoku_easy = [[0,0,7,0,0,0,0,3,0],
				   [0,0,0,7,4,6,2,8,0],
				   [5,0,4,0,3,2,0,0,7],
				   [0,2,0,9,0,5,0,0,3],
				   [0,0,0,0,7,0,8,2,0],
				   [0,3,0,0,2,0,7,5,9],
				   [3,0,6,0,0,9,0,0,0],
				   [0,0,2,0,6,7,9,0,0],
                   [0,7,0,0,0,0,0,4,0]]; // Este es el primer sudoku

let sudoku_medium = [[0,0,6,0,2,7,9,0,5],
                     [5,0,0,6,0,0,8,0,0],
   	                 [0,0,0,0,0,5,0,0,2],
   	                 [0,0,5,0,3,0,0,0,4],
   	                 [0,0,0,2,0,8,3,0,0],
   	                 [0,3,7,0,4,6,0,0,0],
   	                 [2,0,0,3,0,0,0,0,6],
   	                 [0,7,4,0,0,9,5,0,8],
                     [0,6,0,0,7,0,0,0,0]]; // Este es el segundo sudoku

let sudoku_hard = [[0,0,0,0,0,0,0,1,0],
                   [0,0,6,0,0,0,0,2,3],
                   [0,2,0,0,3,0,4,0,0],
                   [8,0,0,0,0,5,0,0,0],
                   [0,3,0,0,1,0,0,0,4],
                   [0,0,9,6,0,0,0,0,0],
                   [0,0,0,9,0,0,7,0,0],
                   [0,1,0,0,2,0,0,4,0],
                   [5,0,0,0,0,8,0,0,0]]; // Este es el tercer sudoku



function arrayOfSudokus(){
	let arr = [];
	arr.push({sudoku0});
	arr.push({sudoku1});
	arr.push({sudoku_easy});
	arr.push({sudoku_medium});
	arr.push({sudoku_hard});
	return arr
}

module.exports ={
	arrayOfSudokus
}