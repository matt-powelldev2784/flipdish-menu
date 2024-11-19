import { useMenuContext } from 'menuContext/MenuContext'
import { useEffect } from 'react'

export const useAllowZeroAsMinSelection = (minSelectAmount: number) => {
  const { setAllowZeroMinSelection, setOptionsCanBeSelected } = useMenuContext()

  useEffect(() => {
    if (minSelectAmount === 0) {
      setAllowZeroMinSelection(true)
      setOptionsCanBeSelected(true)
    }
  }, [minSelectAmount, setAllowZeroMinSelection, setOptionsCanBeSelected])
}
