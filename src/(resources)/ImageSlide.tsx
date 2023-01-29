import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <Image
      rounded={"lg"}
      height={"100%"}
      width={"100%"}
      objectFit={"cover"}
      src={images[currentIndex]}
      alt={"image"}
    />
  );
};

export default ImageSlider;
