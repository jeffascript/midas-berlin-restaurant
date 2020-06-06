import React, { useEffect, useState } from "react";



const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



export const  useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;

}



export const KnowYourScreenSize = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div>
      width: {width} ~ height: {height}

      { width <= 960 ? <p> small device </p> :<p> big device </p>}
    </div>
  );
};


