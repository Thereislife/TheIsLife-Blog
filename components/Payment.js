import { Center, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Payment = () => {
  return (
    <Stack justify={'center'} align={"center"} mb="30px" spacing={"0"}>
        <form action="https://bitpay.com/" method="post">
            <input type="hidden" name="action" value="checkout" />
            <input type="hidden" name="posData" value="" />
            <input type="hidden" name="notificationType" value="json" />
            <input type="hidden" name="data" value="XBl5p7YfZ1sobATy2FvmTPh07F6aZUPfc8cAEOs0D+H2iNPmNQhRcLXsg77y8QuUWQVAut+mKNWf8diReRMzjSVE91BSiJak0PtAiMsa7DUSvzW0orUxADWeGBjo9QZmgP+nqxNe3JNNVZM51vJyQA==" />
            <input type="image" src="https://bitpay.com/cdn/en_US/bp-btn-pay-currencies.svg" name="submit" style={{"width": "210px"}} alt="BitPay, the easy way to pay with bitcoins."/>
        </form>
        <Text fontSize={'xs'} fontWeight="" >پرداخت توسط رمز ارز از طریق درگاه‌ امن BitPay</Text>
    </Stack>
  )
}

export default Payment