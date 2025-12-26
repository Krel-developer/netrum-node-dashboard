import cron from 'node-cron'
import fetchAndSave from './fetch-endpoint.js'

export function startCrontab() {
  cron.schedule('*/1 * * * *', () => {
    fetchAndSave()
  })
}
