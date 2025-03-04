import image from "../assets/no-project.png"
import AddProjectButton from "./AddProjectButton"
export default function NoProjectSelected({onSelect}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={image} alt="select a project or create new project" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or create a new project</p>
            <p className="mt-8">
                <AddProjectButton onClick={onSelect}>Create a new project</AddProjectButton>
            </p>
        </div>
    )
}