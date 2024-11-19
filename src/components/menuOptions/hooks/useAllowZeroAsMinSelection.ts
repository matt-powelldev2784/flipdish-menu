import { useMenuContext } from 'menuContext/MenuContext'
import { useEffect } from 'react'

export const useAllowZeroAsMinSelection = (minSelectAmount: number) => {
  const { setAllowZeroMinSelection, setOptionsCanBeConfirmed } =
    useMenuContext()

  useEffect(() => {
    if (minSelectAmount === 0) {
      setAllowZeroMinSelection(true)
      setOptionsCanBeConfirmed(true)
    }
  }, [minSelectAmount, setAllowZeroMinSelection, setOptionsCanBeConfirmed])
}
