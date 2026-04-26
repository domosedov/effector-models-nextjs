import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
    jsxSingleQuote: true,
    semi: false,
    sortImports: true,
  },
  lint: { options: { typeAware: true, typeCheck: true } },
})
