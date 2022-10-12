import React, { useEffect, useState, useCallback } from 'react';

import useHttp from './hooks/useHttp';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const transforTasks =useCallback( taskObj => {
    const loadedTasks = []

    for (const taskKey in taskObj)
      loadedTasks.push({id: taskKey, text: taskObj[taskKey].text})

    setTasks(loadedTasks)
  }, [])
  
  const {isLoading, error, sendRequest: fetchTasks} = useHttp(requestConfig, transforTasks)
  
  useEffect(() => {
    fetchTasks(
      {url: 'https://react-http-6b4a6.firebaseio.com/tasks.json'}, 
      transforTasks
    )
  }, [fetchTasks])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
