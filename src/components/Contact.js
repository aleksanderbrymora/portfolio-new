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
                key={link.title}
                role="button"
                tabIndex="0"
              >
                <img
                  className={style.image}
                  src={link.icon.file.url}
                  title={link.title}
                  alt={link.title}
                />
              </a>
            ) : (
              <a
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
                role="button"
                tabIndex="0"
              >
                <img
                  className={style.image}
                  src={link.icon.file.url}
                  title={link.title}
                  alt={link.title}
                />
              </a>
            )
          )}
          <img
            className={style.close}
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
            alt="close contact"
            src={times}
            role="button"
          ></img>
        </div>
      ) : (
        <p
          onClick={() => setOpen(true)}
          onKeyDown={() => setOpen(true)}
          className={style.contact}
        >
          Contact
        </p>
      )}
    </div>
  );
};
