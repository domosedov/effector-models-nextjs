'use client'

import { useModel } from '@effector-kit/react'
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useUnit } from 'effector-react'

import { counterModel } from './counter-model'
import { genId, todoModel } from './todo-model'

export default function App() {
  const instance = useModel(todoModel, {
    data: {
      title: 'My title',
    },
  })
  const { counters, createCounter } = useUnit({
    counters: counterModel.$instances,
    createCounter: counterModel.create,
  })

  const countersIds = Object.keys(counters)

  return (
    <Container>
      <Stack>
        <Title>{instance.title}</Title>
        <TextInput
          value={instance.title}
          onChange={(e) => instance.onSetTitle(e.currentTarget.value)}
        />
        <Group>
          <Title order={2}>Counters</Title>
          <Button type='button' onClick={() => createCounter({ id: genId(), data: { count: 0 } })}>
            Create Counter +
          </Button>
        </Group>
        <Grid mt='sm'>
          {countersIds.map((counterId) => (
            <Button
              key={counterId}
              type='button'
              onClick={() => {
                instance.onTrackCounter(counterId)
              }}
              color='cyan'
            >
              Track counter ID:{counterId}
            </Button>
          ))}
        </Grid>
      </Stack>

      <Divider my='md' />
      <Box>
        <Title order={2}>Tracked counters:</Title>
        <Grid mt='sm'>
          {instance.counterRef.map(({ id, count, onSetCount }) => (
            <Card key={id} withBorder>
              <Text>Counter ID: {id}</Text>

              <Button type='button' onClick={() => onSetCount(count + 1)}>
                {count} +
              </Button>
            </Card>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
