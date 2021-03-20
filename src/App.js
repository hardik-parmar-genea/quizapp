import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			quText: 'which company deveoped react.js?',
			ansOps: [
				{ ansText: 'Google', isCorrect: false },
				{ ansText: 'microsoft', isCorrect: false },
				{ ansText: 'facebook', isCorrect: true },
				{ ansText: 'Apple', isCorrect: false },
			],
		},
		{
			quText: 'Full Form of MCU?',
			ansOps: [
				{ ansText: 'marvel cinematic universe', isCorrect: false },
				{ ansText: 'martin cinematic universe', isCorrect: true },
				{ ansText: 'marvelous cine universe', isCorrect: false },
				{ ansText: 'mark cine universe', isCorrect: false },
			],
		},
		{
			quText: 'How many grammys Kanye West have?',
			ansOps: [
				{ ansText: '22', isCorrect: true },
				{ ansText: '21', isCorrect: false },
				{ ansText: '23', isCorrect: false },
				{ ansText: '28', isCorrect: false },
			],
		},
		{
			quText: 'Binary of 15?',
			ansOps: [
				{ ansText: '1101', isCorrect: false },
				{ ansText: '0011', isCorrect: false },
				{ ansText: '1011', isCorrect: false },
				{ ansText: '1111', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].quText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].ansOps.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.ansText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}