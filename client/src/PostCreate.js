import React, {
  useState
} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default () => {
  const [title, setTitle] = useState('');
  const history = useHistory()
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title
    });

    setTitle('');

    history.push('/')
  }
  return (<div>
    <form onSubmit={
      onSubmit
    } >

      <div className="form-group" >
        <label> Title </label>
        <input value={
          title
        }
          onChange={
            e => setTitle(e.target.value)
          }
          className="form-control" />

      </div> <button className="btn btn-primary" > Submit </button>
      <Button color="primary" onClick={() => history.push('/')}> Blogs</Button>

    </form>

  </div>)
}