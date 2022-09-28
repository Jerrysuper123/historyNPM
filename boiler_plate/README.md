# history is used in V5, useNavigate is to be used in V6

https://stackoverflow.com/questions/71122804/use-of-react-router-v6-history-navigate-in-redux

```
/ v5 import { useHistory } from 'react-router-dom';

V5

function MyButton() {
  let history = useHistory();
  function handleClick() {
    history.push('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
};
V6

// v6 import { useNavigate } from 'react-router-dom';

function MyButton() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/home');
  };
  return <button onClick={handleClick}>Submit</button>;
};
and

V5

// v5
history.push('/home');
history.replace('/home');
history.push('/home', {state: state});
V6

// v6
navigate('/home');
navigate('/home', {replace: true});
navigate('/home', {state: state});
```
