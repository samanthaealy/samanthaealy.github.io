import React from 'react';
import anime from 'animejs';

import Tile from '../tile';
import pantene from '../../img/pg_line.jpg';
import team from '../../img/aipod_team.jpeg';
import pinball from '../../img/pinball_expo.jpeg';
import arcade from '../../img/arcade_screen.jpeg';
import { content } from '../content';
import '../styles/pages/portfolio.scss';

function Portfolio() {

  const openTile = (elem, key, closeBtn) => {
    document.body.classList.add('no-scroll')

    const tl = anime.timeline();

    // Fade out old text and display new text
    tl.add({
      targets: [...elem.children],
      opacity: 0,
      easing: 'linear',
      duration: 500,
      complete: () => {elem.classList.add('expanded')},
    })
    .add({
      targets: elem,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      easing: 'easeInOutQuad',
      borderRadius: 0,
      duration: 500,
      complete: () => {[...elem.children].forEach((child) => child.style.display = 'none')}
    })

    tl.finished.then(function() {
      elem.appendChild(closeBtn);
      elem.insertAdjacentHTML('afterbegin', content[key])
      anime({
        targets: ['.portfolio-details', '.close'],
        opacity: [0, 1],
        easing: 'linear',
        duration: 500
      })
    })
  }

  const handleClick = (e) => {
    const tile = e.currentTarget,
      key = tile.querySelector(".portfolio-title").textContent,
      clone = tile.cloneNode(true),
      { top, left, width, height } = tile.getBoundingClientRect();

    // Clone and animate tile while hiding original tile
    clone.style.position = 'fixed';
    clone.style.top = top + 'px';
    clone.style.left = left + 'px';
    clone.style.width = width + 'px';
    clone.style.height = height + 'px';
    clone.style.margin = '0';

    tile.style.opacity = '0';
    tile.parentNode.appendChild(clone);

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('portfolio-close');
    closeBtn.appendChild(document.createElement('div'));
    closeBtn.firstChild.classList.add('close');

    openTile(clone, key, closeBtn);

    closeBtn.addEventListener('click', () => {
      // Set width and height to px for smooth animation
      clone.style.width = window.innerWidth + 'px'
        || document.documentElement.clientWidth + 'px'
        || document.body.clientWidth + 'px';
      clone.style.height = window.innerHeight + 'px'
        || document.documentElement.clientHeight + 'px'
        || document.body.clientHeight + 'px';
      
      const tl = anime.timeline();

      // Reverse animation from openTile
      tl.add({
        targets: ['.portfolio-details', '.close'],
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: () => {
          closeBtn.remove();
          document.querySelector('.portfolio-details').remove();
        }
      })
      .add({
        targets: clone,
        top: top,
        left: left,
        width: width,
        height: height,
        borderRadius: '5px',
        easing: 'easeInOutQuad',
        duration: 500,
        complete: () => {
          clone.classList.remove('expanded');
          [...clone.children].forEach((child) => child.style.removeProperty('display'));
        }
      })

      tl.finished.then(function() {
        anime({
          targets: [...clone.children],
          opacity: 1,
          easing: 'linear',
          duration: 500,
          complete: () => {
            tile.style.removeProperty('opacity');
            clone.remove();
            document.body.classList.remove('no-scroll');
          }
        })
      })
    })
  }

  return (
    <section id="portfolio" className="anchor">
      <header>
        <h2>Bringing Products to Life</h2>
      </header>
      <div className="tile-wrap">
        <Tile
          func={handleClick}
          subtitle="Procter &amp; Gamble"
          title="Manufacturing Engineering Manager"
          label="Current Employer"
          src={pantene}
          alt="Samantha Ealy holding Pantene bottle at Tabler Station plant"
          brief="Delivering best in class results for Procter &amp; Gamble's most synchronized, automated and digitized supply chain globally."
        />
        <Tile
          func={handleClick}
          subtitle="aiPod"
          title="Electromechanical Engineer"
          label="Internship"
          src={team}
          alt="Samantha Ealy with aiPod team"
          brief="An infrastructure sensor package enabling wide-range visibility in urban cities for autonomous mobility."
        />
        <Tile
          func={handleClick}
          subtitle="Carnegie Mellon University"
          title="Auto-Leveling Pinball Machine"
          label="Project"
          src={pinball}
          alt="Samantha Ealy at the Carnegie Mellon Design Expo"
          brief="An award-winning, Arduino-controlled pinball design that allows the user to adjust the difficulty of the game."
        />
        <Tile
          func={handleClick}
          subtitle="Carnegie Mellon University"
          title="Scotty Dog's Retro Arcade"
          label="Project"
          src={arcade}
          alt="Fall 2018 CMU Engineering Computation Project Home Screen"
          brief="C++ application consisting of 5 popular arcade games using object oriented programming."
        />
      </div>
    </section>
  )
}

export default Portfolio;