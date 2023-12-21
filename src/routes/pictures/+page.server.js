// src/routes/your-route/+page.server.js (or similar)
export async function load() {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=MPd3nG0BXzCFegcCxnWkJNuHm1NUSdQ10jL6SlTy`
  ); // Replace with the actual API endpoint
  const data = await response.json();
  return {
    images:
      data.photos.map(
        (/** @type {{ img_src: any; }} */ photo) => photo.img_src
      ) ?? [],
  };
}
