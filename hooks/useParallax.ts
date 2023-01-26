import React from "react";

export const useParallax = () => {
  React.useEffect(() => {
    const parallax = document.getElementById('parallax');
    if (parallax) {
      window.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        parallax.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      })
    }
  }, []);
}