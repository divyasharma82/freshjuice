// JavaScript code to show and hide the search bar
document.addEventListener('DOMContentLoaded', function () {
  const searchButtonIcon = document.getElementById('search-button-icon');
  const searchContainer = document.getElementById('search-container');
  const searchBox = document.getElementById('search-box');
  const closeSearch = document.getElementById('close-search');

  if (!searchButtonIcon || !searchContainer || !searchBox || !closeSearch) {
    console.error('One or more elements not found.');
    return;
  }

  // Function to open the search bar
  function openSearch() {
    searchContainer.style.display = 'block';
    searchBox.focus();
  }

  // Function to close the search bar
  function closeSearchBar() {
    searchContainer.style.display = 'none';
    searchBox.value = ''; // Clear the search input
  }

  // Toggle search bar when the search icon is clicked
  searchButtonIcon.addEventListener('click', openSearch);

  // Close the search bar when the "X" button is clicked
  closeSearch.addEventListener('click', closeSearchBar);

  // Close the search bar when clicking outside the search bar
  document.addEventListener('click', function (event) {
    if (
      !searchContainer.contains(event.target) &&
      event.target !== searchButtonIcon
    ) {
      closeSearchBar();
    }
  });

  // Prevent the click on the search bar from closing it
  searchContainer.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});
