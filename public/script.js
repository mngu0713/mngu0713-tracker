// -----  START JS: FETCH DATA FROM API -----
// Code are referenced from Wk5 DECO2017 (University of Sydney) tutorial content

// 1. Store the element with the class 'content' as a variable for later use
const content = document.querySelector('.form-container')

// 2. Store the URL in a variable as well
const url = "https://api.themoviedb.org/3/movie/550?api_key=6f0b2683b85ef3e1a6c84e9227158c71";

// 3. Fetch data from API
fetch(url)
  .then((response) => {
    // check if response is successful
    if (response.ok) {
      // convert response to JSON and return the data
      return response.json();
    } else {
      // throw an error if response is not successful
      throw new Error(`Unable to access API. Error: ${response.status}`);
    }
  })
  .then((data) => {
    // Add code to do something with the data once it has been fetched and converted
    console.log(data);
  })
  .catch((error) => {
    // Handle error if API request is not successful
    let errorMessage = document.createElement("p");
    errorMessage.textContent = `Sorry, something went wrong - ${error.message}`;
    content.append(errorMessage);
  });

// -----  END JS: FETCH DATA FROM API -----

// -----  START JS: MAKING THE '+ADD NEW' FORM POPPING UP -----
document.getElementById("addShowBtn").addEventListener('click', openForm);

// make my blurred background element:
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

// -----  END JS: MAKING THE '+ADD NEW' FORM POPPING UP -----



// -----  START JS: USER ADDING IN SHOW LIST ----- // 
// the code for the 'add new show' functionality were created with the help of DECO2017's week 4 tutorial Scrimba video: https://scrimba.com/scrim/coa064ba08c96c1639bc9531b 
const form = document.querySelector('#pop-up-form .form-container');
const showlist = document.querySelector('#showlist');

