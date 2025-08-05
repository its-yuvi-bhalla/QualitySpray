import {clearResult,checkResult,clickOnDigit,clickOnOperator,clickOnParenthesis} from '../helpers/functions'

// this test checks working of basic math operations and buttons


async function clearFields(){
    await clearResult()
    await checkResult("")
} 
describe('calculator test self', async () => {
    
    beforeEach('clearing field', async ()=>{
        clearFields()
    })

    
 it('should calculate ((100 + 50%) × 4 − 100) ÷ 2 = 250', async () => {
  await clickOnParenthesis()
  await clickOnParenthesis()
  await clickOnDigit(1)
  await clickOnDigit(0)
  await clickOnDigit(0)
  await clickOnOperator('add')
  await clickOnDigit(5)
  await clickOnDigit(0)
  await clickOnOperator('percent')
  await clickOnParenthesis()
  await clickOnOperator('multiply')
  await clickOnDigit(4)
  await clickOnOperator('minus')
  await clickOnDigit(1)
  await clickOnDigit(0)
  await clickOnDigit(0)
  await clickOnParenthesis()
  await clickOnOperator('divide')
  await clickOnDigit(2)
  await clickOnOperator('equal')

  await checkResult('250')
})



    afterEach('clear result field',()=>{
        clearFields()
    })
 })