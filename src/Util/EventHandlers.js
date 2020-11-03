/* eslint-disable no-unused-vars */
import Helpers from './Helpers'
const math = require('mathjs')
const {
	isCurrentNumDecimal,
	removeCommas,
	moreOpenBracketsThanClosed,
} = Helpers()
const ops = ['*', '/', '+', '-']

export default function EventHandlers() {
	const HandleNumpadButtonClick = ({ value, expression, setExpression }) => {
		setExpression(
			(expression =
				expression.length === 1 && expression[0] === '0'
					? (expression[0] = [`${value}`])
					: [...expression, `${value}`])
		)
	}

	const HandleDecimalClick = ({ expression, setExpression }) => {
		if (!isCurrentNumDecimal(expression))
			setExpression((expression = [...expression, '.']))
	}

	const HandleOperatorClick = ({ op, expression, setExpression }) => {
		if (op === '-' && expression.length === 1 && expression[0] === '0')
			setExpression((expression = [op]))
		else if (
			ops.includes(expression[expression.length - 1]) &&
			!ops.includes(expression[expression.length - 2]) &&
			op === '-'
		)
			setExpression((expression = [...expression, op]))
		else if (
			!ops.includes(expression[expression.length - 1]) &&
			expression[expression.length - 1] !== '('
		)
			setExpression((expression = [...expression, op]))
		else if (expression[expression.length - 1] === '(' && op === '-')
			setExpression((expression = [...expression, op]))
	}

	const HandleClearButtonClick = ({ setOutput, setExpression }) => {
		setOutput('0')
		setExpression(['0'])
	}

	const HandleBackspaceClick = ({ expression, setExpression, setOutput }) => {
		if (expression.length > 1)
			setExpression((expression = expression.slice(0, -1)))
		else {
			setOutput('0')
			setExpression(['0'])
		}
	}
	const HandleScientificCalculatorSelect = ({
		isScientificOn,
		setIsScientificOn,
	}) => {
		setIsScientificOn((isScientificOn = !isScientificOn))
	}
	const HandleNoRulesCharacterClick = ({
		expression,
		setExpression,
		char,
	}) => {
		setExpression(
			expression.length === 1 && expression[0] === '0'
				? (expression[0] = [`${char}`])
				: [...expression, `${char}`]
		)
	}
	const HandleFunctionClick = ({
		expression,
		setExpression,
		functionSyntax,
	}) => {
		setExpression(
			expression.length === 1 && expression[0] === '0'
				? (expression[0] = [`${functionSyntax}(`])
				: [...expression, `${functionSyntax}(`]
		)
	}
	const HandleEqualsClick = ({
		expression,
		setExpression,
		output,
		setOutput,
	}) => {
		setExpression(
			(expression = () => {
				let newExpression = []
				newExpression.push(removeCommas(output))
				return newExpression
			})
		)
		setOutput('0')
	}

	const HandleCloseBracketClick = ({ expression, setExpression }) => {
		if (
			!ops.includes(expression[expression.length - 1]) &&
			expression.length > 1 &&
			moreOpenBracketsThanClosed(expression)
		)
			setExpression((expression = [...expression, ')']))
	}
	const HandleCopyToClipboardClick = ({ output }) => {
		navigator.clipboard.writeText(output)
	}
	return {
		HandleNumpadButtonClick,
		HandleDecimalClick,
		HandleOperatorClick,
		HandleClearButtonClick,
		HandleBackspaceClick,
		HandleScientificCalculatorSelect,
		HandleNoRulesCharacterClick,
		HandleFunctionClick,
		HandleEqualsClick,
		HandleCloseBracketClick,
		HandleCopyToClipboardClick,
	}
}
