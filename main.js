function calculateStockPrice(marketValue, chargePercentage, minimumCharge) {
    // Calculate the charge amount
    const chargeAmount = Math.max(marketValue * chargePercentage, minimumCharge)

    // Calculate the stock price for loss
    const lossStockPrice = marketValue - chargeAmount

    // Calculate the break -even stock price
    const breakEvenStockPrice = marketValue

    // Calculate the stock price for profit
    const profitStockPrice = marketValue + chargeAmount

    return {
        lossStockPrice,
        breakEvenStockPrice,
        profitStockPrice
    }
}

// Example usage
const marketValue = 1000
// Replace with the actual market value of the stock
const chargePercentage = 0.003
// 0.3 % expressed as a decimal
const minimumCharge = 15
// Minimum charge

const result = calculateStockPrice(parseInt(marketValue), chargePercentage, minimumCharge)
console.log("Stock Price for Loss:", result.lossStockPrice)
console.log("Break-Even Stock Price:", result.breakEvenStockPrice)
console.log("Stock Price for Profit:", result.profitStockPrice)
