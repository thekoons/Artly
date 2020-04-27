
var RED = 2;
var BLUE = 3;
var GREEN = 4;
var PURPLE = 5;

function prep_cellular(imgData, width, height){

    /* Here be hardcoded settings */

    var rules = [];
    /* here end hardcoded settings */


    /*establish grid of cell values */
    /*  represents pixels in image */
    var grid = [];

    for (var i = 0; i < width; i++)
    {
        var line = [];

        for (var j = 0; j < height; j++)
            line.push(0);

        grid.push
    }

    /*
        Use imgData to read which cells should be turned on 
    */

    for (var i = 0; i < height; i++)
    {
        for (var j = 0; j < width; j++)
        {
            if (imgData.data[i * width + j] == 255)
                grid[i][j] = 1;
        }
    }

    for (var n = 0; n < max_frame; n++)
    {
        cellular(imgData, width, height, grid, rules)
    }
}

function count_neighbors(i, j, AE)
{
	var i_upper_bound, i_lower_bound;
	var j_upper_bound, j_lower_bound;
	var neighbors = 0;
	
	AE = Number(AE);
	i = Number(i);
	j = Number(j);
	
	//Ensures bounds respect edges of table given Area of Effect
	if 	(i - AE < 0)	{i_lower_bound = 0;}
	else 				{i_lower_bound = i - AE;}
	if 	(j - AE < 0) 	{j_lower_bound = 0;}
	else 				{j_lower_bound = j - AE;}
	if 	(i + AE >= row) {i_upper_bound = row - 1;}
	else 				{i_upper_bound = i + AE;}
	if 	(j + AE >= col) {j_upper_bound = col - 1;}
	else 				{j_upper_bound = j + AE;}
	
	//Counts Neighbors
	for (var k = i_lower_bound; k <= i_upper_bound; k++) {
		for (var l = j_lower_bound; l <= j_upper_bound; l++) {
			if ((Grid[k][l].lifeform == 1) && ((k != i) || (l != j))) {
				neighbors++;
			}
		}
	}
	
	//alert("(" + row + ", " + col + ") " + AE + ": cell " + i + "x" + j + ": " + neighbors + "\nBounds: " + i_lower_bound + ", " + i_upper_bound + ", " + j_lower_bound + ", " + j_upper_bound);
	
	return neighbors;
}

function cellular(_imgData, _width, _height, _grid, _rules) {
{
    //Factor in area of effect to ruleset
    for (var i = 0; i < 4; i++)
        _rules[i] * (pow(3 + (_rules[4] - 1) * 2, 2) - 1) / 8;

    //Loop through bitmap applying automata filter
    for (var i = 0; i < _width; i++){

        for (var j = 0; j < _height; j++) {

            //Get neighbors of current pixel
            var newrgb = [0, 0, 0, 0];
            var neighbors = countNeighbors(i, j, _args_i[4], newrgb, 2);

            
            _b->getPixel(i,j).setHeldRGB(newrgb);

            //Calculates whether, based on active neighbors, an inactive pixel turns on
            if (_b->getPixel(i, j).getState() == 0){
                if ((neighbors[1] >= _args_i[2]) && (neighbors[1] <= _args_i[3])) {
                    _b->getPixel(i, j).transition(1);
                } else {
                    _b->getPixel(i, j).transition(0);
                }
            }
            
            //Calculates whether, based on inative neighbors, an active pixel turns off
            else if (_b->getPixel(i, j).getState() == 1) {
                if ((neighbors[1] >= _args_i[0]) && (neighbors[1] <= _args_i[1])) {
                    _b->getPixel(i, j).transition(1);
                } else {
                    _b->getPixel(i, j).transition(0);
                }
            }

            delete[] neighbors;
        }
    }

    //Rectifies changes made during cellular automata filter
    for (int i = 0; i < _b->getSize(0); i++){
        for (int j = 0; j < _b->getSize(1); j++) {
            _b->getPixel(i, j).rectify();
        }
    }
}


function getColor(n){

    var color = [];

    switch (n){

        case(1):
            color[0] = 255;
            color[1] = 255;
            color[2] = 255;
            color[3] = 255;
            break;
        case 2:  //Red
            color[0] = 255;
            color[1] = 0;
            color[2] = 0;
            color[3] = 255;
            break;
        case 3:  //Blue
            color[0] = 0;
            color[1] = 0;
            color[2] = 255;
            color[3] = 255;
            break;
        case 4:  //Green
            color[0] = 0;
            color[1] = 255;
            color[2] = 0;
            color[3] = 255;
            break;
        case 5:  //Purple
            color[0] = 128;
            color[1] = 0;
            color[2] = 128;
            color[3] = 255;
            break;
        default: //Black
            color[0] = 0;
            color[1] = 0;
            color[2] = 0;
            color[3] = 255;
            break;
    }

    return color;

}