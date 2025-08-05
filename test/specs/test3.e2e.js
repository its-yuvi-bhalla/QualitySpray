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

    
 it('should perform 2.5 + 3.7 = 6.2', async () => {
  await clickOnDigit(2)
  await clickOnOperator('dot')
  await clickOnDigit(5)
  await clickOnOperator('add')
  await clickOnDigit(3)
  await clickOnOperator('dot')
  await clickOnDigit(7)
  await clickOnOperator('equal')
  await checkResult('6.2')
})


    afterEach('clear result field',()=>{
        clearFields()
    })
 })