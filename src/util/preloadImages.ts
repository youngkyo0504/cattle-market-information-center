const preloadImage = (images: string[]) => {
  images.forEach((imageSrc) => {
    const imageElement = new Image();
    imageElement.src = window.location.origin + imageSrc;
  });
};
export default preloadImage;
