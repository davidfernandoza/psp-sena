'use strict'

class PhasesProcessController {
	/*
	 * Cuenta loas atributos o acumula el valor de los atributos que hay por fases
	 */
	async countAttributes(object) {
		const { attributeFromCount, amountPhases, body } = object,
			defects = [],
			attributeAcumulator = !object.attributeAcumulator
				? null
				: object.attributeAcumulator

		// Por cada fase se suma la cantidad de atributos
		for (let i = 1; i <= amountPhases; i++) {
			let count = 0
			let acomulator = 0
			for (const defect of body) {
				if (!attributeAcumulator) {
					if (defect[attributeFromCount] == i) count++
				} else {
					/*
					 * Acomulador
					 */
					if (defect[attributeFromCount] == i)
						acomulator += defect[attributeAcumulator]
				}
			}
			const amount = !attributeAcumulator ? count : acomulator
			defects.push({ phases_id: i, amount })
		}
		return defects
	}
}

module.exports = PhasesProcessController
