var initArray=[[0,0,0,2,6,0,7,0,1],[6,8,0,0,7,0,0,9,0],[1,9,0,0,0,4,5,0,0],[8,2,0,1,0,0,0,4,0],
[0,0,4,6,0,2,9,0,0],[0,5,0,0,0,3,0,2,8],[0,0,9,3,0,0,0,7,4],[0,4,0,0,5,0,0,3,6],[7,0,3,0,1,8,0,0,0]];

var outputArray=initArray;
//console.log(initArray);

/* function to return 0's indexs*/

function getIndex(arr){
    var dumArr= new Array();
for(let i=0;i<arr.length;i++){  
    for(j=0;j<9;j++){
        if(arr[i][j]==0){
            dumArr.push([i,j]);
        }
    }
}
return dumArr;
}
//console.log(getIndex(initArray));
var solveArr=getIndex(initArray) // solve Array contains empty/0's indexs

/* to check rows if element fits or not*/
function checkRow(initArray,row,value){
for (let i=0;i<9;i++){
if(initArray[row][i]==value){
    return false;    // match found in row should return false;
}
}
return true;
} 
function checkColumn(initArray,col,value){
   for (let i=0;i<9;i++){
    if(initArray[i][col]==value){
        return false;    // match found in column should return false;
    }
    }
    return true;
    } 
function checkSquare(initArray,row,column,value){
// Save the upper left corner
        var columnCorner = 0,
            rowCorner = 0,
            squareSize = 3;
        // Find the left-most column
        while(column >= columnCorner + squareSize) {
            columnCorner += squareSize;
        }
        
        // Find the upper-most row
        while(row >= rowCorner + squareSize) {
            rowCorner += squareSize;
        }
        
        // Iterate through each row
        for(var i = rowCorner; i < rowCorner + squareSize; i++) {
            // Iterate through each column
            for(var j = columnCorner; j < columnCorner + squareSize; j++) {
            // Return false is a match is found
            if(initArray[i][j] === value) {        
                return false;
            }
            }
        }
        // If no match was found, return true
        return true;
}
       
    

// checking for the values in row and column and returning respective Flag arrays.
var rowFlag= new Array();
var colFlag= new Array();
var squareFlag= new Array();
for(var i=0;i<solveArr.length;i++){
let row=solveArr[i][0];
let column=solveArr[i][1];
let dumrowFlag= new Array();
let dumcolFlag= new Array();
let dumsquareFlag= new Array();

for(var j=1;j<=9;j++){
    if(checkRow(initArray,row,j))
    dumrowFlag.push(1);
    else
    dumrowFlag.push(0);

    if(checkColumn(initArray,column,j))
    dumcolFlag.push(1);
    else
    dumcolFlag.push(0);
    
    if(checkSquare(initArray,row,column,j))
    dumsquareFlag.push(1);
    else
    dumsquareFlag.push(0);
    }    
rowFlag.push(dumrowFlag);
colFlag.push(dumcolFlag);
squareFlag.push(dumsquareFlag);
}

// finding the correct values and inserting them in the initArray//

    for(let i=0;i<rowFlag.length;i++){
        for(let j=0;j<9;j++){
            if(rowFlag[i][j]==1&&colFlag[i][j]==1&&squareFlag[i][j]==1)
            {
                let fvalue=j+1;
               outputArray[solveArr[i][0]][solveArr[i][1]]=fvalue;
            }
        }

    }

console.log(rowFlag);
console.log(colFlag);
console.log(squareFlag);
console.log(outputArray);
