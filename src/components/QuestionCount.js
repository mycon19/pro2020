import React from 'react';
import PropTypes from 'prop-types';
 
function QuestionCount(props) {
	return (
		<div className="questionCount">
			Question <strong>{props.counter}</strong> of <strong>{props.total}</strong>
		</div>
 
	);
}
 
QuestionCount.propTypes = {
	counter: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
};
 
export default QuestionCount;