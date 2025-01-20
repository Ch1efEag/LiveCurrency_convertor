import React from "react";

function InputBox({
    label,
    amountDisabled = false,
    onAmountChanged,
    onCurrencyChanged,
    currencyOptions,
    currencyDisabled = false

}){

    return (<>
    <div>
        <div>
            <label>
                {label}
            </label>
            <input
            type = "number"
            placeholder="Amount"
            disabled = {amountDisabled}
            value = {amount}
            onChange={(e) => onAmountChanged && onAmountChanged(Number(e.target.value))}
            />
        </div>

        <div>
    <p>Currency Type</p>
    <select
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