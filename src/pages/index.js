import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import style from '../styles/index.module.sass';
import fingers from '../img/Fingers.gif';

export default () => (
  <Layout>
    <Head title={'About me'} />
    <div className={style.hero}>
      <h1>
        Hi I'm <br /> Aleks!
      </h1>
      <p>
        I’ve just finished my Software Engineering Immersive at
        <strong> General Assembly</strong>. Few of the marvelous things I
        learned there are React, Java Script in as many forms as possible, Ruby
        on Rails and a bunch of things that are listed down below so read on!
      </p>
    </div>
    <div className={style.longStory}>
      <div>
        <h1>Long story short</h1>
        <p>
          I’ve been programming since January, when I started Computer Systems
          Engineering at Newcastle University. I did not want to stay there,
          because I wanted to go and experience the real world of working in
          programming. I did not want to spend at least 4 years at university
          just to get the work, which lead me to joining GA. After 3 months
          there I am so happy I made that choice and now I’m thrilled to go and
          pursue my professional career!
        </p>
      </div>
      <img src={fingers} alt="fingers tapping eager to read about aleks" />
    </div>
    <div className={style.other}>
      <div>
        <h1>Few words about me</h1>
        <p className={style.left}>
          I love <strong>learning</strong>, especially from other people. I
          usually spend my free time on (over)researching my new hobbies. I am{' '}
          <strong>inspired</strong> by other people’s great ideas and{' '}
          <strong>unique approaches</strong> and love working in an environment
          with people who have those. I do not mind critique at all, quite the
          opposite - I appreciate it.
        </p>
      </div>
      <div>
        <h1>What else do I do</h1>
        <p className={style.right}>
          Besides programming I love creating music. I have a small section
          about it if you want to have a listen! I’m also a huge DIY fan. From
          building and constantly fixing my electric bike, to simple smart home
          implementation with Raspberry Pie, to a bunch of speakers I created
          from old radios. I’m currently planning out my next project involving
          converting a car to electric. Mechanical keyboards are my jam lately
          and I’m in the middle of learning to type on 4x12 Planck.
        </p>
      </div>
    </div>
  </Layout>
);
