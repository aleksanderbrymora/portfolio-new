import React from 'react';
import style from '../styles/index.module.sass';

export default props => {
  return (
    <div className={style.logoFeature}>
      <h2>{props.title}</h2>
      <div className={style.logoGrid}>
        {props.logos.map(logo => (
          <img
            src={`https:${logo.file.url}`}
            alt={logo.title}
            title={logo.title}
            key={logo.title}
          ></img>
        ))}
      </div>
    </div>
  );
};
