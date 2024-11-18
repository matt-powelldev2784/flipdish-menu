import { useMenuContext } from 'cartContext/MenuContext'

export const ConfirmMenuOptions = () => {
  const { tempCartItem } = useMenuContext()
  if (!tempCartItem) return <p>Server error</p>
  console.log('tempCartItem', tempCartItem)

  return (
    <div>
      <p>{tempCartItem.name}</p>
      {tempCartItem.subOptions?.map((subOption) => {
        return (
          <p key={subOption.id}>
            {subOption.name} - {subOption.price}
          </p>
        )
      })}
    </div>
  )
}
