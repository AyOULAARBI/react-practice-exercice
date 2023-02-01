
// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './RoutersPart/Home';
import Article from './RoutersPart/Article';

function App() {
  const computers = [
    {id:0,name:"HP 292",price:3993,
    desc:"this pc is awesome and cheap"},
    {id:1,name:"Dell 92",price:433,
    desc:"this pc is decent and insanly cheap"},
    {id:2,name:"Sony 666",price:66666,
    desc:"this pc is not  cheap at all"},
    {id:3,name:"Microsoft pc",price:4932,
    desc:"are you kidding me, does microsoft even have a pc,it's an OS company"},
    {id:4,name:"Mac 4.32",price:88888,
    desc:"Apple computers are known to be expensive as hell so don't even complain,anyways this mac book pc is built  by AYOUB OULAARBI in california,USA along with the help of our chinese/taiwanee partners who supply us with the neccessary chips and electronics "},
  ]
  return(
    <BrowserRouter>
       <Routes>
          <Route path='article/:id' element={<Article computers={computers} />} />
          <Route path='/' element={<Home computers={computers} />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
