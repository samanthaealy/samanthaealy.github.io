import React, { useEffect } from 'react';
import anime from 'animejs';
import '../styles/pages/home.scss';

function Home() {
  useEffect(() => {
    const tl = anime.timeline({easing: 'easeInOutQuad'}),
      introText = document.querySelectorAll('.intro-line h1');

    // Reveal hidden text for intro and header
    tl.add({
      targets: introText[0],
      translateY: ['100%', 0],
      duration: 1000,
      delay: anime.stagger(300, {start: 1200}),
    })
    .add({
      targets: '.counter',
      opacity: {value: [0, 1], duration: 800, easing: 'linear'},
      textContent: [0, 1.72],
      round: 100,
      duration: 2500,
      endDelay: 500,
      easing: 'easeInCubic'
    }, '-=500')
    .add({
      targets: introText[0],
      translateY: [0, '-100%'],
      duration: 1000,
      delay: anime.stagger(300),
    })
    .add({
      targets: introText[1],
      keyframes: [
        {translateY: ['100%', 0], duration: 1000, endDelay: 500},
        {translateY: [0, '-100%'], duration: 1000, endDelay: 500}
      ],
      delay: anime.stagger(300),
    }, '-=500')
    .add({
      targets: '.fade-down',
      translateY: ['-100%', 0],
      opacity: [0, 1],
      duration: 1000,
    }, '-=500')
  }, [])
  return(
    <section id="home" className="anchor">
      <div className="header-container">
        <div className="intro-line">
          <div>
            <h1 className="fade-up">Hey, you could be on about <span className="counter"></span> billion other websites right now.</h1>
          </div>
        </div>
        <div className="intro-line">
          <div>
            <h1 className="fade-up">So thank you for checking out mine.</h1>
          </div>
        </div>
        <div className="header-line">
          <div>
            <h1 className="fade-down"><span className="shrink">My name is </span>Samantha Ealy,</h1>
          </div>
          <div>
            <h1 className="fade-down">but you can call me Sam.</h1>
          </div>
        </div>
        <div className="header-line">
          <div>
            <h1 className="fade-down shrink">I am a self-taught software developer who likes to build cool things.</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;