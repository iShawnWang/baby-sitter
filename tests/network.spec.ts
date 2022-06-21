import { test, expect } from '@playwright/test';
import path from 'node:path'

test('network', async ({page}) => {
  page.setDefaultTimeout(5000)
  const pagePath = `file:///${path.resolve(__dirname, '../test.html')}`;
  await page.goto(pagePath)
  page.on('console', (m) => {
    console.log(m)
  })
  page.on('request', (r) => {
    console.log(r)
  })
  page.on('requestfailed', (r) => {
    console.log(r)
  })
  const req = await page.waitForRequest('**')
  console.log(req)
  expect(req).not.toBeUndefined()
})