import { useMenuContext } from 'cartContext/CartContext'

interface SubOptionProps {
  id: number
  name: string
  price: number
}

export const SubOption = ({ id, name, price }: SubOptionProps) => {
  const { currentMenuItemType, setCurrentMenuLevel, addTempCartSubOption } =
    useMenuContext()

  const onSelectMenuItem = () => {
    if (currentMenuItemType === 'master') {
      addTempCartSubOption({
        id: Date.now(),
        subOptionId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (currentMenuItemType === 'subOptions') {
      addTempCartSubOption({
        id: Date.now(),
        subOptionId: id,
        name,
        price,
        quantity: 1
      })
      setCurrentMenuLevel('main')
    }
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>
      <button
        className="rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={onSelectMenuItem}
      >
        Select
      </button>
    </article>
  )
}
