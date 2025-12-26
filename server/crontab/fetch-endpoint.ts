// tasks/fetch-endpoint.js
import fetch from 'node-fetch' // Или используйте глобальный fetch, если в среде он есть

import fs from 'fs'

// const ENDPOINT = 'https://jsonplaceholder.org/posts/1'
// const ENDPOINT = 'https://node.netrumlabs.dev/metrics/requirements'
const ENDPOINT = 'https://node.netrumlabs.dev/lite/nodes/active'

async function fetchAndSave() {
  try {
    console.log('start fetch big data...')

    fetch(ENDPOINT, { timeout: 300000 })
      .then((response) => {
        console.log('fetch end')
        console.log('start parse')

        return response.text()
      })
      .then((data) => {
        console.log('end parce', data)

        const filename = 'server/assets/data/test.json'

        // const fileContent = JSON.stringify(data)

        // Asynchronous way with a callback
        fs.writeFile(filename, data, (err) => {
          if (err) {
            console.error('Error saving file:', err)
            return
          }
          console.log('File saved successfully!')
        })
      })

    // console.log('end fetch')

    // // console.log(response)
    // console.log('start parse')

    // const result = await response.text()

    // // const reader = response?.body?.getReader()
    // // const decoder = new TextDecoder('utf-8')
    // // let result = ''
    // // if (reader) {
    // //   while (true) {
    // //     const { done, value } = await reader.read()
    // //     console.log(`isDone: ${done}`)

    // //     if (done) break

    // //     // Декодируем кусок данных и добавляем к результату
    // //     result += decoder.decode(value, { stream: true })

    // //     // Здесь можно обновлять индикатор прогресса
    // //     console.log(
    // //       `Загружено байт: ${result.length}, result:${result}, isDone: ${done}`
    // //     )
    // //   }
    // // }

    // console.log('end parse')

    // console.log(result)

    // console.log(`Data saved at ${new Date().toISOString()}`)
  } catch (error) {
    console.error('Ошибка при запросе или сохранении:', error)
  }
}
export default fetchAndSave
