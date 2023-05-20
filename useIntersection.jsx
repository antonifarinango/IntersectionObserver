
import { useState,useEffect, useRef } from "react";



function useIntersection (opciones = {}) {
  const [isIntersecting, setIsIntersectign] = useState(false);
  const elementoRef = useRef();

  useEffect(() => {
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersectign(entry.isIntersecting);
        });
      },
      opciones);

    if (elemento) {
      observer.observe(elemento);
    }

    return () => {
        if(elemento){
           observer.unobserve(elemento); 
        }
    };
  }, [opciones]);

  return [elementoRef, isIntersecting];
}
export default useIntersection;
