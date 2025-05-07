const submitButton = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-message");
const selectedRating = document.getElementById("selected-rating");
const rateAgainButton = document.getElementById("rate-again-btn");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const ratingButtons = document.querySelectorAll(".rating-btn");

let selectedValue = null;

// Handle Rating Selection
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active state from all buttons
    ratingButtons.forEach((btn) => {
      btn.classList.remove("bg-White", "text-Grey900");
      btn.classList.add("bg-Grey900", "text-Grey500");
    });

    // Add active state to the selected button
    button.classList.remove("bg-Grey900", "text-Grey500");
    button.classList.add("bg-White", "text-Grey900");

    // Store the selected value
    selectedValue = button.getAttribute("data-value");
  });
});

// Handle Submit Button Click
submitButton.addEventListener("click", () => {
  if (!selectedValue) {
    // Show error message if no rating is selected
    errorMessage.classList.remove("hidden");
    return;
  }

  // Transition to Thank You State
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");

  // Display the selected rating
  selectedRating.textContent = `You selected ${selectedValue} out of 5`;
});

// Handle Rate Again Button Click
rateAgainButton.addEventListener("click", () => {
  // Reset the form
  selectedValue = null;

  // Reset all rating buttons to their default state
  ratingButtons.forEach((btn) => {
    btn.classList.remove("bg-White", "text-Grey900");
    btn.classList.add("bg-Grey900", "text-Grey500");
  });

  // Hide the error message if it was visible
  errorMessage.classList.add("hidden");

  // Transition back to the Rating State
  thankYouState.classList.add("hidden");
  ratingState.classList.remove("hidden");
});
