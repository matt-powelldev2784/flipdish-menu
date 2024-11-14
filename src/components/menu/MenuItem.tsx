import { MenuItemType } from './MenuItems'

interface MenuItemProps {
  id: number
  menuItemType: MenuItemType
  name: string
  price: number
  contextUpdateFunction?: (id: number) => void
  onClick?: () => void
}

export const MenuItem = ({
  id,
  name,
  price,
  onClick,
  contextUpdateFunction,
  menuItemType
}: MenuItemProps) => {
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
        onClick={() => {
          if (onClick) onClick()
          if (contextUpdateFunction) contextUpdateFunction(id)
        }}
      >
        Select
      </button>
    </article>
  )
}
