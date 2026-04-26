import { EffectorNext } from '@effector/next'
import { allSettled, fork, serialize } from 'effector'

import App from './app'
import { counterModel } from './counter-model'

export default async function Page() {
  const scope = fork()

  await allSettled(counterModel.create, {
    scope,
    params: [
      {
        id: '1',
        data: {
          count: 0,
        },
      },
      {
        id: '2',
        data: {
          count: 0,
        },
      },
    ],
  })

  return (
    <EffectorNext values={serialize(scope)}>
      <App />
    </EffectorNext>
  )
}
