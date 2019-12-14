document.getElementById('output').style.visibility = 'hidden';

function createP() {
    return document.createElement("p");
}

document.getElementById('kmInput').addEventListener('input',  function(e) {
    document.getElementById('output').style.visibility = 'visible';
    let km = e.target.value;
    document.getElementById('mOutput').innerHTML = km * 1000;
    document.getElementById('smOutput').innerHTML = km * 100000;
    document.getElementById('mlOutput').innerHTML = km * 1000000;
});

function newReview() {
  let review = document.createElement("div");
  let inputValue = document.getElementById("review").value;
  let input = document.createTextNode(inputValue);
  review.appendChild(input);
  if (inputValue === '') {
          alert("Write something, please");
      } else {
          document.getElementById("reviews").appendChild(review);
      }
}