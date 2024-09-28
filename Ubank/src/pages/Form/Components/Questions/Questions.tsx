import React from 'react';

interface QuestionProps {
  currentNumber: string;  // Ejemplo: "1 of 6"
  text: string;  // El texto de la pregunta
  instruction: string;  // Instrucción, por ejemplo "Select one option"
  imageSrc: string;  // URL o ruta de la imagen en la esquina superior derecha
  questionIndicator: string;  // Ruta de imagen o ícono para el indicador de pregunta
}

const Question: React.FC<QuestionProps> = ({ currentNumber, text, instruction, imageSrc, questionIndicator }) => {
    return (
        <div className="question-container">
            <div className="question-indicator">
                <img src={questionIndicator} alt="Question Indicator" />
                <p className="question-number">{currentNumber}</p>
            </div>
            <div className="question-text">
                <h2>{text}</h2>
                <p className="question-instruction">{instruction}</p>    
                <img src={imageSrc} alt="Question Illustration"/>
            </div>
        </div>
    );
};

export default Question;
