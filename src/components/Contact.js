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
        <div className={style.iconStack}>
          {data.map(link =>
            link.isDownloadable ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link.downloadLink.file.url}
                download
              >
                <img
                  className={style.image}
                  src={link.icon.file.url}
                  title={link.title}
                  alt={link.title}
                  key={link.title}
                />
              </a>
            ) : (
              <a target="_blank" rel="noopener noreferrer" href={link.url}>
                <img
                  className={style.image}
                  src={link.icon.file.url}
                  title={link.title}
                  alt={link.title}
                  key={link.title}
                />
              </a>
            )
          )}
          <img
            className={style.close}
            onClick={() => setOpen(false)}
            alt="close contact"
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
