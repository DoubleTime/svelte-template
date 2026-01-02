---
description: DaisyUI component library reference for styling and UI components
---

# DaisyUI Reference

Use DaisyUI classes for all UI components. Colors: `*-primary/secondary/accent/neutral/success/warning/info/error`. Sizes: `*-xs/sm/md/lg/xl`.

## Layout

### navbar
```html
<div class="navbar bg-base-200">
  <div class="navbar-start">{left}</div>
  <div class="navbar-center">{center}</div>
  <div class="navbar-end">{right}</div>
</div>
```

### drawer
Parts: `drawer-toggle`, `drawer-content`, `drawer-side`, `drawer-overlay`. Modifier: `drawer-end`, `drawer-open`.
```html
<div class="drawer">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">{MAIN}</div>
  <div class="drawer-side">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu">{SIDEBAR}</ul>
  </div>
</div>
```

### menu
Direction: `menu-horizontal/vertical`. Size modifiers available.
```html
<ul class="menu"><li><a>Item</a></li></ul>
```

### dock
Bottom nav. Modifier: `dock-active`.
```html
<div class="dock"><button>🏠</button><button class="dock-active">📊</button></div>
```

### join
Groups items: `join-vertical/horizontal`.
```html
<div class="join"><button class="btn join-item">1</button><button class="btn join-item">2</button></div>
```

### divider
Direction: `divider-vertical/horizontal`. Has colors.
```html
<div class="divider">OR</div>
```

## Actions

### btn
Style: `btn-outline/soft/ghost/link/dash`. Shape: `btn-wide/block/circle/square`. Has colors/sizes.
```html
<button class="btn btn-primary">Click</button>
```

### modal
Parts: `modal-box`, `modal-action`, `modal-backdrop`. Placement: `modal-top/middle/bottom/start/end`.
```html
<button onclick="my_modal.showModal()">Open</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}
    <div class="modal-action"><form method="dialog"><button class="btn">Close</button></form></div>
  </div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```

### swap
Style: `swap-rotate/flip`. Parts: `swap-on/off`.
```html
<label class="swap"><input type="checkbox" /><div class="swap-on">ON</div><div class="swap-off">OFF</div></label>
```

## Data Display

### card
Parts: `card-title/body/actions`. Style: `card-border/dash`. Modifier: `card-side`, `image-full`.
```html
<div class="card"><figure><img src="..." /></figure><div class="card-body"><h2 class="card-title">Title</h2><p>Content</p></div></div>
```

### table
Modifier: `table-zebra/pin-rows/pin-cols`. Has sizes.
```html
<div class="overflow-x-auto"><table class="table"><thead><tr><th>H</th></tr></thead><tbody><tr><td>D</td></tr></tbody></table></div>
```

### carousel
Modifier: `carousel-start/center/end`. Direction: `carousel-horizontal/vertical`.
```html
<div class="carousel"><div class="carousel-item"><img src="..." /></div></div>
```

### collapse
Modifier: `collapse-arrow/plus/open/close`.
```html
<div tabindex="0" class="collapse collapse-arrow"><div class="collapse-title">Title</div><div class="collapse-content">Content</div></div>
```

### tabs
Style: `tabs-box/border/lift`. Modifier: `tab-active/disabled`.
```html
<div class="tabs tabs-box"><button class="tab">Tab 1</button><button class="tab tab-active">Tab 2</button></div>
```

### stats
Parts: `stat/stat-title/stat-value/stat-desc`. Direction: `stats-horizontal/vertical`.
```html
<div class="stats"><div class="stat"><div class="stat-title">Title</div><div class="stat-value">100</div></div></div>
```

### timeline
Parts: `timeline-start/middle/end`. Modifier: `timeline-compact`. Direction: `timeline-vertical/horizontal`.
```html
<ul class="timeline"><li><div class="timeline-start">Start</div><div class="timeline-middle">●</div><div class="timeline-end">End</div><hr/></li></ul>
```

### chat
Parts: `chat-image/header/footer/bubble`. Placement: `chat-start/end`. Bubble colors available.
```html
<div class="chat chat-start"><div class="chat-bubble">Message</div></div>
```

### steps
Part: `step`. Has colors. Direction: `steps-vertical/horizontal`.
```html
<ul class="steps"><li class="step step-primary">1</li><li class="step">2</li></ul>
```

## Form

### input
Style: `input-ghost`. Has colors/sizes.
```html
<input type="text" class="input input-primary" placeholder="..." />
```

### textarea
Style: `textarea-ghost`. Has colors/sizes.
```html
<textarea class="textarea" placeholder="..."></textarea>
```

### select
Style: `select-ghost`. Has colors/sizes.
```html
<select class="select"><option>Option</option></select>
```

### checkbox/radio/toggle/range
All have colors/sizes.
```html
<input type="checkbox" class="checkbox checkbox-primary" />
<input type="radio" name="g" class="radio" />
<input type="checkbox" class="toggle toggle-primary" />
<input type="range" min="0" max="100" class="range" />
```

### rating
Modifier: `rating-half/hidden`. Has sizes.
```html
<div class="rating"><input type="radio" name="r" class="mask mask-star-2" /></div>
```

## Feedback

### alert
Style: `alert-outline/dash/soft`. Colors: `alert-info/success/warning/error`.
```html
<div class="alert alert-success"><span>Message</span></div>
```

### toast
Placement: `toast-start/center/end`, `toast-top/middle/bottom`.
```html
<div class="toast toast-end"><div class="alert alert-info"><span>Msg</span></div></div>
```

### progress
Has colors. Requires `value` and `max`.
```html
<progress class="progress progress-primary" value="70" max="100"></progress>
```

### radial-progress
Use `--value` CSS var (0-100). Use `--size` and `--thickness` for customization.
```html
<div class="radial-progress" style="--value:70;">70%</div>
```

### loading
Style: `loading-spinner/dots/ring/ball/bars/infinity`. Has sizes.
```html
<span class="loading loading-spinner loading-md"></span>
```

### skeleton
Use `h-*` and `w-*` utilities.
```html
<div class="skeleton h-32 w-full"></div>
```

## Other

### avatar
Modifier: `online/offline/placeholder`.
```html
<div class="avatar"><div class="w-24 rounded-full"><img src="..." /></div></div>
```

### badge
Style: `badge-outline/soft/dash/ghost`. Has colors/sizes.
```html
<span class="badge badge-primary">Badge</span>
```

### tooltip
Placement: `tooltip-top/bottom/left/right`. Has colors.
```html
<div class="tooltip" data-tip="Text"><button class="btn">Hover</button></div>
```

### indicator
Parts: `indicator-item`. Placement: `indicator-start/center/end`, `indicator-top/middle/bottom`.
```html
<div class="indicator"><span class="indicator-item badge badge-primary">99</span><button class="btn">Item</button></div>
```

### kbd
Has sizes.
```html
<kbd class="kbd">K</kbd>
```

### theme-controller
Value = theme name (`light`, `dark`, `cupcake`, etc).
```html
<input type="checkbox" value="dark" class="theme-controller" />
```

## Themes
Configure in `tailwind.config.js`:
```js
daisyui: { themes: ["light", "dark", "cupcake", "synthwave", "cyberpunk", ...] }
```
Set: `<html data-theme="dark">`

Docs: https://daisyui.com/components/
