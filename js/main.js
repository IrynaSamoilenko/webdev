document.getElementById('output').style.visibility = 'hidden';
let i = 0;

document.getElementById('btn convert').addEventListener('click',  function(e) {
    document.getElementById('output').style.visibility = 'visible';
    let km = document.getElementById('kmInput').value;
    document.getElementById('mOutput').innerHTML = km * 1000;
    document.getElementById('smOutput').innerHTML = km * 100000;
    document.getElementById('mlOutput').innerHTML = km * 1000000;
});

function newReview() {
  let div = document.createElement("div");
  let reviewValue = document.getElementById("review").value;
  if (reviewValue === '') {
          alert("Write something, please");
      } else {
          div.className = `review`;
          div.id = `${i}`;
          let input = document.createTextNode(`ID#${i}: ` + reviewValue);
          div.appendChild(input);
          div.style.border = "thin dotted DimGray";
          div.style.color = "ForestGreen";
          div.style.margin = "10px";
          div.style.fontSize = "0.8em"
          div.style.display = "block"
          document.getElementById("reviews").appendChild(div);
          i++;
      }
}