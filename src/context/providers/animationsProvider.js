import { useEffect } from "react";
import AnimationsContext from "../animationsContext";

const AnimationsProvider = ({children}) =>{

    const scrollAnimations = () =>{
        const animation = (elements, className)=>{
            elements.forEach((element)=>{
                const elementPosition = element.getBoundingClientRect().top
                const viewPortHeight = window.innerHeight - 100
                if(elementPosition < viewPortHeight){
                    element.classList.add(className)
                }
                else{
                    element.classList.remove(className)
                }
            })
        }
        const elements = document.querySelectorAll('.animation')
        const elements_right = document.querySelectorAll('.animation-left')
       animation(elements, 'animate')
       animation(elements_right, 'animate')
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollAnimations)
    }, [])

    return(
        <AnimationsContext.Provider value>
                {children}
        </AnimationsContext.Provider>
    )       
    
}

export default AnimationsProvider