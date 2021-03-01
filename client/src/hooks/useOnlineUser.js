import { useMemo } from 'react'

function useOnlineUser() {
  const isOnline = useMemo(() => navigator.onLine, [])

  return isOnline
}

export { useOnlineUser }
