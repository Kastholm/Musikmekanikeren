<template>
  <button class="btn-21">
    <p class="relative z-50 font-bold"><slot></slot></p>
  </button>
</template>

<script>
export default {};
</script>

<style>
.btn-21,
.btn-21 *,
.btn-21 :after,
.btn-21 :before,
.btn-21:after,
.btn-21:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-21 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #273e3f;
  background-image: none;
  color: #fbfbfb;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  margin-top: 1em;
  -webkit-mask-image: -webkit-radial-gradient(#273e3f, #fff);
  padding: 0;
  text-transform: uppercase;
}
.btn-21:disabled {
  cursor: default;
}
.btn-21:-moz-focusring {
  outline: auto;
}
.btn-21 svg {
  display: block;
  vertical-align: middle;
}
.btn-21 [hidden] {
  display: none;
}
.btn-21 {
  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
}
.btn-21 span {
  mix-blend-mode: difference;
}
.btn-21:before {
  -webkit-animation: move-out 0.3s;
  animation: move-out 0.3s;
  background: #222222;
  color: #fbfbfb;
  content: "";
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: transform;
}
.btn-21:hover:before {
  -webkit-animation: move-in 0.3s forwards;
  animation: move-in 0.3s forwards;
}
@-webkit-keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes move-in {
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@-webkit-keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes move-out {
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(200%);
  }
}
</style>
