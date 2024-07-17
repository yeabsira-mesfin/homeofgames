import { Menu, MenuButton,MenuList,MenuItem,Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelecSortOrder:(sortOrder:string)=>void;
    sortOrder:string
}
const SortSelector = ({onSelecSortOrder,sortOrder}:Props) => {

    const sortOrders = [
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'}
    ];
   const currentSortOrder = sortOrders.find(order=>order.value===sortOrder)
  return (
    <Menu>
    <MenuButton as={Button} leftIcon={<BsChevronDown />}>
     Order by {currentSortOrder?.label || 'Relevance'}
    </MenuButton>
    <MenuList>
      {sortOrders.map(order=> <MenuItem onClick={()=>onSelecSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
    </MenuList>
  </Menu>
  )
}

export default SortSelector