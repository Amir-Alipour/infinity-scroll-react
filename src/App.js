import {useEffect, useState} from 'react';
import User from './User';
import {Content, Loading} from './Components'
import {getUsers} from './API';

function App() {
  const [page, setPage] = useState(1) ;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = event => {
    const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
    scrollHeight - scrollTop === clientHeight && setPage(prevPage => prevPage + 1);
  }


  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      setUsers(prev => [...prev, ...newUsers]);
      setLoading(false);
    }

    loadUsers();
  }, [page])

  return (
    <div className="App">
      <Content handler={handleScroll}>
        {users && users.map(user => <User key={user.cell} user={user.email} />)}
      </Content>
      {loading && <Loading>Loading</Loading>}
    </div>
  );
}

export default App;
