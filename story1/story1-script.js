// Initialize the flipbook with Turn.js
$(document).ready(function () {
  // Create pages dynamically
  const totalPages = 25; // Number of pages
  const flipbook = $("#flipbook");

  for (let i = 1; i <= totalPages; i++) {
    flipbook.append(`<div class="page" style="background-image: url('../images/story1/page${i}.jpg')"></div>`);
  }

  // Initialize Turn.js
  flipbook.turn({
    width: 800,
    height: 500,
    autoCenter: true,
  });
});
