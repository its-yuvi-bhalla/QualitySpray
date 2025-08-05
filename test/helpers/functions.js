export async function clickOnDigit(digit){
    return await $(`id=com.google.android.calculator:id/digit_${digit}`).click()
}

export async function clickOnOperator(operator){

let op

switch (operator) {
    case 'multiply':
        op = 'mul'
        break;
    case 'minus':
        op = 'sub'
        break;
    case 'add':
        op = 'add'
        break;
    case 'divide':
        op = 'div'
        break;
    case 'percent':
        op = 'pct'
        break;
 
    default:
        break;
 }
    if(operator === 'equal'){
        return await $(`id=com.google.android.calculator:id/eq`).click()
    }
    if(operator === 'dot'){
        return await $(`id=com.google.android.calculator:id/dec_point`).click()
    }
    return await $(`id=com.google.android.calculator:id/op_${op}`).click()

    
}

export async function checkResult(value){
    const result = await $(`id=com.google.android.calculator:id/result_final`).getText()

    expect(value).toBe(result)

}

export async function clearResult(){
    return await $(`id=com.google.android.calculator:id/clr`).click()
}

export async function clickOnParenthesis(){
    await browser.pause(1000);
    return await $(`id=com.google.android.calculator:id/parens`).click()
}