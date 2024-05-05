import { IntNumberConfigType } from "../model"

function generateIntNumber(config: IntNumberConfigType = { minRange: 0, maxRange: 100 }) {
	const generatedNumberInRange = Math.random() * (config.maxRange - config.minRange) + config.minRange;
	const intNumber = Math.floor(generatedNumberInRange);

	return intNumber;
}

export { generateIntNumber }