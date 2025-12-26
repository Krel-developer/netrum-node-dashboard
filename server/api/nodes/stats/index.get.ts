import fs from 'fs'

export default defineEventHandler(async (event) => {
  // const body = await readBody(event)

  // console.log(event)

  const data = await useStorage('assets:server').getItem('data:test.json')

  if (data) {
    console.log(data)

    return data
  } else {
    console.log('void', data)

    // const jsonObj = await $fetch('https://jsonplaceholder.org/posts/1')
    const BASE = 'https://node.netrumlabs.dev'
    const requirements = '/metrics/requirements'
    const activeNode = '/metrics/requirements'
    const jsonObj = await $fetch(`${BASE}${requirements}`, { timeout: 300000 })

    const fileContent = JSON.stringify(jsonObj)

    const filename = 'server/assets/data/test.json'

    // Asynchronous way with a callback
    fs.writeFile(filename, fileContent, (err) => {
      if (err) {
        console.error('Error saving file:', err)
        return
      }
      console.log('File saved successfully!')
    })

    return jsonObj
  }
})
