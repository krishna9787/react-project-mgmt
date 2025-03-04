import NewTask from "./NewTask";

export default function Tasks({ onAddTask, tasks, onDeleteTask }) {

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAddTask={(text) => onAddTask(text)}/>
            {tasks.length === 0 && <p className="text-stone-700 mb-4">This project does not have any tasks</p>}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task)=> <li className="flex justify-between my-4 py-2" key={task.id}><span className="px-4">{task.text}</span><button className="text-stone-700 hover:text-red-500 px-4" onClick={() => onDeleteTask(task.id)}>Clear</button></li>)}
            </ul>}
        </section>
    )
}