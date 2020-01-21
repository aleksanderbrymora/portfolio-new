import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import style from '../styles/contact.module.sass';
import times from '../img/times-solid.svg';

export default () => {
  const [open, setOpen] = useState(false);
  let data = useStaticQuery(graphql`
    query {
      contentfulMetadata {
        socialLinks {
          icon {
            file {
              url
            }
          }
          downloadLink {
            file {
              url
            }
          }
          isDownloadable
          title
          url
        }
      }
    }
  `);

  //   Transition bullshit
  data = data.contentfulMetadata.socialLinks;
  console.log(data);

  return (
    <div className={style.contactContainer}>
      {open ? (
        <div>
          {data.map(link => (
            <p>{link.title}</p>
          ))}
          <img
            className={style.close}
            onClick={() => setOpen(false)}
            src={times}
          ></img>
        </div>
      ) : (
        <p onClick={() => setOpen(true)} className={style.contact}>
          Contact
        </p>
      )}
    </div>
  );
};
