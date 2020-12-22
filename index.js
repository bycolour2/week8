import express from 'express'
import puppeteer from 'puppeteer'

import createApp from './app.js'

const app = createApp(express, puppeteer)

app.listen(process.env.PORT || 3000)
