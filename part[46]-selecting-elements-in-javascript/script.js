// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')[0]
// const cssImage = document.getElementById('css-image')
// const cssImage = document.querySelectorAll('#css-image')
// const cssImage = document.querySelector('.css-image')
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
const ul = document.querySelector('ul')  // Selects the first <ul> element in the document

const allImages = document.querySelectorAll('img')  // Selects all <img> elements in the document

const imageInsideUl = ul.querySelector('.css-image')  // Selects the first element with class 'css-image' inside the <ul> element

const imagesUrl = [
  'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
  'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
  'https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=',
]  // An array of image URLs

// allImages[0].src = imagesUrl[0]
// allImages[1].src = imagesUrl[1]
// allImages[2].src = imagesUrl[2]

// Loop that iterates through all images and sets the `src` attribute for each image using the URLs in the `imagesUrl` array
// for (let i = 0; i < allImages.length; i++) {
//   allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, i) => {
  image.src = imagesUrl[i]  // For each image element, the `src` is set to the corresponding URL from the `imagesUrl` array
})
