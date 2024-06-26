'use client'

import { Analytics } from '@vercel/analytics/react'

export default function VercelAnalytics() {
  return <Analytics beforeSend={(event) => (localStorage.getItem('va-disable') ? null : event)} />
}
