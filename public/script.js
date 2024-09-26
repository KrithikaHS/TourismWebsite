// // Fetch data from the server
// const cityname=document.getElementById('city-select');
// const spaname=document.getElementById('spanele');
// console.log(cityname+"city");
// spaname.innerHTML=cityname.value;
// fetch('/data')
//   .then(response => response.json())
//   .then(data => {
//     const gallery = document.getElementById('image-gallery');
    
//     data.forEach(row => {
//       // Create a div for each image item
//       const imageItem = document.createElement('div');
//       imageItem.classList.add('image-item');

//       // Create and append image inside the div
//       if (row.placeimg) {
//         const img = document.createElement('img');
//         img.src = row.placeimg;
//         img.alt = `${row.placename} Image`;
//         img.style.maxWidth = '100%'; // Make sure image is responsive
//         imageItem.appendChild(img); // Add the image to the imageItem
//       }

//       // Add place name as a caption
//       const imageName = document.createElement('div');
//       imageName.classList.add('image-name');
//       imageName.textContent = row.placename;
//       imageItem.appendChild(imageName); // Append the name below the image

//       // Add a button below the image and place name
//       const addButton = document.createElement('button');
//       addButton.textContent = 'Add';
//       addButton.style.marginTop = '10px'; // Optional: add margin for spacing
//       addButton.classList.add('add-button'); // Add a class for styling if needed

//       // Default styles for the button
//       addButton.style.backgroundColor = 'green'; // Initial background color for 'Add'
//       addButton.style.color = 'white'; // Initial text color

//       imageItem.appendChild(addButton); // Append the button below the place name

//       // Toggle button text and color between "Add" and "Added!" on click
//       addButton.addEventListener('click', () => {
//         if (addButton.textContent === 'Add') {
//           addButton.textContent = 'Added!';
//           addButton.style.backgroundColor = 'gray'; // Change color to gray when added
//           addButton.style.color = 'white'; // Change text color to white
//         } else {
//           addButton.textContent = 'Add';
//           addButton.style.backgroundColor = 'green'; // Change back to green for 'Add'
//           addButton.style.color = 'white'; // Change text color back to white
//         }
//       });

//       // Append the image item to the gallery
//       gallery.appendChild(imageItem);
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));

//-------------------------------------------------------------------------
// Function to get query parameters from URL
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Get the city name from the query parameter
const city = getQueryParam('city');
const spaname = document.getElementById('spanele');
const gallery = document.getElementById('image-gallery');

// Update the span with the city name
spaname.textContent = city;
console.log("fetch outside");
// Fetch data from the server for the selected city
fetch(`http://localhost:3000/data?city=${encodeURIComponent(city)}`)
  .then(response => response.json())
  .then(data => {
    console.log('fetch inside');
    data.forEach(row => {
      // Create a div for each image item
      const imageItem = document.createElement('div');
      imageItem.classList.add('image-item');

      // Create and append image inside the div
      if (row.placeimg) {
        const img = document.createElement('img');
        img.src = row.placeimg;
        img.alt = `${row.placename} Image`;
        img.style.maxWidth = '100%'; // Make sure image is responsive
        imageItem.appendChild(img); // Add the image to the imageItem
      }

      // Add place name as a caption
      const imageName = document.createElement('div');
      imageName.classList.add('image-name');
      imageName.textContent = row.placename;
      imageItem.appendChild(imageName); // Append the name below the image

      // Add a button below the image and place name
      const addButton = document.createElement('button');
      addButton.textContent = 'Add';
      addButton.style.marginTop = '10px'; // Optional: add margin for spacing
      addButton.classList.add('add-button'); // Add a class for styling if needed

      // Default styles for the button
      addButton.style.backgroundColor = 'green'; // Initial background color for 'Add'
      addButton.style.color = 'white'; // Initial text color

      imageItem.appendChild(addButton); // Append the button below the place name

      // Toggle button text and color between "Add" and "Added!" on click
      addButton.addEventListener('click', () => {
        if (addButton.textContent === 'Add') {
          addButton.textContent = 'Added!';
          addButton.style.backgroundColor = 'gray'; // Change color to gray when added
          addButton.style.color = 'white'; // Change text color to white
        } else {
          addButton.textContent = 'Add';
          addButton.style.backgroundColor = 'green'; // Change back to green for 'Add'
          addButton.style.color = 'white'; // Change text color back to white
        }
      });

      // Append the image item to the gallery
      gallery.appendChild(imageItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
