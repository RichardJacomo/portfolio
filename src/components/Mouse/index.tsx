import { useEffect, useState } from "react";
import { MouseEffect } from "./style";
import cat from "@/public/static/img/others/cat.gif";
import cat2 from "@/public/static/img/others/cat2.png";

export const Mouse = (): JSX.Element => {
    const [mouse, setMouse] = useState([0, 0]);
    const [catLikes, setCatLikes] = useState(false);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove); 
    }, [mouse]);

    
    function handleMouseMove(event: any) {
        const x: number = event.clientX;
        const y: number = event.clientY;
        setMouse([x, y]);
      }

    return (
            <MouseEffect 
                onMouseMove={handleMouseMove} 
                style={{transform: `translateY(${mouse[0]}px) translateX(${mouse[1] + 50}px)`}}>
                    <img onMouseDown={()=>setCatLikes(!catLikes)} src={catLikes? cat2 : cat} alt="cat"
                    onMouseLeave={()=>setCatLikes(false)} />
            </MouseEffect>
    );
}