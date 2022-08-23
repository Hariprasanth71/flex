var boxcol='sub-container1';
var dup='null';
var statbox='flex1';

function box_col(boxclick)
{
    var b_click=boxclick;
    document.getElementById(boxcol).classList.remove('extend');
    document.getElementById(b_click).classList.add('extend');
    dup=b_click;
    b_click=boxcol;
    boxcol=dup;
}

function box(click_)
{
    var c_click=click_;
    document.getElementById(statbox).classList.remove('extend');
    document.getElementById(c_click).classList.add('extend');
    dup=c_click;
    c_click=statbox;
    statbox=dup;
}