# React custom hooks

## Basics

 - The name of a custom hook must start with the word "use" to indicate to React that this will be a hook and it have to be treated as that.

 - When a custom hooks is created the state in the custom hook will be tied to the component in which the custom hook was called, so for every componen in which we call the custom hook will receives its own state, i.e. for every component the custom hook is executed again and every component instance receives its own state or effects or so on.

 - It is the logic what we share with the custom hook not the concrete state.


