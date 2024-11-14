interface MenuItemProps {
  id: number
  name: string
  price: number
  onClick: (id: number) => void
}

export const MenuItem = ({ id, name, price, onClick }: MenuItemProps) => {
  return (
    <article
      key={id}
      className=" flex w-full max-w-96 flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10"
    >
      <p>
        {name} - {price}
      </p>
      <button
        className="rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={() => {
          onClick(id)
        }}
      >
        Select
      </button>
    </article>
  )
}
