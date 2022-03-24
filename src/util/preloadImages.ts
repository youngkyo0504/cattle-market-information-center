const preloadImage = (images: string[]) => {
  images.forEach((imageSrc) => {
    const imageElement = new Image();
    console.log(window.location);
    console.log(window.location.origin);
    imageElement.src = window.location.origin + imageSrc;
  });
};
export default preloadImage;
