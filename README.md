```bash
pnpm i
```

```bash
pnpm dev
```

Open http://localhost:3000

## На клиенте значения не восстанавливаются

src/app/page.tsx
src/app/app.tsx

## При подписке на реф внутри модели некорректное поведение

### Воспроизведение

- Создать несколько счетчиков
- Подписаться на них

event-track('1') => store-tracked: ['1']
event-track('2') => store-tracked: ['2'] ❌ (должно быть ['1', '2'])
event-track('3') => store-tracked: ['2', '3'] ❌ (должно быть ['1', '2', '3'])
