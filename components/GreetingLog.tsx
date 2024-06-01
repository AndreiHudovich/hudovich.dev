'use client'

import links from '@/data/links.json'

export default function GreetingLog() {
  console.log(`\nHey, Developer!\n\nYou can find the source code on GitHub:\n\n${links.source}\n\n`)
  return null
}
