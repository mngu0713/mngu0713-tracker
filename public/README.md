# Asian Show Tracker

## 📽 INTRODUCTION

### <u>**Project Overview:**</u>
This is a Web Application that enables users to interact with an API from The MovieDB to display Asian TV Shows. This application allows users to bookmark their favourite shows to a personalised list, and keeps track of their viewing times with a statistical graph that is updated monthly. The app uses JavaScript, HTML and CSS for frontend, Node.js for server-side operations, and relies on the API for its backend data.

### <u>**Purpose:**</u>
This application streamlines the viewing journey of Asian drama enthusiasts with a centralized, user-friendly tracking platform. It retains a comprehensive record of their TV consumption, aiding reflection on preferences and facilitating the discovery of new favorite shows.

### <u>**Target User:**</u>
This application caters to the diverse range of Asian TV show viewers, ranging from avid fans to casual viewers, aged 15 to 35. 

<br> 

---

<br> 

## 📽 TABLE OF CONTENTS
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
5. [Features](#features)
6. [Built With](#built-with)
7. [Development Process](#development-process)
8. [Testing](#testing)
9. [Future Scope](#future-scope)
10. [Authors](#authors)
11. [License](#license)
12. [Acknowledgements](#acknowledgements)

<br> 

---

<br> 

## 📽 GETTING STARTED
(This section will guide the reader on how to set up the project on their local machine for development and testing purposes.)

### <u>**Installation Instructions**</u>
<!-- Instructions on how to use the application...
(This section provides instructions on how to use your application, including screenshots or even video clips demonstrating the application in use.) -->

🔸 Firstly, there are 2 ways to download the repository from GitHub:

1. **Download as a ZIP file**: Navigate to the main page of the repository on GitHub, click the "Code" button, and then click "Download ZIP". You will then extract the ZIP file to access the project files.<br>
<img src="readme-img/download-zip-file-github.png" width="200"/>

2. **Clone with Git**: Alternatively, if you have Git installed on your device, you can log the following command into your terminal: 
   ```
    git clone https://github.com/mngu0713/mngu0713-tracker.git
   ```

🔸 After downloading or cloning the repository, continue with these steps in your terminal:

1. **Navigate to the project directory using the command:**
   ```
   cd mngu0713-tracker
   ```
2. **Install the necessary packages:**
   ```
   npm install
   ```
3. **Start the server:**
   ```
   node server.js
   ```
4. **Access the application:** The web application is now accessible at http://localhost:8888 in your web browser. 
   > ⚠️ *Note: If you don't have Node.js installed yet, download it from: [Node.js Offical Website](https://nodejs.org/)*

### <u>**API**</u>:
The web application uses <mark>TMDB API</mark>:
- `GET https://api.themoviedb.org/3/movie/550?api_key=6f0b2683b85ef3e1a6c84e9227158c71` to fetch general movie data.
- `GET https://api.themoviedb.org/3/discover/tv?sort_by-popularity.desc&api_key=6f0b2683b85ef3e1a6c84e9227158c71` to fetch Asian TV show data sorted by popularity.
- `GET https://api.themoviedb.org/3/search/tv?&api_key=6f0b2683b85ef3e1a6c84e9227158c71&page=1&query={query}` to search for TV shows.


<br> 

---

<br> 

## 📽 PROJECT STRUCTURE
Explanation of the project structure...
(Outline the architecture of your project. Explain how all the pieces fit together and how the directories and files are organized.)

- `public/`: This directory contains all files that should be directly accessible by the browser.
- 

<br> 

---

<br> 

## 📽 FEATURES
Description of the features and functionalities...
(Describe the features and functionalities of your application. Explain how users can add new shows, view a list of shows, click to see more details, and delete existing shows.)

1. **Fetch Data from API**: The application fetches TV shows data from TheMovieDB API using the fetch() method. The JSON data is then parsed, and the relevant parts are extracted and displayed on the page.

2. **Bookmark Shows**: Users can bookmark their favorite shows to a personalized list called "Your Collection". The application stores the list locally using the localStorage object in JavaScript.

3. **Plot Graph**: Uses the Plotly.js library to plot the users' monthly watch time for different category of Asian TV shows (e.g. Korean Drama, Thai Drama, etc...) using a multiple line graph.

4. **Interactive Search**: The web app allows users to search for their favorite shows through a search input box.

5. **Review Form**: Users can click on the "+Add Review" button to open a pop-up form to add new review of their watched TV shows.

6. **Clear Collection List**: User can clear their entire saved TV show collection in the localStorage by clicking the "Clear Collection" button. 

<br> 

---

<br> 

## 📽 BUILT WITH
- <mark>HTML5</mark> for markup
- <mark>CSS</mark> for styling
- <mark>JavaScript</mark> for functionality
- <mark>Node.js</mark> for the server
- <mark>TheMovieDb API</mark> for backend data
- <mark>Plotly.js</mark> for graph plotting

<br> 

---

<br> 

## 📽 DEVELOPMENT PROCESS
Documentation of the development process, design decisions, iterations, improvements, and lessons learned...

<br> 

---

<br> 

## 📽 TESTING
Description of how the application was tested...

<br> 

---

<br> 

## 📽 FUTURE SCOPE
Discussion of future improvements and features...
(In this section, you should discuss what could be done to extend the application's functionality in the future, and any limitations currently present that you would like to address. This demonstrates your forward-thinking and your understanding of the app's potential.)

<br> 

---

<br> 

## 📽 AUTHORS
List of contributors...

<br> 

---

<br> 

## 📽 LICENSE
License information...

<br> 

---

<br> 

## 📽 ACKOWLEDGEMENTS
Thank you notes...