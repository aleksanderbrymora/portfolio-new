import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from '../styles/index.module.sass';
import fingers from '../img/Fingers.gif';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useSpring, animated, config } from 'react-spring';

export default () => {
  let data = useStaticQuery(graphql`
    query {
      contentfulAboutMe {
        aboutMeTitle
        landingTitle
        myStoryTitle
        otherTitle
        skillsTitle
        aboutMeParagraph {
          json
        }
        landingParagraph {
          json
        }
        myStoryParagraph {
          json
        }
        otherParagraph {
          json
        }
      }
    }
  `);

  data = data.contentfulAboutMe;

  const animateProps = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.slow,
    delay: 200,
  });

  return (
    <Layout>
      <Head title={'About me'} />
      <animated.div style={animateProps} className={style.hero}>
        <h1>{data.landingTitle}</h1>
        {documentToReactComponents(data.landingParagraph.json)}
      </animated.div>
      <div className={style.longStory}>
        <div>
          <h1>{data.myStoryTitle}</h1>
          {documentToReactComponents(data.myStoryParagraph.json)}
        </div>
        <img src={fingers} alt="fingers tapping eager to read about aleks" />
      </div>
      <div className={style.other}>
        <div>
          <h1>{data.aboutMeTitle}</h1>
          <div className={style.left}>
            {documentToReactComponents(data.aboutMeParagraph.json)}
          </div>
        </div>
        <div>
          <h1>{data.otherTitle}</h1>
          <div className={style.right}>
            {documentToReactComponents(data.otherParagraph.json)}
          </div>
        </div>
      </div>
    </Layout>
  );
};
