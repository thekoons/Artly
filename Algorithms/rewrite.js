
var RED = 2;
var BLUE = 3;
var GREEN = 4;
var PURPLE = 5;

function prep_rewrite(imgData, width, height){

    /* Here be hardcoded settings */

    var rules = [];

    var rule1 = [];

    var rule1_in = [RED];
    var rule1_out = [RED, GREEN];

    rule1.push(rule1_in);
    rule1.push(rule1_out);

    rules.push(rule1);

    var rule2 = [];

    var rule2_in = [BLUE, RED];
    var rule2_out = [RED, RED];

    rule2.push(rule2_in);
    rule2.push(rule2_out);

    rules.push(rule2);

    var rule3 = [];

    var rule3_in = [BLUE, RED, RED];
    var rule3_out = [RED, BLUE];

    rule3.push(rule3_in);
    rule3.push(rule3_out);

    rules.push(rule3);

    var rule4_in = [GREEN, RED];
    var rule4_out = [GREEN];

    var rule4 = [];
    rule4.push_back(rule4_in);
    rule4.push_back(rule4_out);
    rules.push_back(rule4);

    var rule5_in = [GREEN, BLUE];
    var rule5_out = [RED, GREEN];

    var rule5 = [];
    rule5.push_back(rule5_in);
    rule5.push_back(rule5_out);
    rules.push_back(rule5);

    var rule6_in = [GREEN, GREEN];
    var rule6_out = [BLUE, BLUE];

    var rule6 = [];
    rule6.push_back(rule6_in);
    rule6.push_back(rule6_out);
    rules.push_back(rule6);

    var first = [RED];

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

    grid[0][0] = RED;

    for (var n = 0; n < max_frame; n++)
    {
        rewrite(imgData, width, height, grid, rules, n)
    }
}

function rewrite(_imgData, _width, _height, _grid, _rules, _step) {

    //Tracks column of current row
    var j_cur = 0;

    //Tracks column of output row
    var j_out = 0;

    //Gets number of rules to consider
    var rule_num = _rules.length;

    //If the current cell is live and in bounds
    while(_grid[_step][j_cur] != 0 && j_cur < _width && J-out < _width)
    {
        //Tracks if any rule is implemented at all over cell
        var no_rule = 1;

        //Iterate over all rules to see if any apply
        for (var r = 0; r < rule_num; r++)
        {
            //Check if rule r is present
            var eq = 1;

            //Get rule r
            rule_in = _rules[r][0];
            rule_out = _rules[r][1];

            if (j_cur + rule_in.length < _width)
            {
                for (var l = 0; l < rule_in.length; l++)
                {
                    if (_grid[_step][j_cur + l] != rule_in[l])
                        eq = 0;
                }

                if (eq == 1)
                {
                    console.log("Rule " + r + " matches.");
                    
                    for (var l = 0; l < rule_out.length; l++)
                    {
                        if (j_out < _width)
                        {
                            //Set grid cell to resulting value
                            _grid[_step + 1][j_out] = rule_out[l];

                            var color = getColor(rule_out[l]);

                            //Set color of image
                            for (c = 0; c < 4; c++)
                                imgData.data[((_step + 1) * height + j_out) + c] = color[c];

                            j_out++;
                        }
                    }

                    eq = 0;
                    j_cur += rule_in.length;
                    no_rule = 0;
                }
            }
        }

        if (no_rule == 1 && j_cur < _width && j_out < _width)
        {
            _grid[_step + 1][j_out] = _grid[_step][j_cur];

            var color = getColor(_grid[_step][j_cur]);

            //Set color of image
            for (c = 0; c < 4; c++)
                imgData.data[((_step + 1) * height + j_out) + c] = color[c];

            j_cur++;
            j_out++;
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
            break;
        case 2:  //Red
            color[0] = 255;
            color[1] = 0;
            color[2] = 0;
            break;
        case 3:  //Blue
            color[0] = 0;
            color[1] = 0;
            color[2] = 255;
            break;
        case 4:  //Green
            color[0] = 0;
            color[1] = 255;
            color[2] = 0;
            break;
        case 5:  //Purple
            color[0] = 128;
            color[1] = 0;
            color[2] = 128;
            break;
        default: //Black
            color[0] = 0;
            color[1] = 0;
            color[2] = 0;
            break;
    }

    return color;

}