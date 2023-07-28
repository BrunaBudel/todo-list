import { Task } from "./Task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPaste } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent, useState } from "react";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function List() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState('')

  const createdTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  function handleNewTask (event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateNewTask (event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(tasks => [...tasks!, {
      id: Math.random().toString(),
      isCompleted: false, 
      content: newTask
  }]);
    setNewTask('')
  }
  
  function deleteTask(id: string){
    const commentsWithoutDeletedOne = tasks.filter( task => {
      return task.id != id;
    })
    setTasks(commentsWithoutDeletedOne)
  }
  
  function TaskFinish (id: string){
    const editedCompletedTask = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                isCompleted: !task.isCompleted
            }
        }

        return task 
    })
    setTasks(editedCompletedTask)
    }

  
  return (
    <div className=" space-y-20">
      <form className="-mt-[50px] flex flex-row max-lg:flex-col gap-2" onSubmit={handleCreateNewTask}>
        <textarea 
          name="task" 
          placeholder="Adicione uma nova tarefa" 
          className="w-full bg-gray-500 rounded-xl px-4 pt-4 resize-none flex items-center"
          value={newTask}
          onChange={handleNewTask}
        />
        <button className="bg-blue-dark p-4 flex items-center justify-center rounded-xl gap-2 text-gray-100" type="submit">
          Criar
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
      <div className="space-y-6">
        <div className="flex max-md:flex-col justify-between gap-4">
          <p className="text-blue font-bold text-sm">Tarefas criadas <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">{createdTasks}</span></p>
          <p className="text-purple font-bold text-sm">Concluídas <span className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">{completedTasks} de {createdTasks}</span></p>
        </div>
        <div className="space-y-3">
          {tasks.map((task, index) => {
            return (
              <Task 
                content={task.content}
                id={task.id}
                isCompleted={task.isCompleted}
                onDeleteTask={deleteTask}
                onTaskComplete={TaskFinish}
                key={index}
              />
            )
          })}
        </div>
        {tasks.length < 1 && ( 
          <div className="flex flex-col items-center text-gray-300 gap-2">
            <FontAwesomeIcon icon={faPaste} className=" h-14"/>
            <div>
              <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}