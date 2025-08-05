import {clearResult,checkResult,clickOnDigit,clickOnOperator} from '../helpers/functions'

// this test confirms that a number cannot be divided by zero


async function clearFields(){
    clearResult()
    browser.pause(1000)
} 
describe('Dividing by Zero', async () => {
    
    beforeEach('clearing field', async ()=>{
        clearFields()
    })
    
 it('should handle division by zero gracefully', async () => {
  await clickOnDigit(4)
  await clickOnOperator('divide')
  await clickOnDigit(0)
  await clickOnOperator('equal')
  browser.pause(2000)
  const result = await $( `id=com.google.android.calculator:id/result_preview` ).getText()
  console.log("result is : ", result)
  expect(result).toContain("Can't divide by 0")
})

    afterEach('clear result field',()=>{
        clearFields()
    })
 })