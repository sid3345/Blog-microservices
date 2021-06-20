import React, {
  useState
} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default function PostCreate() {
  const history = useHistory()
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
      content
    });

    setTitle('');
    setContent('');

    history.push('/')

  }
  return (<div>

    <FormControl onSubmit={
      onSubmit
    } >

      <div className="form-group" >
        <InputLabel> Title </InputLabel>
        <Input value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control" />
      </div>

      <Button color="secondary"> Submit </Button>
      <br />
      <Button color="primary" onClick={() => history.push('/')}>Blogs</Button>

    </FormControl>

  </div >)
}