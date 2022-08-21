import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Repos({ repos_url }) {
  const [repos, setRepos] = useState([]);

  const fecthRepo = async () => {
    const { data } = await Axios(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fecthRepo();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((item) => (
        <ListGroupItem
          key={item.id}
          tag={'a'}
          href={item.html_url}
          target='_blank'
        >
          <div className='text-primary'>{item.name}</div>
          <div className='text-secondary'>{item.language}</div>
          <div className='text-info'>{item.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default Repos;
