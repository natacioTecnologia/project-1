import P from 'prop-types'
import './style.css';
import { useReducer ,useContext, createContext} from 'react';

export const globalState = {
  title: 'Ola',
  body: 'body',
  counter: 0
}

export const actions =  {
  SET_TEXT: 'SET_TEXT'
}

export const reducer = (state, action) => {
  switch(action.type){
    case actions.SET_TEXT: {
      return { ...state, title:action.payload };
    }
    default: return {...state}
  }

}


export const Context = createContext(null);
export const AppContext = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{state}}>{children}</Context.Provider>
  )
}

AppContext.prototype = {
  children: P.node,
}

export const H1 = () =>{
  const contexto = useContext(Context)

  return (
    <h1>{contexto.state.title}</h1>
  )
};

function Home() {


  return (
    <AppContext>
      <div className="Home">
      <H1/>
      </div>
    </AppContext>
  );
}

export default Home;
