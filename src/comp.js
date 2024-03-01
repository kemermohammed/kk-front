import './index.css'
const Comp = ({name,image}) =>{
    return(
    
    <div className='both'>
        <div >
        <h1>{name}</h1>
        </div>
        <div>
        <img className='comp' src={image} alt="none"/>
        </div>
    </div>
  )

}
export default Comp