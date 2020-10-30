/* eslint-disable no-unused-vars */
import Helpers from './Helpers'
const { isCurrentNumDecimal } = Helpers()
const ops = ['*', '/', '+', '-']

export default function EventHandlers() {
	const HandleNumpadButtonClick = (value, expression, setExpression) => {
		setExpression(
			(expression =
				expression === '0'
					? `${value}`
					: (expression = `${expression}${value}`))
		)
	}

	const HandleDecimalClick = (expression, setExpression) => {
		console.log(isCurrentNumDecimal)
		if (!isCurrentNumDecimal(expression))
			setExpression((expression = `${expression}.`))
	}

	const HandleOperatorClick = ({ op, expression, setExpression }) => {
		if (op === '-' && !ops.includes(expression[expression.length - 2]))
			setExpression((expression = `${expression}${op}`))
		else if (!ops.includes(expression[expression.length - 1]))
			setExpression((expression = `${expression}${op}`))
	}

	const HandleClearButtonClick = (setOutput, setExpression) => {
		setOutput('0')
		setExpression('0')
	}

	const HandleBackspaceClick = (expression, setExpression, setOutput) => {
		if (expression.length > 1)
			setExpression((expression = expression.slice(0, -1)))
		else {
			setOutput('0')
			setExpression('0')
		}
	}
	const HandleScientificCalculatorSelect = ({
		isScientificOn,
		setIsScientificOn,
	}) => {
		setIsScientificOn((isScientificOn = !isScientificOn))
	}

	const HandleFunctionClick = ({
		expression,
		setExpression,
		functionSyntax,
	}) => {
		setExpression(
			expression === '0'
				? `${functionSyntax}(`
				: `${expression} ${functionSyntax}(`
		)
	}
	return {
		HandleNumpadButtonClick,
		HandleDecimalClick,
		HandleOperatorClick,
		HandleClearButtonClick,
		HandleBackspaceClick,
		HandleScientificCalculatorSelect,
		HandleFunctionClick,
	}
}
