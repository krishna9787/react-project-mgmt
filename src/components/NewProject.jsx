import React, {useRef} from "react"
import Input from "../components/Input"
import Modal from "../components/Modal"

export default function NewProject({ onSelect, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === '') {
            modal.current.open();
        }

        onSelect({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Looks like you did not enter values for all the input fields</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li><button className="px-6 py2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 cursor-pointer" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input ref={title} label="Title" />
                    <Input ref={description} textarea label="Description" />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}