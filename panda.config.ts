// panda.config.ts
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  preflight: true, // Habilita estilos de reset
  include: ["./src/**/*.{js,jsx,ts,tsx}"], // Caminho dos componentes
  exclude: [],
  outdir: "styled-system", // Diretório de saída
  jsxFramework: 'react', // Framework JSX
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#0070f3' }
        }
      },
      recipes: {
        button: {
          // Adicione suas receitas aqui
        }
      }
    }
  }
})