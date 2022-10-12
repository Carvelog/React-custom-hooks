# React custom hooks

## Basics

 - The name of a custom hook must start with the word "use" to indicate to React that this will be a hook and it have to be treated as that.

 - When a custom hooks is created the state in the custom hook will be tied to the component in which the custom hook was called, so for every componen in which we call the custom hook will receives its own state, i.e. for every component the custom hook is executed again and every component instance receives its own state or effects or so on.

 - It is the logic what we share with the custom hook not the concrete state.


## Infitine loop issues

  In this example there is a problem if we use the custom hook without considering the problem with states and useEffect if we add the function as a dependency.

  This approach will create an infinite loop because every time useEffect calls the fetchTasks function, the sendRequest function will be called on the custom hook and this will set some new states and the component in which we used the custom hook on will re-render because will detect these new states as the component makes use of them implicitly. So the parent component will re-evaluate and execute useEffect by calling the custom hook again and this will recreate the sendRequest function and return a NEW function object and thus useEffect will be executed again as this new function object is mapped to another memory section and React will interpret this as a new function, even if the logic is the same.ç

  To avoid this, we use the useCallback hook to wrap the sendRequest function in the custom hook.