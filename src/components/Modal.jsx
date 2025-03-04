import {useRef, forwardRef, useImperativeHandle} from "react";
import {createPortal} from "react-dom";
import AddProjectButton from "./AddProjectButton";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md m-auto">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <AddProjectButton>{buttonCaption}</AddProjectButton>
            </form>
        </dialog>, document.getElementById('modal-root')
    )
})

export default Modal;