  // Function to show preview of the selected image
  function showPreview(event) {
    // Get the file input element
    const fileInput = event.target;
    // Get the selected file
    const file = fileInput.files[0];
    // Select relevant DOM elements
    const header = document.querySelector('.header');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadText = document.getElementById('upload-text');
    const footer = document.querySelector('.footer');

    

    // If a file is selected
    if (file) {
        // Create a FileReader object
        const reader = new FileReader();
        // Define onload event handler
        reader.onload = function (e) {
            // Set background image of header to the uploaded image
            header.style.backgroundImage = `url(${e.target.result})`;
            // Remove border and hide upload icon and text
            header.style.border = 'none';
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
            // Display file name in footer
            footer.innerHTML = `<p>${file.name}</p>`;
        };
        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else { // If no file is selected
        // Reset header background, show upload icon and text, reset border, and display default footer text
        header.style.backgroundImage = 'none';
        uploadIcon.style.display = 'inline';
        uploadText.style.display = 'block';
        header.style.border = '2px dashed royalblue';
        footer.innerHTML = `<p>Not selected file</p>`;
    }
}

