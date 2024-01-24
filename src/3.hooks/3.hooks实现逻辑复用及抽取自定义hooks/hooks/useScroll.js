import {useState, useEffect} from 'react';


function useScroll() {
  const [scroll, setScroll] = useState({
    left: 0,
    top: 0
  })

  useEffect( () => {
    const onScroll = (e) => {
      setScroll({
        left: window.scrollX,
        top: window.scrollY
      })
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scroll
}

export default useScroll