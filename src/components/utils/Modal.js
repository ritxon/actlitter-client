import React from "react";
import { animated } from "react-spring";
import Button from "./Button";

import "./modal.css";

const Modal = ({ style, closeModal, isCorrect, textModal, textButton }) => (
	<div className="cssOverlay">
		<animated.div style={style} className="modal">
			<div className="container-modal-info">
				{isCorrect ? (
					<img src="images/checkmark.png" alt="Image" />
				) : (
					<img src="images/xmark.png" alt="Image" />
				)}
				<h2 className="modal-title">{isCorrect ? "It's great, you got the knowledge in this area.":"That's okay. You almost had it!"}</h2>
				<p className="modal-content">
					{textModal}
				</p>
			</div>
      <Button
					styleBtn={`${isCorrect ? "green-btn-modal" : "red-btn-modal"} btn-modal quiz-btn`}
					text={textButton}
					onClick={() => closeModal()}>
          </Button>
		</animated.div>
	</div>
);

export default Modal;
