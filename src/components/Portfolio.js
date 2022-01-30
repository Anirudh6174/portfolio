import React from "react";
import tetris from "../images/tetris.jpg";
import todo from "../images/todo.jpg";
import paperkit from "../images/paperkit.jpg";
import citytours from "../images/citytours.jpg";
// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Tetris
  const openPopupboxTetris = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={tetris} alt="Tetris Clone Project..." />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
      illo est expedita quos adipisci suscipit unde qui perferendis.</p>
      <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Anirudh6174/portfolio")}>https://github.com/Anirudh6174/portfolio</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigtetris = {
    titleBar: {
      enable: true,
      text: "Tetris Clone Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Todoist Clone

  const openPopupboxTodo = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={todo} alt="Todoist Clone Project..." />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
      illo est expedita quos adipisci suscipit unde qui perferendis.</p>
      <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Anirudh6174/portfolio")}>https://github.com/Anirudh6174/portfolio</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigtodo = {
    titleBar: {
      enable: true,
      text: "Todoist Clone Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

    // City Guide Project

    const openPopupboxTours = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={citytours} alt="City Guide Project..." />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
        illo est expedita quos adipisci suscipit unde qui perferendis.</p>
        <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Anirudh6174/portfolio")}>https://github.com/Anirudh6174/portfolio</a>
      </>
      )
      PopupboxManager.open({content})
    }
  
    const popupboxConfigtours = {
      titleBar: {
        enable: true,
        text: "City Guide Project"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }

      // PaperKit Clone

  const openPopupboxpaper = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={paperkit} alt="Paper Kit Clone Project..." />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
      illo est expedita quos adipisci suscipit unde qui perferendis.</p>
      <b>Github</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Anirudh6174/portfolio")}>https://github.com/Anirudh6174/portfolio</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigpaper = {
    titleBar: {
      enable: true,
      text: "Paper Kit Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row row-cols-auto justify-content-center">
              <div className="portfolio-image-box" onClick={openPopupboxTetris}>
                <img className="portfolio-image" src={tetris} alt="Tetris Clone Project..." />
                <div className="overflow"></div>   
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />             
              </div>
              {/*  */}
              <div className="portfolio-image-box" onClick={openPopupboxTodo}>
                <img className="portfolio-image" src={todo} alt="Todoist Clone Project..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>              
              {/*  */}
              <div className="portfolio-image-box" onClick={openPopupboxpaper}>
                <img className="portfolio-image" src={paperkit} alt="Paper kit Clone..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>        
              {/*  */}
              <div className="portfolio-image-box" onClick={openPopupboxTours}>
                <img className="portfolio-image" src={citytours} alt="City Guide Project..." />
                <div className="overflow"></div>
                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
              </div>
          </div>  
        </div>
        <PopupboxContainer {...popupboxConfigtetris} />
        <PopupboxContainer {...popupboxConfigtodo} />
        <PopupboxContainer {...popupboxConfigtours} />
        <PopupboxContainer {...popupboxConfigpaper} />
    </div>
  )
};

export default Portfolio;
