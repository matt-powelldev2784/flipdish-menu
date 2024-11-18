import { useMenuContext } from 'cartContext/MenuContext'

export const ConfirmMenuOptions = () => {
  const { tempCartItem } = useMenuContext()
  console.log('tempCartItem', tempCartItem)

  return <div>test</div>
}
