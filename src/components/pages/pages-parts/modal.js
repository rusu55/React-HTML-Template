import { useDispatch, useSelector} from "react-redux"
import { closeModal } from "../../../store/slices/modalSlice"

const Modal = (props) =>{
   const { modalStatus } = useSelector(state => state?.modalSlice)    
   const dispatch = useDispatch()

    return(                  
       modalStatus ?
     <div className="modal">
        <div className="modal__body">
            {props.children}
            <input type='button'  className='btn_dark' value='useDi' onClick={() => dispatch(closeModal())}/>
        </div>
    </div>  
    
         : ''
    )
}



export default Modal