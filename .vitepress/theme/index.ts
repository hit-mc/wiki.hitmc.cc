import 'vitepress-theme-teek/index.css'
import './wallpaper.css'
import Teek from 'vitepress-theme-teek'
import TeekLayoutProvider from './teek-layout-provider.vue'

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
}
