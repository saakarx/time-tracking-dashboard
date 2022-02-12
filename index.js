const timeBtns = document.querySelectorAll('.time-btn')
let activeBtn = document.getElementById('active')
const whVal = {
  'article-title': { w: 11, h: 6 },
  'article-time': { w: 16, h: 9 },
  'article-prevtime': { w: 32, h: 6 },
}

class App {
  timeFrame = 'weekly'
  data = []
  isLoading = true

  constructor() {
    this.init()
    this.fetchData()

    // event listeners
    timeBtns.forEach(btn =>
      btn.addEventListener('click', this.setActiveBtn.bind(this))
    )
  }

  init() {
    timeBtns.forEach(btn => btn.classList.add('text-slate-400'))
    activeBtn.classList.replace('text-slate-400', 'text-white')
  }

  setActiveBtn(e) {
    if (e.target.id === 'active') return

    // removing class from active btn
    this.changeBtnClass(activeBtn)

    // adding class to clicked btn
    this.changeBtnClass(e.target, true)

    this.timeFrame = e.target.dataset.timeframe
    console.log(this.timeFrame)

    this.updateData()
  }

  changeBtnClass(selector, active = false) {
    const slate = 'text-slate-400',
      white = 'text-white'

    if (active) {
      selector.id = 'active'
      selector.classList.replace(slate, white)
      activeBtn = selector
    } else {
      selector.id = ''
      selector.classList.replace(white, slate)
    }
  }

  changeTimeData(selectorName, content) {
    const selectorId = selectorName.replace(' ', '-')
    const selector = document.querySelector(`#${selectorId}`)
    const title = selector.querySelector('p')
    const button = selector.querySelector('button')
    const timeEl = selector.querySelector('h2')
    const lastTimeEl = timeEl.nextElementSibling

    if (this.isLoading) {
      title.innerHTML = `<span class="w-${whVal['article-title'].w} h-${whVal['article-title'].h} bg-blue-desaturated rounded animate-pulse"></span>`
      button.classList.add('hidden')
      timeEl.innerHTML = `<span class="w-${whVal['article-time'].w} h-${whVal['article-time'].h} bg-blue-desaturated rounded animate-pulse"></span>`
      lastTimeEl.innerHTML = `<span class="w-${whVal['article-prevtime'].w} h-${whVal['article-prevtime'].h} bg-blue-desaturated rounded animate-pulse"></span>`
    } else {
      title.textContent = selectorName
      button.classList.remove('hidden')
      timeEl.textContent = `${content.current}hr${
        content.current > 1 ? 's' : ''
      }`
      lastTimeEl.innerHTML = `Previous - ${content.previous}hrs`
    }
  }

  updateData() {
    this.data.forEach(item =>
      this.changeTimeData(item.title, item.timeframes[this.timeFrame])
    )
  }

  async fetchData() {
    try {
      const res = await fetch('./data.json')
      const data = await res.json()
      this.data = data
      this.isLoading = false
      this.updateData()
    } catch (err) {
      console.error(err)
    }
  }
}

const app = new App()
