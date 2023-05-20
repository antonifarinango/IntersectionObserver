
import './App.css'
import useIntersection from './useIntersection'

function App() {

  
  const [elementoRef4, isIntersecting4] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef5, isIntersecting5] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef6, isIntersecting6] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef7, isIntersecting7] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef8, isIntersecting8] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef9, isIntersecting9] = useIntersection({
    threshold: 0.8,
  })
  const [elementoRef10, isIntersecting10] = useIntersection({
    threshold: 0.8,
  })


  return (
    <>
    <div className="contenedor">
      <div className="cajas">1</div>
      <div className="cajas">2</div>
      <div className="cajas">3</div>
      <div ref={elementoRef4}className={isIntersecting4 ? "cajaActiva" : "cajas"}>4</div>
      <div ref={elementoRef5}className={isIntersecting5 ? "cajaActiva" : "cajas"}>5</div>
      <div ref={elementoRef6}className={isIntersecting6 ? "cajaActiva" : "cajas"}>6</div>
      <div ref={elementoRef7}className={isIntersecting7 ? "cajaActiva" : "cajas"}>7</div>
      <div ref={elementoRef8}className={isIntersecting8 ? "cajaActiva" : "cajas"}>8</div>
      <div  ref={elementoRef9}className={isIntersecting9 ? "cajaActiva" : "cajas"}>9</div>
      <div ref={elementoRef10}className={isIntersecting10 ? "cajaActiva" : "cajas"}>10</div>
    </div>
    </>
  )
}

export default App
