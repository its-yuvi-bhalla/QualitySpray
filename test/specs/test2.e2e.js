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
    it('should perform (((9 - 3) × (8 + 2)) ÷ 3) + 5 = 25', async () => {
    

    await clickOnParenthesis()         
    await clickOnParenthesis()        
    await clickOnParenthesis()        
    await clickOnDigit(9)
    await clickOnOperator('minus')
    await clickOnDigit(3)
    await clickOnParenthesis()         
    await clickOnOperator('multiply')
    await clickOnParenthesis()         
    await clickOnDigit(8)
    await clickOnOperator('add')
    await clickOnDigit(2)
    await clickOnParenthesis()         
    await clickOnParenthesis()         
    await clickOnOperator('divide')
    await clickOnDigit(3)
    await clickOnParenthesis()         
    await clickOnOperator('add')
    await clickOnDigit(5)
    await clickOnOperator('equal')

    await checkResult('25')
})


    afterEach('clear result field',()=>{
        clearFields()
    })
 })