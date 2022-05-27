import type { App } from 'vue'
import NpmBadge from './src/npm-badge.vue'

NpmBadge.name = 'VpNpmBadge'
NpmBadge.install = function (app: App) {
  app.component(NpmBadge.name, NpmBadge)
}

export const VpNpmBadge = NpmBadge
