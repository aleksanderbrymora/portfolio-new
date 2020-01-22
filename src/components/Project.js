import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import style from '../styles/projects.module.sass';
import github from '../img/github.svg';
import website from '../img/website.svg';

export default active => {
  return (
    <div className={style.project}>
      <h1>{active.title}</h1>
      <div className={style.dateLinks}>
        <p>{active.createdAt}</p>
        {active.hostedAt ? (
          <a href={active.hostedAt}>
            <img src={website} alt="github link" />
          </a>
        ) : null}
        {active.github ? (
          <a href={active.github}>
            <img src={github} alt="" />
          </a>
        ) : null}
      </div>
      <div className={style.description}>
        {documentToReactComponents(active.description.json)}
      </div>
      <img
        className={style.showcase}
        src={`https://${active.projectShowcase.fluid.src}`}
        alt="app showcase"
      />
    </div>
  );
};
