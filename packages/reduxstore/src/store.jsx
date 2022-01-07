import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    clear: (state) => {
      state.count = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, clear } = counterSlice.actions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})

export function useStore() {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  }
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>  
}