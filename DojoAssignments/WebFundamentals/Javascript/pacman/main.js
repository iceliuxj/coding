$(document).ready(function () {
    var dino = {
        'x': 1,
        'y': 1
    }
    var map = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var count = 0;
    function score(){
        if (map[dino.x][dino.y] = 1){
            count++;
        }
    }

    function updateMap() {
        var htmlStr = ''
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[x].length; y++) {
                if (map[x][y] == 0) {
                    htmlStr += '<div class="wall"></div>'
                }

                if (map[x][y] == 1) {
                    htmlStr += '<div class="ground"><img src="mm.png"></div>'
                }

                if (map[x][y] == 2) {
                    htmlStr += '<div class="ground"><img id="dino" src="dino.png"></div>'
                }

                if (map[x][y] == 3) {
                    htmlStr += '<div class="ground"></div>'
                }
            }
        }
        $('.world').html(htmlStr)
    }
    updateMap();


    $(document).on('keydown', function (e) {
        //dino move right
        if (e.keyCode == 39) {
            if (map[dino.x][dino.y + 1] != 0) {
                map[dino.x][dino.y] = 3;
                dino.y++;
            }
        }

        //dino move left
        if (e.keyCode == 37) {
            if (map[dino.x][dino.y - 1] != 0) {
                map[dino.x][dino.y] = 3;
                dino.y--;
            }
        }

        //dino move up
        if (e.keyCode == 38) {
            if (map[dino.x - 1][dino.y] != 0) {
                map[dino.x][dino.y] = 3;
                dino.x--;
            }
        }

        //dino move down
        if (e.keyCode == 40 && map[dino.x + 1][dino.y] != 0) {
                map[dino.x][dino.y] = 3;
                dino.x++;
            }
        map[dino.x][dino.y] = 2;
        updateMap();

        score()
        $('#coincount').html(count)
    })


})