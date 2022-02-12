const printData = data => {
  data.forEach(d => console.log(d))
}

const initBtns = () =>
  timeBtns.forEach(btn => {
    btn.id === 'active'
      ? btn.classList.add('text-white')
      : btn.classList.add('text-slate-400')
  })

const fetchData = async () => {}

const setActiveBtn = e => {
  // if the clicked btn is active btn returning to not override changes
  if (e.target.id === 'active') return

  // removing active id from btns
  timeBtns.forEach(btn => {
    btn.id = ''
    btn.classList.remove('text-white')
    btn.classList.add('text-slate-400')
  })

  // making clicked btn active btn
  e.target.id = 'active'
  e.target.classList.remove('text-slate-400')
  e.target.classList.add('text-white')
}

timeBtns.forEach(btn => {
  btn.addEventListener('click', setActiveBtn)
})

fetchData()
initBtns()
