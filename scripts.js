const d = new Date();
let text = d.toLocaleDateString();

function blueGold(){
    //if (    text == ('11/3/2021' || '11/5/2021'))
    if ([       '11/3/2021',
                '11/5/2021',
                '11/9/2021',
                '11/12/2021',
                '11/16/2021',
                '11/18/2021',
                '11/22/2021',
                '11/29/2021',
                '12/1/2021',
                '12/3/2021',
                '12/7/2021',
                '12/9/2021',
                '12/13/2021',
                '12/15/2021',
                '12/17/2021',
                '1/4/2022',
                '1/6/2022',
                '1/19/2022',
                '1/21/2022',
                '1/25/2022',
                '1/27/2022',
                '2/2/2022',
                '2/4/2022',
                '2/8/2022',
                '2/10/2022',
                '2/14/2022',
                '2/16/2022',
                '2/18/2022',
                '2/23/2022',
                '2/25/2022',
                '3/1/2022',
                '3/3/2022',
                '3/8/2022',
                '3/10/2022',
                '3/14/2022',
                '3/16/2022',
                '3/18/2022',
                '3/29/2022',
                '3/31/2022',
                '4/4/2022',
                '4/6/2022',
                '4/8/2022',
                '4/12/2022',
                '4/18/2022',
                '4/20/2022',
                '4/22/2022',
                '4/26/2022',
                '4/28/2022',
                '5/2/2022',
                '5/4/2022',
                '5/6/2022',
                '5/10/2022',
                '5/12/2022',
                '5/16/2022',
                '5/18/2022',
                '5/20/2022',
                '5/24/2022',
                '5/26/2022'

        
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
                '11/30/2021',
                '12/2/2021',
                '12/6/2021',
                '12/8/2021',
                '12/10/2021',
                '12/14/2021',
                '12/16/2021',
                '1/3/2022',
                '1/5/2022',
                '1/7/2022',
                '1/18/2022',
                '1/20/2022',
                '1/24/2022',
                '1/26/2022',
                '1/28/2022',
                '2/1/2022',
                '2/3/2022',
                '2/7/2022',
                '2/9/2022',
                '2/11/2022',
                '2/15/2022',
                '2/17/2022',
                '2/22/2022',
                '2/24/2022',
                '2/28/2022',
                '3/2/2022',
                '3/4/2022',
                '3/9/2022',
                '3/11/2022',
                '3/15/2022',
                '3/17/2022',
                '3/28/2022',
                '3/30/2022',
                '4/1/2022',
                '4/5/2022',
                '4/7/2022',
                '4/11/2022',
                '4/14/2022',
                '4/19/2022',
                '4/21/2022',
                '4/25/2022',
                '4/27/2022',
                '4/29/2022',
                '5/3/2022',
                '5/5/2022',
                '5/9/2022',
                '5/11/2022',
                '5/13/2022',
                '5/17/2022',
                '5/19/2022',
                '5/23/2022',
                '5/25/2022'


        ].includes(text))
    {
        document.getElementById('blue').style.display = 'block';
        document.getElementById('blueDate').innerHTML = text;
    } else {
        document.getElementById('grey').style.display = 'block';
        document.getElementById("greyDate").innerHTML = text;
    }
}