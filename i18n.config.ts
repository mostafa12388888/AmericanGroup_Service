import { resolve } from 'path'
import { readdirSync, existsSync } from 'fs'

function loadLocaleMessages(lang: string) {
  const messages: Record<string, any> = {}
  const dirPath = resolve(`./i18n/locales/${lang}`) // مجلد اللغة

  if (!existsSync(dirPath)) return messages

  const files = readdirSync(dirPath)
  for (const file of files) {
    if (file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
      const fileMessages = require(resolve(dirPath, file))?.default || require(resolve(dirPath, file))
      Object.assign(messages, fileMessages) // دمج محتوى الملف
    }
  }
  return messages
}
