import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/usecurrencyInfo'



function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo)

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
      <div>
        <div>
          <form>
          <div>
            <InputBox
             label="From"
             amount={amount}
             currencyOptions={options}
             onCurrencyChange={(currency) => setAmount(amount)}
             selectCurrency={from}
             onAmountChange={(amount) => setAmount(amount)}
             />
          </div>
          <div>
            <button>
              Swap
            </button>

          </div>
          <div>
          <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={from}
          amountDisable
          />
          </div>
          <button type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          </form>
      </div>
      </div>
    </>
  )
}

export default App
