import { useState } from 'react'
import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectState(prevValue => {
      const taskId = Math.random()
      const newTask = {
         text: text,
         projectId: prevValue.selectedProjectId,
         id: taskId
      }
      return {
        ...prevValue,
        tasks: [newTask, ...prevValue.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState(prevValue => {
      return {
        ...prevValue,
        tasks: projectState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevValue => {
      return {
        ...prevValue,
        selectedProjectId: null,
      }
    })
  }

  function handleCancel() {
    setProjectState(prevValue => {
      return {
        ...prevValue,
        selectedProjectId: undefined,
      }
    })
  }

  function handleNewProject(projectData) {
    setProjectState(prevValue => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevValue,
        projects: [
          ...prevValue.projects,
          newProject
        ]
      }
    })
  }

  function handleSelectedProject(id) {
    setProjectState(prevValue => {
      return {
        ...prevValue,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevValue => {
      return {
        ...prevValue,
        selectedProjectId: undefined,
        projects: prevValue.projects.filter((project) => project.id !== prevValue.selectedProjectId)
      }
    })
  }

  let selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId )
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={(text) => handleAddTask(text)} task={projectState.tasks} onDeleteTask={id => handleDeleteTask(id)}/>;

  if (projectState.selectedProjectId === null) {
    content=<NewProject onSelect={handleNewProject} onCancel={handleCancel}/>
  } else if (projectState.selectedProjectId === undefined) {
    content=<NoProjectSelected onSelect={handleStartAddProject}/>
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onSelect={handleStartAddProject} projects={projectState.projects} onSelectProject={(id) => handleSelectedProject(id)} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  )
}

export default App
