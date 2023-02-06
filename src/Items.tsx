import React from 'react';
import Masonry from 'react-masonry-css'
import Blur from "react-blur";
import { Status, MediaAttachment } from './type';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

interface ItemsProps {
    statuses: Status[];
}

const Items: React.FC<ItemsProps> = (props: ItemsProps) => {

    const statuses = props.statuses;

    return (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
        {
          statuses.map((status: Status) => {
            return status.media_attachments.map((mediaAttachment: MediaAttachment) => {
                  if (status.sensitive) {
                    return;
                  }
                  return (
                    <div>
                      <img className='img' src={mediaAttachment.url} onClick={() => window.open(status.url)} />
                      <div className='user-info' onClick={() => window.open(`${process.env.REACT_APP_MASTODON_DOMAIN}/@${status.account.acct}`)}>
                        <img className='user-icon'src={status.account.avatar}/>
                        <span className='user-acct'>{status.account.acct}</span>
                      </div>
                    </div>
                  )
                })
          })
        }
        </Masonry>
      );
}

export default Items;
