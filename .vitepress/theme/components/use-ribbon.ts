export function useRibbon({ immediate = false } = {}) {
  let canvas, ctx, raf = 0, running = false
  const ribbons = []
  const colors = ['#4f8ef7', '#8b5cf6', '#f45fb0']

  // 粒子活动区域：限制在视口底部附近（高度 95% ~ 100%）
  const zoneTop = () => (canvas ? canvas.height * 0.95 : 0)

  const init = () => {
    canvas = document.createElement('canvas')
    canvas.style.cssText = 'position:fixed;inset:0;z-index:1;pointer-events:none;'
    document.body.appendChild(canvas)
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    ctx = canvas.getContext('2d')
    ribbons.length = 0
    for (let i = 0; i < 6; i++) {
      const top = zoneTop()
      ribbons.push({
        x: Math.random() * canvas.width,
        y: top + Math.random() * (canvas.height - top),  // 出生在底部区域
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
        color: colors[i % colors.length],
        w: 4 + Math.random() * 6,
      })
    }
  }

  const draw = () => {
    if (!ctx || !canvas) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.globalCompositeOperation = 'lighter'
    const top = zoneTop()
    ribbons.forEach(r => {
      r.x += r.vx
      r.y += r.vy
      if (r.x < 0 || r.x > canvas.width) r.vx *= -1
      // 只在底部区间内上下反弹，越过上界就折回
      if (r.y > canvas.height) r.vy *= -1
      else if (r.y < top) r.vy *= -1
      ctx.globalAlpha = 0.55
      ctx.fillStyle = r.color
      ctx.beginPath()
      ctx.arc(r.x, r.y, r.w, 0, Math.PI * 2)
      ctx.fill()
    })
    raf = requestAnimationFrame(draw)
  }

  const start = () => {
    if (running) return
    running = true
    init()
    if (canvas) canvas.style.display = 'block'
    draw()
  }
  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    if (canvas) canvas.style.display = 'none'
  }

  if (immediate) start()

  return { start, stop }
}
