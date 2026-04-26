'use client'

import { contract, define, model, ref, type TString } from '@effector-kit/models'
import { createEvent, sample } from 'effector'

import { counterModel } from './counter-model'

export const todoModel = model({
  contract: contract({
    title: define.store(define.schema<TString>(), ''),
  })(),
  fn: ({ title }) => {
    const setTitle = createEvent<string>()

    const counterRef = ref(counterModel)

    const trackCounter = createEvent<string>()

    sample({
      clock: trackCounter,
      target: counterRef.add,
    })

    type IncrementProps = { qty: number; counterId: string }

    const increment = createEvent<IncrementProps>()

    sample({
      clock: increment,
      target: counterRef.lens
        .props<IncrementProps>()
        .where((entity, props) => entity.id === props.counterId)
        .count.target((props) => props.qty),
    })

    sample({
      clock: setTitle,
      target: title,
    })

    counterRef.$ids.watch((p) => console.log('Tracked counters IDs: ', p))

    return {
      title,
      setTitle,
      counterRef,
      trackCounter,
      increment,
      // trackedCountersIds: counterRef.$ids,
    }
  },
})

let nextId = 0

export const genId = () => {
  return (nextId++).toString()
}
