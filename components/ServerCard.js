import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,Heading,Text,Button, Stack ,List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,} from '@chakra-ui/react'

  import {MdCheckCircle, MdSettings} from 'react-icons/md'

function ServerCard(props) {
  return (
   <Card align={"center"} >
    <CardHeader>
      <Heading size='md'>{props.name}</Heading>
    </CardHeader>
    <CardBody>
      
      <List spacing={1} fontSize={'xs'} lineHeight='short'>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    ۳۰ گیگابایت حجم آستانه‌ی مصرف منصفانه
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    تضمین اتصال پایدار
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    تضمین سرعت
  </ListItem>
  <ListItem>
    <ListIcon as={MdSettings} color='green.500' />
    پشتیبانی
  </ListItem>
 
</List>
    </CardBody>
    <CardFooter>
      <Button width={'full'} >سفارش خرید</Button>
    </CardFooter>
  </Card>
  )
}

export default ServerCard