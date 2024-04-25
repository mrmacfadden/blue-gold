const d = new Date();
let text = d.toLocaleDateString();

function blueGold(){
    if (
      [
        '4/25/2024',
        '4/29/2024',
        '5/1/2024',
        '5/3/2024',
        '5/7/2024',
        '5/9/2024',
        '5/13/2024',
        '5/15/2024',
        '5/17/2024',
        '5/21/2024',
        '5/23/2024',
        '5/28/2024',
      ].includes(text)
    ) {
      document.getElementById("gold").style.display = "block";
      document.getElementById("goldDate").innerHTML = text;
    } else if (
      [
        '4/26/2024',
        '4/30/2024',
        '5/2/2024',
        '5/6/2024',
        '5/8/2024',
        '5/10/2024',
        '5/14/2024',
        '5/16/2024',
        '5/20/2024',
        '5/22/2024',
        '5/24/2024',
        '5/29/2024',
      ].includes(text)
    ) {
      document.getElementById("blue").style.display = "block";
      document.getElementById("blueDate").innerHTML = text;
    } else {
      document.getElementById("grey").style.display = "block";
      document.getElementById("greyDate").innerHTML = text;
    }
}