const d = new Date();
let text = d.toLocaleDateString();

function blueGold(){
    //if (    text == ('11/3/2021' || '11/5/2021'))
    if ([       '11/3/2021',
                '11/5/2021',
                '11/9/2021',
                '11/12/2021'
        
        ].includes(text))
    {
        document.getElementById('gold').style.display = 'block';
        document.getElementById('goldDate').innerHTML = text;
    }else if([  '11/8/2021',
                '11/10/2021',
                '11/15/2021',
                '11/17/2021',
                '11/19/2021',
                '11/23/2021',
                '11/30/2021'


        ].includes(text))
    {
        document.getElementById('blue').style.display = 'block';
        document.getElementById('blueDate').innerHTML = text;
    } else {
        document.getElementById('grey').style.display = 'block';
        document.getElementById("greyDate").innerHTML = text;
    }
}