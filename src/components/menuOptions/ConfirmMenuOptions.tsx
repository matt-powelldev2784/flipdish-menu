import { useMenuContext } from 'menuContext/MenuContext'

export const ConfirmMenuOptions = () => {
  const { tempCartItem } = useMenuContext()
  if (!tempCartItem) return <p>Server error</p>
  console.log('tempCartItem', tempCartItem)

  return (
    <div>
      <p>{tempCartItem.name}</p>
      {tempCartItem.menuOptions?.map((menuOption) => {
        return (
          <p key={menuOption.id}>
            {menuOption.name} - {menuOption.price}
          </p>
        )
      })}
    </div>
  )
}
