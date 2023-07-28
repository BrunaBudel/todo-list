import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { ITask } from './List';

export interface TaskProps extends ITask {
  onTaskComplete: (id: string) => void;
  onDeleteTask: (comment: string) => void;
}

export function Task({content, onDeleteTask, id, isCompleted, onTaskComplete} : TaskProps) {
  
  function handleCompleteTask(){    
    onTaskComplete(id);
 }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className="flex justify-between items-center text-white font-inter bg-gray-500 border border-gray-400 rounded-md p-[16px]">
      <div className="flex  items-start gap-3" >
        <div>
          <input 
          type="checkbox" 
          name="" 
          id="" 
          checked={isCompleted}
          onChange={handleCompleteTask}
          className="taskCheckbox"
          />
        </div>
        <p className={`text-sm  ${
                  isCompleted
                    ? "line-through"
                    : ""
                }
                `}>
                  {content}
                </p>
      </div>
      <button className='group hover:bg-gray-400 p-[6.5px] rounded-md' onClick={handleDeleteTask}>
        <FontAwesomeIcon 
        icon={faTrashCan}
        className='text-gray-300 group-hover:text-danger h-[14px]'
        />
      </button>
      
    </div>
  );
}