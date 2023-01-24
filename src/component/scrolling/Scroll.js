import { useEffect, useState } from "react";
import classes from './Scroll.module.css'

function Scroll() {

    // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    
    return (
        <div>
            {showButton && (
            <button onClick={scrollToTop} className={classes.top}>
            &#8679;
            </button>
          )}
        </div>
    )
        
    
}
export default Scroll;