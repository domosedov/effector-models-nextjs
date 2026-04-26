import { contract, define, model, type TNumber } from '@effector-kit/models'
import { createEvent, sample } from 'effector'

export const counterModel = model({
  contract: contract({
    count: define.store(define.schema<TNumber>(), 0),
  })(),
  fn: ({ count }) => {
    const setCount = createEvent<number>()

    sample({
      clock: setCount,
      target: count,
    })

    return {
      count,
      setCount,
    }
  },
})
