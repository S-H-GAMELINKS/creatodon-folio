import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import InfiniteScroll  from "react-infinite-scroller"
import './App.css';

import Items from './Items';
import { Status, MediaStatusesResponse } from './type';

const App: React.FC = () => {

  const [statuses, setStatuses] = useState<Status[]>([]);
  const [lastStatus, setLastStatus] = useState<Status>();

  console.log(process.env.REACT_APP_MASTODON_DOMAIN)  

  const loadMore = async () => {
    await axios.get(`${process.env.REACT_APP_MASTODON_DOMAIN}/api/v1/timelines/public?remote=false&only_media=true&local=true${lastStatus ? `&max_id=${lastStatus.id}` : ''}`)
      .then((response: MediaStatusesResponse) => {
        setStatuses([...statuses, ...response.data]);
        setLastStatus(response.data.slice(-1)[0]);
      }).catch((error: AxiosError) => {
        console.error(error);
      })
  }

  const loader = (<div className="loader" key={0}>Loading ...</div>);

  return (
    <div className="App">
      <div>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={true}
          useWindow={false}
          loader={loader}>
          <Items statuses={statuses}/>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
