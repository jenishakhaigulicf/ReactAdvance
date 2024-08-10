import { createContext, useContext } from "react"

const DataContext = createContext("")
const ParentContext = () => {
  return <DataContext.Provider value="Jenisha"><Child1/></DataContext.Provider>
}

const Child1 = () => {
  return <Child2/>
}

const Child2 = () => {
  return <ChildrenContext/>
}

const ChildrenContext = () => {
  const user = useContext(DataContext)
  return <>data from parent {user}</>
}

export default ParentContext