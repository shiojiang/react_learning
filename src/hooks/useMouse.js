import {useState, useEffect} from 'react';

// 自定义hooks 函数名以use开头
function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    // 组件第一次渲染绑定事件
    document.addEventListener('mousemove', move)
    // 组件销毁解绑事件
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return position
}

export default useMouse