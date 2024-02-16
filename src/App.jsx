import './App.css'
import LeftForm from './Cv-form/Left/Left-Form/LeftForm'
import RightForm from './Cv-form/Right-Form/RightForm'

function App() {

  return (
    <div className='max-w-screen-lg mx-auto flex justify-center items-center'>
      <LeftForm></LeftForm>
      <RightForm></RightForm>
    </div>
  )
}

export default App
