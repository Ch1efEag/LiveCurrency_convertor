import React from "react";

function InputBox({
    label,
    amount,
    amountDisabled = false,
    onAmountChanged,
    onCurrencyChanged,
    selectedcurrency = "usd",
    currencyOptions,
    currencyDisabled = false,
    className = ""

}){

    return (<>
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label  className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            <input
            type = "number"
            placeholder="Amount"
             className="outline-none w-full bg-transparent py-1.5"
            disabled = {amountDisabled}
            value = {amount}
            onChange={(e) => onAmountChanged && onAmountChanged(Number(e.target.value))}
            />
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
    <p className="text-black/40 mb-2 w-full">Currency Type</p>
    <select
     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value = {selectedcurrency}
        onchange = {(e) => onCurrencyChanged && onCurrencyChanged(e.target.value)}
        disabled = {currencyDisabled}
    >

    {
        currencyOptions.map((currency) => (
            <option value = {currency}>
                {currency}
            </option>
        ))
    }
    </select>
        </div>
    </div>
    </>);
}
export default InputBox;