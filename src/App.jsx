import './App.css'

import { useForm } from 'react-hook-form'
import axios from 'axios'

function App() {
  const form = useForm()
  const { register, handleSubmit } = form

  // x-www-form-urlencoded
  // new Buffer.from(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_SECRET).toString('base64')

  const onSubmit = (data) => {
    axios.post(`https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_SECRET}`, {
      timeout: 1000,
      headers: {
        'Authorization': 'Basic ' + btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_SECRET),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }).then((msg) => {
      console.log(msg)
    })
  }

  return (
    <>
      <h1>The Web of Spotify Related Artists</h1>
      <div className='card'>
        <input type='text' className='search'
        placeholder='Enter artist here'
        {...register('searchInput')} />
        <button onClick={handleSubmit(onSubmit)}>
          Search
        </button>
      </div>
    </>
  )
}

export default App