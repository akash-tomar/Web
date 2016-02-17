function game() {

    //console.log("hey");
    GamePlay();

    function GamePlay() {
        //console.log("gameplay");
        var matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        var vacantPlaces = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
        var score;
        var ls=window.localStorage;
        if(ls.getItem('score')) {
            score=ls.getItem('score');   
        } else {
            score=0;   
        }
        //console.log("dingdingding");


        for (var i = 0; i < 2; i++) {
            var pos = newTilePos();
            //console.log(pos);
            var value = newValueGen();
            //console.log(value);
            placeTheTile(pos, value);
        }
        printBoard();
        // var newGame=new TwoZeroFourEight();
        window.onkeypress = function(e) {

            if (String.fromCharCode(e.keyCode) === 'w') {
                console.log("hey");
                moveUp();
                printBoard();
            } else if (String.fromCharCode(e.keyCode) === 'a') {
                moveLeft();
                printBoard();
            } else if (String.fromCharCode(e.keyCode) === 's') {
                moveDown();
                printBoard();
            } else if (String.fromCharCode(e.keyCode) === 'd') {
                moveRight();
                printBoard();

            }

            if (isGameFinished()) {
                window.alert("game over");
            }
        }




        //function TwoZeroFourEight() {




        function newTilePos() {
            //console.log("here");
            var rand;
            do {
                //var temp=Math.random();
                //console.log(Math.floor(temp*16));
                rand = Math.floor(16 * Math.random());
            } while (!vacantPlaces[rand]);
            //console.log("here");
            //console.log("rand");
            return rand;
        }

        function newValueGen() {
            var rand = Math.random();
            if (rand < 0.9) {
                return 2;
            }
            return 4;
        }

        function placeTheTile(pos, value) {
            vacantPlaces[pos] = false;
            switch (pos) {
                case 0:
                    matrix[0][0] = value;
                    break;
                case 1:
                    matrix[0][1] = value;
                    break;
                case 2:
                    matrix[0][2] = value;
                    break;
                case 3:
                    matrix[0][3] = value;
                    break;
                case 4:
                    matrix[1][0] = value;
                    break;
                case 5:
                    matrix[1][1] = value;
                    break;
                case 6:
                    matrix[1][2] = value;
                    break;
                case 7:
                    matrix[1][3] = value;
                    break;
                case 8:
                    matrix[2][0] = value;
                    break;
                case 9:
                    matrix[2][1] = value;
                    break;
                case 10:
                    matrix[2][2] = value;
                    break;
                case 11:
                    matrix[2][3] = value;
                    break;
                case 12:
                    matrix[3][0] = value;
                    break;
                case 13:
                    matrix[3][1] = value;
                    break;
                case 14:
                    matrix[3][2] = value;
                    break;
                case 15:
                    matrix[3][3] = value;
                    break;
            }
        }

        function moveUp() {
            //------Lets join the tiles-------
            //console.log("upupupupup");
            var i, j, k;
            var newTile = false;
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0) {
                        for (k = i + 1; k < 4; k++) {
                            if (matrix[k][j] !== 0 && matrix[k][j] !== matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[k][j]) {
                                matrix[i][j] *= 2;
                                matrix[k][j] = 0;
                                score=parseInt(score)+matrix[i][j];
                                ls.setItem('score',score);
                                newTile = true;
                                break;
                            }
                        }
                    }
                }
            }

            for (i = 0; i < 3; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] === 0) {
                        for (k = i + 1; k < 4; k++) {
                            if (matrix[k][j] !== 0) {
                                matrix[i][j] = matrix[k][j];
                                matrix[k][j] = 0;
                                newTile = true;
                                break;
                            }
                        }
                    }
                }
            }

            //-----now lets see which places are now left vacant--------
            var count = 0;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0)
                        vacantPlaces[count] = false;
                    else
                        vacantPlaces[count] = true;
                    count++;
                }
            }

            //------Now finally lets create one additional tile-------
            if (newTile) {
                for (i = 0; i < 16; i++) {
                    if (vacantPlaces[i]) {
                        var pos = newTilePos();
                        var value = newValueGen();
                        placeTheTile(pos, value);
                        break;
                    }
                }
            }



        }

        function moveDown() {
            //------Lets join the tiles-------
            var i, j, k;
            var newTile = false;
            for (i = 3; i >= 1; i--) {
                for (j = 3; j >= 0; j--) {
                    if (matrix[i][j] !== 0) {
                        for (k = i - 1; k >= 0; k--) {
                            if (matrix[k][j] !== 0 && matrix[k][j] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[k][j]) {
                                matrix[i][j] *= 2;
                                matrix[k][j] = 0;
                                newTile = true;
                                score=parseInt(score)+matrix[i][j];
                                ls.setItem('score',score);
                                break;
                            }
                        }
                    }
                }
            }

            for (i = 3; i >= 0; i--) {
                for (j = 3; j >= 0; j--) {
                    if (matrix[i][j] === 0) {
                        for (k = i - 1; k >= 0; k--) {
                            if (matrix[k][j] !== 0) {
                                matrix[i][j] = matrix[k][j];
                                matrix[k][j] = 0;
                                newTile = true;
                                break;
                            }
                        }
                    }
                }
            }

            //-----now lets see which places are now left vacant--------
            var count = 0;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0)
                        vacantPlaces[count] = false;
                    else
                        vacantPlaces[count] = true;
                    count++;
                }
            }

            //------Now finally lets create one additional tile-------
            if (newTile) {
                for (i = 0; i < 16; i++) {
                    if (vacantPlaces[i]) {
                        var pos = newTilePos();
                        var value = newValueGen();
                        placeTheTile(pos, value);
                        break;
                    }
                }
            }
        }

        function moveLeft() {
            //------Lets join the tiles-------
            var i, j, k;
            var newTile = false;
            for (j = 0; j < 3; j++) {
                for (i = 0; i < 4; i++) {
                    if (matrix[i][j] !== 0) {
                        for (k = j + 1; k < 4; k++) {
                            if (matrix[i][k] !== 0 && matrix[i][k] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[i][k]) {
                                matrix[i][j] *= 2;
                                matrix[i][k] = 0;
                                newTile = true;
                                score=parseInt(score)+matrix[i][j];
                                ls.setItem('score',score);
                                break;
                            }
                        }
                    }
                }
            }

            for (j = 0; j < 3; j++) {
                for (i = 0; i < 4; i++) {
                    if (matrix[i][j] === 0) {
                        for (k = j + 1; k < 4; k++) {
                            if (matrix[i][k] !== 0) {
                                matrix[i][j] = matrix[i][k];
                                matrix[i][k] = 0;
                                newTile = true;
                                break;
                            }
                        }
                    }
                }
            }

            //-----now lets see which places are now left vacant--------
            var count = 0;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0)
                        vacantPlaces[count] = false;
                    else
                        vacantPlaces[count] = true;
                    count++;
                }
            }

            //------Now finally lets create one additional tile-------
            if (newTile) {
                for (i = 0; i < 16; i++) {
                    if (vacantPlaces[i]) {
                        var pos = newTilePos();
                        var value = newValueGen();
                        placeTheTile(pos, value);
                        break;
                    }
                }
            }
        }

        function moveRight() {
            //------Lets join the tiles-------
            var i, j, k;
            var newTile = false;
            for (j = 3; j >= 1; j--) {
                for (i = 3; i >= 0; i--) {
                    if (matrix[i][j] !== 0) {
                        for (k = j - 1; k >= 0; k--) {
                            if (matrix[i][k] !== 0 && matrix[i][k] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[i][k]) {
                                matrix[i][j] *= 2;
                                matrix[i][k] = 0;
                                newTile = true;
                                score=parseInt(score)+matrix[i][j];
                                ls.setItem('score',score);
                                break;
                            }
                        }
                    }
                }
            }

            for (j = 3; j >= 1; j--) {
                for (i = 3; i >= 0; i--) {
                    if (matrix[i][j] === 0) {
                        for (k = j - 1; k >= 0; k--) {
                            if (matrix[i][k] !== 0) {
                                matrix[i][j] = matrix[i][k];
                                matrix[i][k] = 0;
                                newTile = true;
                                break;
                            }
                        }
                    }
                }
            }

            //-----now lets see which places are now left vacant--------
            var count = 0;
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0)
                        vacantPlaces[count] = false;
                    else
                        vacantPlaces[count] = true;
                    count++;
                }
            }

            //------Now finally lets create one additional tile-------
            if (newTile) {
                for (i = 0; i < 16; i++) {
                    if (vacantPlaces[i]) {
                        var pos = newTilePos();
                        var value = newValueGen();
                        placeTheTile(pos, value);
                        break;
                    }
                }
            }
        }

        function isGameFinished() {

            var i, j, k;
            for (i = 0; i < 16; i++) {
                if (vacantPlaces[i]) {
                    return false;
                }
            }

            for (i = 0; i < 3; i++) {
                for (j = 0; j < 4; j++) {
                    if (matrix[i][j] !== 0) {
                        for (k = i + 1; k < 4; k++) {
                            if (matrix[k][j] !== 0 && matrix[k][j] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[k][j]) {
                                return false;
                            }
                        }
                    }
                }
            }

            for (i = 3; i >= 1; i--) {
                for (j = 3; j >= 0; j--) {
                    if (matrix[i][j] !== 0) {
                        for (k = i - 1; k >= 0; k--) {
                            if (matrix[k][j] !== 0 && matrix[k][j] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[k][j]) {
                                return false;
                            }
                        }
                    }
                }
            }

            for (j = 0; j < 3; j++) {
                for (i = 0; i < 4; i++) {
                    if (matrix[i][j] !== 0) {
                        for (k = j + 1; k < 4; k++) {
                            if (matrix[i][k] !== 0 && matrix[i][k] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[i][k]) {
                                return false;
                            }
                        }
                    }
                }
            }

            for (j = 3; j >= 1; j--) {
                for (i = 3; i >= 0; i--) {
                    if (matrix[i][j] !== 0) {
                        for (k = j - 1; k >= 0; k--) {
                            if (matrix[i][k] !== 0 && matrix[i][k] != matrix[i][j]) {
                                break;
                            } else if (matrix[i][j] !== 0 && matrix[i][j] == matrix[i][k]) {
                                return false;
                            }
                        }
                    }
                }
            }

            return true;
        }

        function getClass(i, j) {
            if (i === 0) {
                if (j === 0) {
                    return "zero";
                }
                if (j === 1) {
                    return "one";
                }
                if (j === 2) {
                    return "two";
                }
                if (j === 3) {
                    return "three";
                }
            } else if (i === 1) {
                if (j === 0) {
                    return "four";
                }
                if (j === 1) {
                    return "five";
                }
                if (j === 2) {
                    return "six";
                }
                if (j === 3) {
                    return "seven";
                }
            } else if (i === 2) {
                if (j === 0) {
                    return "eight";
                }
                if (j === 1) {
                    return "nine";
                }
                if (j === 2) {
                    return "ten";
                }
                if (j === 3) {
                    return "eleven";
                }
            } else if (i === 3) {
                if (j === 0) {
                    return "twelve";
                }
                if (j === 1) {
                    return "thirteen";
                }
                if (j === 2) {
                    return "fourteen";
                }
                if (j === 3) {
                    return "fifteen";
                }
            }
        }

        function printBoard() {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    var id = getClass(i, j);
                    console.log(id);
                    var elID = document.getElementById(id);
                    console.log(elID);
                    if (matrix[i][j] !== 0) {
                        elID.innerHTML = matrix[i][j];
                    }
                    if (matrix[i][j] === 0) {
                        //elID.className="";
                        elID.className = "tile empty";
                    } else if (matrix[i][j] === 2) {
                        //elID.className="";
                        elID.className = "tile two";
                    } else if (matrix[i][j] === 4) {
                        //elID.className="";
                        elID.className = "tile four";
                    } else if (matrix[i][j] === 8) {
                        //elID.className="";
                        elID.className = "tile eight";
                    } else if (matrix[i][j] === 16) {
                        //elID.className="";
                        elID.className = "tile onesix";
                    } else if (matrix[i][j] === 32) {
                        //elID.className="";
                        elID.className = "tile threetwo";
                    } else if (matrix[i][j] === 64) {
                        //elID.className="";
                        elID.className = "tile sixfour";
                    } else if (matrix[i][j] === 128) {
                        //elID.className="";
                        elID.className = "tile onetwoeight";
                    } else if (matrix[i][j] === 256) {
                        //elID.className="";
                        elID.className = "tile twofivesix";
                    } else if (matrix[i][j] === 512) {
                        //elID.className="";
                        elID.className = "tile fiveonetwo";
                    } else if (matrix[i][j] === 1024) {
                        //elID.className="";
                        elID.className = "tile onezerotwofour";
                    } else if (matrix[i][j] === 2048) {
                        //elID.className="";
                        elID.className = "tile twozerofoureight";
                    }
                }

            }
            var eli=document.getElementById('score');
            eli.innerHTML="Score: "+score;
        }

    }

}


//        return {
//            init: function(id) {
//                var el=document.getElementById(id);
//                el.addEventListener('keypress',GamePlay);
//            }
//               
//        }




//) ();