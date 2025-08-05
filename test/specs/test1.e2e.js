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
    it('performing calculations', async () => {
    await    clickOnParenthesis()
    await    clickOnParenthesis()
    await    clickOnDigit(6)
    await    clickOnOperator('add')
    await    clickOnDigit(4)
    await    clickOnParenthesis()
    await    clickOnOperator('multiply')
    await    clickOnDigit(5)
    await    clickOnOperator('minus')
    await    clickOnDigit(1)
    await    clickOnDigit(0)
    await    clickOnParenthesis()
    await    clickOnOperator('divide')
    await    clickOnDigit(2)
    await    clickOnOperator('equal')
        //check result
    await   checkResult('20')
    })

    afterEach('clear result field',()=>{
        clearFields()
    })
 })