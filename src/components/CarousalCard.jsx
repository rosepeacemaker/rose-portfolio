import TextReveal from "./TextReveal";

const CARD_W = 200;
const CARD_H = 200;
const SCALE = 1.35;



const CarousalCard = () => {
const cardRef = useRef(null);
const imgRef = useRef(null)


  return( <div ref={cardRef} 
  style={{
    width: CARD_W,
    height : CARD_H,
    flexShrink: 0,
    overflow: visible,
    cursor: Pointer,
   }}
  className="relative">
{/* Title Panel */}

<div
 style={{bottom: 'calc(100% + 3rem)'}}
 className="titlePanel absolute left-0 pointer-events flex  flex-col gap-[1rem]">
   <TextReveal>
    <h3>
      
    </h3>
   </TextReveal>
</div>
  </div>
  );
}

export default CarousalCard