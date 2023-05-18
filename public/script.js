// -----  START JS: MAKING THE '+ADD NEW' FORM POPPING UP ----- //
document.getElementById("addShowBtn").addEventListener('click', openForm);

//make my blurred background element:
const blurElement = document.getElementById("blur"); 

function openForm() {
  document.getElementById("pop-up-form").style.display = "block";
  blurElement.classList.add("blur-effect"); 
  /* ^ add a blur background when pop-up-form is active */
}

function closeForm() {
  document.getElementById("pop-up-form").style.display = "none";
  blurElement.classList.remove("blur-effect");
  /* ^ remove the blur background when pop-up-form is closed */
}
// -----  END JS: MAKING THE '+ADD NEW' FORM POPPING UP ----- //



// -----  START JS: ADDING SHOW LIST ----- // 
const form = document.querySelector('#pop-up-form .form-container');
const showlist = document.querySelector('#showlist');

// listening out for the form submission when use press the 'save' button
form.addEventListener('submit', function(event){

  event.preventDefault();
  // ^ blocking the default submission behaviour

  // console.log(form.elements.show-title.value);

  addShow(
    form.elements.showTitle.value,
    form.elements.showCountry.value,
    form.elements.showStatus.value,
    form.elements.showRating.value,
    form.elements.showComment.value
  );

})

function displayShow(show) {
  // define a variable to house the element
  let item = document.createElement('li');
  item.setAttribute('data-id', show.id);
  item.innerHTML = 
  `<p class="card-text"> <strong>${show.title}</strong> <br/>
       <strong>Country:</strong> ${show.country} <br/>
       <strong>Genre:</strong> <br/>
       <i>${show.status} ⭐️ ${show.rating}</i> </p>`;
  showlist.appendChild(item);
  // form.reset();

  //Create the delete button for each show in the Show List
  let delButton = document.createElement('button');
  let delButtonText = document.createTextNode('Delete');
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  //Code the event when the delete button get clicked:
  delButton.addEventListener('click', function(event){
    item.remove();
    showList.forEach(function(showArrayElement, showArrayIndex){
      if (showArrayElement.id == item.getAttribute('data-id')) {
        showList.splice(showArrayIndex, 1)
      }
      console.log(showList);
    })
  })
  


}


// Create an array called 'showList'
var showList = [];
// Create a function called 'addTask'
function addShow(title, country, status, rating, comment) {
  let show = {
    title,
    country,
    id: Date.now(),
    date: new Date().toISOString(),
    status,
    rating,
    comment
  }

  showList.push(show);
  displayShow(show);

}


// Call the function with test values for the input paramaters
addShow("Alice in Borderland", "Japan", "Not Started", 5, "Recommended for those seeking thrilling teamwork-type gameshow");

// Log the array to the console.
console.log(showList);


// -----  END JS: ADDING SHOW LIST ----- // 










// -----  START JS: JAVASCRIPT CODE FOR MY PLOT ----- // 
let plotData = {
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 4, 8, 16]
}

// Styling my Plot with layout{}:
let layout = {
  title: "TV Show Stats",
  font: {
    size: 8,
  },
  xaxis: {
    title: "x-value",
  },
  yaxis: {
    title: "y-value",
  },

};


// Change the Default functionality of Plotly with Config:
var config = {
  responsive: true,
  scrollZoom: true,
  displayModeBar: false
};

// Store a reference to my Plot <div>:
const plotDiv = document.getElementById('myPlot');

// Run my Plotly function:
Plotly.newPlot( plotDiv, [plotData], layout, config );

// -----  END JS: JAVASCRIPT CODE FOR MY PLOT ----- // 









