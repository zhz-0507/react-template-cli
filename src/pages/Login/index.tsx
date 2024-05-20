import React from "react"
import './index.less'
import { Button } from "antd"
import { useAppSelector, useAppDispatch} from '../../store/hooks'
import { increment, decrement} from '../../store/features/counter/counterSlice'

const Counter = () => {
  const count = useAppSelector((state: any) => {

    console.log('state', state)
    return state.counter.value
  });
  const dispatch = useAppDispatch();
  return (
    <div>
        <h1>计数器</h1>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
    </div>
  )
}
const Login = () => {
  return (
    <div className="login">
      <Button>登录</Button>
      <Counter></Counter>
    </div>
  )
}

export default Login