// listening out for the form submission when use press the 'save' button
form.addEventListener('submit', function (event) {

  event.preventDefault();
  // ^ blocking the default submission behaviour

  // console.log(form.elements.show-title.value);

  addShow(
    form.elements.showTitle.value,
    form.elements.showCategory.value,
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
  delButton.addEventListener('click', function (event) {
    item.remove();
    showList.forEach(function (showArrayElement, showArrayIndex) {
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
  // Save showList to localStorage after pushing the new show
  localStorage.setItem('showList', JSON.stringify(showList));
  displayShow(show);
}

// Call the function with test values for the input paramaters
//addShow("Alice in Borderland", "Japan", "Not Started", 5, "Recommended for those seeking thrilling teamwork-type gameshow");

// Log the array to the console.
console.log(showList);

window.onload = function () {
  // Load showList from localStorage
  let storedShowList = localStorage.getItem('showList');
  if (storedShowList) {
    showList = JSON.parse(storedShowList);
    // Display all the shows in the loaded showList
    showList.forEach((show) => {
      displayShow(show);
    });
  }

};
// -----  END JS: ADDING SHOW LIST ----- // 





// -----  START JS: JAVASCRIPT CODE FOR MY PLOT ----- // 

// Array of month names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Data for each category
let plotData = [
  {  //Korean Drama Category
    x: monthNames,
    y: [200, 381, 230, 604, 613],
    name: 'Korean Drama',
    line: {
      color: 'Violet'
    },
    hovertemplate: 'Korean Drama<br>%{y} minutes | %{x} 2023<extra></extra>'
  },
  { //Japanese Drama Category
    x: monthNames,
    y: [604, 313, 403, 191, 103],
    name: 'Japanese Drama',
    text: 'Japanese Drama',
    line: {
      color: 'Coral'
    },
    hovertemplate: 'Japanese Drama<br>%{y} minutes | %{x} 2023<extra></extra>'
  },
  {  //Chinese Drama Category
    x: monthNames,
    y: [61, 65, 90, 12, 185],
    name: 'Chinese Drama',
    text: 'Chinese Drama',
    line: {
      color: 'Orange'
    },
    hovertemplate: 'Chinese Drama<br>%{y} minutes | %{x} 2023<extra></extra>'
  },
  { //Taiwanese Drama Category
    x: monthNames,
    y: [112, 101, 90, 170, 135],
    name: 'Taiwanese Drama',
    text: 'Taiwanese Drama',
    line: {
      color: 'MediumTurquoise'
    },
    hovertemplate: 'Taiwanese Drama<br>%{y} minutes | %{x} 2023<extra></extra>'
  },
];

// Styling my Plot:
let layout = {
  title: {
    text: "Monthly Watch Time",
    font: {
      size: 14,
      color: 'white'
    },
  },
  font: {
    size: 9,
    color: 'white',
  },
  xaxis: {
    title: {
      text: "Months",
      font: {
        size: 10,
        color: 'white',
      },
    },
  },
  yaxis: {
    title: {
      text: "Watch Time (minutes)",
      font: {
        size: 10,
        color: 'white',
      },
    },
  },
  showlegend: false, // Hide the legend initially
  legend: {
    x: 0,
    y: 1,
    orientation: 'h',
  },
  margin: {
    l: 60, // < left padding
    r: 45, // < right padding
    t: 60, // < top padding
    b: 60, // < bottom padding
  },
  hovermode: 'closest',
  hoverlabel: {
    bordercolor: 'black',
    font: {
      family: 'Arial',
      size: 12,
    },
    namelength: 0, // Set the name length to 0 to hide the trace name
    //template: "<span style='color: $<line.color>'>$<text></span><br>$<y>minutes | $<x>", // the hover text
  },
  plot_bgcolor: '#14253B', // background color of the plot area
  paper_bgcolor: '#14253B', // background color of the paper area

};

// Change the Default functionality of Plotly with Config:
var config = {
  responsive: true,
  scrollZoom: true,
  displayModeBar: false,
  responsive: true,
};

// Store a reference to my Plot <div>:
const plotDiv = document.getElementById('myPlot');

// Store references for the dialog to expand my Plot
const dialog = document.getElementById('myDialog');
const dialogContent = document.getElementById('dialog-content');
const showDialogButton = document.getElementById('show-dialog');
const closeDialogButton = document.getElementById('close-dialog');

// Create my Plotly function:
Plotly.newPlot(plotDiv, plotData, layout, config);

// Event Listener for click event on the Show Dialog button
showDialogButton.addEventListener('click', function () {
  dialog.showModal();
  Plotly.newPlot(dialogContent, plotData, layout, config);

  // !!!!! NEED FIX !!!!! : the blur background element is currently not working properly for this Plot Dialog pop-up. When uncomment, the blur background does appear like the Form Dialog pop up, BUT the expanded Plot's 'close button' no longer function.
  //blurElement.classList.add("blur-effect"); // <, the blur background when graph expanded

  // Adjust the width and height of the dialog content
  dialogContent.style.width = "70vw";
  dialogContent.style.height = "70vh";
  dialogContent.style.margin = "1vw";

  // Update the layout for the expanded graph
  let expandedLayout = {
    ...layout,
    showlegend: true, // Show the legend for the expanded graph
    legend: {
      x: 1,
      y: 1,
      orientation: 'v',
    },
  };
  Plotly.update(dialogContent, {}, expandedLayout);
});

// Event Listener for click event on the Close Dialog button
closeDialogButton.addEventListener('click', function () {
  dialog.close();
  Plotly.purge(dialogContent);
  // !!!!! NEED FIX !!!!! : Plot Dialog's blur background - part 2
  //blurElement.classList.remove("blur-effect"); // close the blurred background when expanded graph closed.
});

// Update the layout dynamically based on dialog expansion
function updateLayout(isExpanded) {
  if (isExpanded) {
    layout.showlegend = true; // Show the legend when expanded
  } else {
    layout.showlegend = false; // Hide the legend when not expanded
  }
  Plotly.update(plotDiv, {}, layout);
}

// Event Listener for click event on the dialog content
dialogContent.addEventListener('click', function () {
  const isExpanded = dialogContent.classList.contains('expanded');
  updateLayout(isExpanded);
});

// Initial layout update
updateLayout(false); // Set initial state to not expanded

// -----  END JS: JAVASCRIPT CODE FOR MY PLOT ----- //






// ------------ START JS:  Management of Local Storage for Asian TV Show Bookmark ------------ //
//Referencing the code I modified from 'Masud Rana' (Youtube Tutorial): https://www.youtube.com/watch?v=8q5T1rFtRoE
//Referencing the API source I used from 'TMDB': https://www.themoviedb.org/settings/api

// --- Storing Elements
const apiURL = "https://api.themoviedb.org/3/discover/tv?sort_by-popularity.desc&api_key=6f0b2683b85ef3e1a6c84e9227158c71"; //discover API data is sorted by popularity
const searchAPI = "https://api.themoviedb.org/3/search/tv?&api_key=6f0b2683b85ef3e1a6c84e9227158c71&page=1&query="; //API data for search results
const imgBaseUrl = "https://image.tmdb.org/t/p/";
const imgSize = "w1280";
const dialogImgSize = "w500"; // Image size for the dialog card details

// --- Declare Elements
let asianShowsDiv = document.querySelector(".asianShows");
let searchBox = document.querySelector(".searchBox");
let input = document.querySelector(".searchInput");

getAsianShows(apiURL);

// --- FETCH ASIAN TV SHOWS (& handle response)
async function getAsianShows(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Unable to fetch data from the API.");
    }
    const data = await res.json();
    console.log(data.results);

    displayAsianShows(filterAsianTVShows(data.results));
  } catch (error) {
    // Handle the error
    console.error(error);
    // Display an error message to the user
    asianShowsDiv.innerHTML = "Failed to access data from the API. Please check your connection and try again";
  }
}


// --- Filter TV Shows by Asian region
function filterAsianTVShows(asianShows) {
  return asianShows.filter((asianShow) => {
    const desiredCountries = ["JP", "CN", "KR", "TH", "HK", "ID", "PH", "VN", "MY", "SG", "TW", "LA", "MM", "IN"]; //ISO 3166-1 alpha-2 country codes 
    return asianShow.origin_country.some((country) => desiredCountries.includes(country)); // Filtering the search result from the listed countries in the above array
  });
}


// --- Display Asian TV Shows
function displayAsianShows(asianShows) {
  asianShowsDiv.innerHTML = "";

  // Load the bookmarked shows from local storage
  let collection = JSON.parse(localStorage.getItem("collection"));

  //a conditional check for a "message" when search is NOT found (or empty):
  if (asianShows.length === 0) { // <-- If indeed empty
    const message = document.createElement("p"); // <-- create a message element
    message.textContent = "No search results found."; // <-- "text message" displayed on user' screen
    message.classList.add("no-results-message"); // <-- class name for message element
    asianShowsDiv.appendChild(message); //<-- append message element to 'asianShowDiv'
    return;
  }


  // populate contents for each TV Show cards:
  asianShows.forEach((asianShow) => {
    const div = document.createElement("div");
    div.classList.add("asianShow");

    // Check if the show is bookmarked
    const isBookmarked = collection && collection.some((show) => show.name === asianShow.name);
    const bookmarkIconClass = isBookmarked ? "fas fa-bookmark bookmark-icon active" : "fas fa-bookmark bookmark-icon";

    //a conditional check to handle cases where the cover image is NOT found:
    const imageUrl = asianShow.poster_path
      ? imgBaseUrl + imgSize + asianShow.poster_path
      : "https://cringemdb.com/img/movie-poster-placeholder.png"; // <--My fallback image URL when the TMDb poster doesn't load

    //overwriting the HTML:
    div.innerHTML = `
    <img class="asianShowImg" src="${imageUrl}" alt="${asianShow.name} image poster" />

    <div class="card-details">
      <h2 class="title asianShowTitle">${asianShow.name}</h2>
      <div class="rateAndBookmark">
          <p class="rate">Rating: <span class="rating">${asianShow.vote_average}</span> 
          </p>
          <div class="bookmark"> 
             <i class="${bookmarkIconClass}"></i>
          </div>
        </div>
     <p class="overview"> ${asianShow.overview}</p>
     </div>
  `;

    div.addEventListener("click", async function (e) {
      // Check if the click was on the bookmark
      if (e.target.closest(".bookmark")) {
        return; // If so, exit the function early
      }

      // Fetch details about the show
      let res = await fetch(`https://api.themoviedb.org/3/tv/${asianShow.id}?api_key=6f0b2683b85ef3e1a6c84e9227158c71`);
      let showDetails = await res.json();

      //Commas to separate the genres
      let genres = showDetails.genres.map(genre => genre.name).join(', ');

      // Fetch reviews about the show
      res = await fetch(`https://api.themoviedb.org/3/tv/${asianShow.id}/reviews?api_key=6f0b2683b85ef3e1a6c84e9227158c71`);
      let reviews = await res.json();
      // Handle the reviews
      let reviewsHTML = '';
      reviews.results.forEach(review => {
        reviewsHTML += `<p><strong>${review.author}:</strong> ${review.content}</p>`;
      });


      // Fetch credits (cast and crew)
      res = await fetch(`https://api.themoviedb.org/3/tv/${asianShow.id}/credits?api_key=6f0b2683b85ef3e1a6c84e9227158c71`);
      let credits = await res.json();
      // Filter for directors
      //cannot use director as there maybe different dirrectors for a tv show and the credits in TMDb API do not have these updates
      //let directors = credits.crew.filter(member => member.job === 'Director').map(director => director.name).join(', ');
      // Use creator instead but check if it is available:
      let creators = showDetails.created_by.length > 0 ? showDetails.created_by.map(creator => creator.name).join(', ') : 'N/A';

      // Get actors (limited to 5 here, change the number to suit your needs)
      let actors = credits.cast.slice(0, 5).map(actor => actor.name).join(', ');

      // Close dialog function
      function closeDialog(dialog) {
        dialog.close();
      }

      // Create a dialog pop-up for more details
      let dialogCardDetails = document.createElement("dialog");
      dialogCardDetails.classList.add("dialog-card-details"); //add a class for styling 
      dialogCardDetails.innerHTML = `
      <img class="dialog-image" src="${imgBaseUrl + dialogImgSize + showDetails.poster_path}" alt="${showDetails.name} image poster"/>
      <div class="dialog-text">
      <h3 class="dialog-heading">${showDetails.name}</h3>
      <p class="dialog-rating"><strong>Average rating:</strong> ⭐️ ${showDetails.vote_average} (${showDetails.vote_count} reviews)</p>
      <p class="dialog-genres"><strong>Genres:</strong> ${genres}</p>
      <p class="dialog-first-air-date"><strong>First air date:</strong> ${showDetails.first_air_date}</p>
      <p class="dialog-seasons"><strong>Number of seasons:</strong> ${showDetails.number_of_seasons}</p>
      <p class="dialog-episodes"><strong>Number of episodes:</strong> ${showDetails.number_of_episodes}</p>
      <p class="dialog-directors"><strong>Directors:</strong> ${creators}</p>
      <p class="dialog-cast"><strong>Cast:</strong> ${actors}</p>
      <p class="dialog-overview"><strong>Overview:</strong> ${showDetails.overview}</p>
      ${reviewsHTML}
      </div>
    `;

      blurElement.classList.add("blur-effect"); // Add the blur effect when the dialog is opened

      // Close button for Card-Details dialog
      let closeButton = document.createElement("button");
      closeButton.classList.add("close-card-detail-dialog");
      closeButton.textContent = "Close";
      closeButton.addEventListener("click", function () {
        dialogCardDetails.close();
        blurElement.classList.remove("blur-effect"); // Remove the blur effect when the dialog is closed
        document.body.classList.remove("dialog-open"); // Remove the class to re-enable scrolling
      });
      // Append the close button at the top of the dialog
      dialogCardDetails.insertBefore(closeButton, dialogCardDetails.firstChild);

      // Append the dialog to the body and open it
      document.body.appendChild(dialogCardDetails);
      document.body.classList.add("dialog-open"); // Add a class to the body to disable scrolling
      dialogCardDetails.showModal();
    });


    asianShowsDiv.appendChild(div); // <-- append the new html div to the 'asianShowsDiv'
  });



  // --- EVENT LISTENER FOR BOOKMARK BUTTON (local storage)
  //Referencing Unit Coordinator Rob Dongas's Scrimba code tutorial in week 10 DECO2017:https://scrimba.com/scrim/c7L6ZGC8
  //I modified Wk10 Scrimba's steps about Local Storage to save TV Shows.
  // ---The event in which user click the bookmark icon on TV show card to their favourites list in local storage
  asianShowsDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("bookmark-icon")) {
      const selectedShow = e.target.closest(".asianShow");
      const showName = selectedShow.querySelector(".title").textContent;

      let collection = JSON.parse(localStorage.getItem('collection'));

      if (collection === null) {
        // Initialize an empty array if the collection is null
        collection = [];
      }

      // Check if the selected show is already in the Collection
      const showIndex = collection.findIndex((show) => show.name === showName);
      const isAlreadyAdded = showIndex !== -1;

      if (!isAlreadyAdded) {
        // Add the selected show to the favorites list:
        collection.push({ name: showName });
        // Add the 'active' class to the bookmark icon
        e.target.classList.add('active');
      } else {
        // Remove the selected show from the favorites list:
        collection.splice(showIndex, 1);
        // Remove the 'active' class from the bookmark icon
        e.target.classList.remove('active');
      }

      // Update the favorites list in local storage:
      localStorage.setItem("collection", JSON.stringify(collection));

      // Print the current collection to the console
      console.log(collection);
    }
    updateCollection();
  });


  // Declare updateCollection function globally
  function updateCollection() {
    let list = document.querySelector('aside ul');
    list.innerHTML = "";

    let collection = JSON.parse(localStorage.getItem('collection'));

    if (collection !== null) {
      collection.forEach((eachShowInCollection) => {
        let listItem = document.createElement('li');

        //Update the forEach loop in the updateCollection function to handle both string and object values correctly:
        //this piece of code were trouble shoot by chatgpt, as the tv show name only displayed as `[object Object]` previously.
        if (typeof eachShowInCollection === "object") {
          listItem.textContent = eachShowInCollection.name;
        } else {
          listItem.textContent = eachShowInCollection;
        }

        list.appendChild(listItem)
      });
    }
  }
  // Call updateCollection() when the page loads to update the bookmark icons
  updateCollection();



  // WHEN THE COLLECTION LIST GOT CLEARED
  let clearButton = document.getElementById('clearBtn');
  clearButton.addEventListener("click", (event) => {
    // Clear the Local Storage
    localStorage.removeItem('collection');

    // Remove active class from all bookmark icons
    let bookmarkIcons = document.querySelectorAll('.bookmark-icon.active');
    bookmarkIcons.forEach((icon) => {
      icon.classList.remove('active');
    });

    updateCollection();
  })
}


//--- EVENT LISTENER FOR SEARCH BOX
//The event in which user uses the search bar to search for TV Shows
searchBox.addEventListener("submit", (e) => {
  e.preventDefault();

  asianShowsDiv.innerHTML = "";
  const InputVal = input.value;
  if (InputVal) {
    const searchURL = searchAPI + InputVal;
    getAsianShows(searchURL);
    input.value = "";
  }
});

