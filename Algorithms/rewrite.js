


function rewrite(_grid, _rules, _step) {

    //Tracks column of current row
    var j_cur = 0;

    //Tracks column of output row
    var j_out = 0;

    //Gets number of rules to consider
    var rule_num = _rules.size();

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

            if (j_cur + rule_in.size() < _width)
            {
                for (var l = 0; l < rule_in.size(); l++)
                {
                    if (_grid[_step][j_cur + l] != rule_in[l])
                        eq = 0;
                }

                if (eq == 1)
                {
                    console.log("Rule " + r + " matches.");
                    
                    for (var l = 0; l < rule_out.size(); l++)
                    {
                        if (j_out < _width)
                        {
                            //Set grid cell to resulting value
                            _grid[_step + 1][j_out] = rule_out[l];

                            //Set color of image
                            pixel(_step + 1, j_out).data = getColor(rule_out[l]);

                            j_out++;
                        }
                    }

                    eq = 0;
                    j_cur += rule_in.size();
                    no_rule = 0;
                }
            }
        }

        if (no_rule == 1 && j_cur < _width && j_out < _width)
        {
            _grid[_step + 1][j_out] = _grid[_step][j_cur];

            //Set color of image
            pixel(_step + 1, j_out).data = getColor(_grid[_step][j_cur]);

            j_cur++;
            j_out++;
        }
    }
}