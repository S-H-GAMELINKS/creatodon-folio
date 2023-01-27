import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Status, MediaAttachment } from './type';

interface ItemsProps {
    statuses: Status[];
}

const Items: React.FC<ItemsProps> = (props: ItemsProps) => {

    const statuses = props.statuses;

    return (
        <ResponsiveMasonry>
          <Masonry>
          {
            statuses.map((status: Status) => {
              return status.media_attachments.map((mediaAttachment: MediaAttachment) => {
                    if (status.sensitive) {
                      return;
                    }
                    return <img src={mediaAttachment.url} onClick={() => window.open(status.url)} />;
                  })
            })
          }
          </Masonry>
        </ResponsiveMasonry>
      );
}

export default Items;
