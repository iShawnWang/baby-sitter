import { test, expect } from '@playwright/test';
import {autoGenerateTestHTML} from '../../template'

test('should capture promise reject', async ({page}) => {
  page.setDefaultTimeout(5000)
  const {pagePath} = await autoGenerateTestHTML(__filename)
  await page.goto(pagePath)
  const log = await page.waitForEvent('console')
  expect(log.text()).toContain('rejected for some reason')
})