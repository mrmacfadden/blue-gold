const d = new Date();
let text = d.toLocaleDateString();

function blueGold(){
    //if (    text == ('11/3/2021' || '11/5/2021'))
    if (
      [
        "11/15/2022",
        "11/17/2022",
        "11/21/2022",
        "11/28/2022",
        "11/30/2022",
        "12/2/2022",
        "12/6/2022",
        "12/8/2022",
        "12/12/2022",
        "12/14/2022",
        "12/16/2022",
        "1/4/2022",
        "1/6/2023",
      ].includes(text)
    ) {
      document.getElementById("gold").style.display = "block";
      document.getElementById("goldDate").innerHTML = text;
    } else if (
      [
        "11/16/2022",
        "11/18/2022",
        "11/22/2022",
        "11/29/2022",
        "12/1/2022",
        "12/5/2022",
        "12/7/2022",
        "12/9/2022",
        "12/13/2022",
        "12/15/2022",
        "1/3/2023",
        "1/5/2023",
      ].includes(text)
    ) {
      document.getElementById("blue").style.display = "block";
      document.getElementById("blueDate").innerHTML = text;
    } else {
      document.getElementById("grey").style.display = "block";
      document.getElementById("greyDate").innerHTML = text;
    }
}