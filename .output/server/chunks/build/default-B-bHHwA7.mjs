import { _ as __nuxt_component_0 } from './nuxt-link-zZtc0U2Q.mjs';
import { defineComponent, mergeProps, watch, ref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useRoute$1, _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const theme = ref("system");
function useTheme() {
  watch(theme, (val) => {
  });
  function setTheme(t) {
    theme.value = t;
  }
  function cycleTheme() {
    const order = ["light", "dark", "system"];
    const idx = order.indexOf(theme.value);
    theme.value = order[(idx + 1) % order.length];
  }
  return { theme, setTheme, cycleTheme };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useTheme();
    const open = ref(false);
    const options = [
      { value: "light", label: "Terang", icon: "sun" },
      { value: "dark", label: "Gelap", icon: "moon" },
      { value: "system", label: "Sistem", icon: "monitor" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative theme-toggle-wrapper" }, _attrs))}><button class="p-2 rounded-lg text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-700 dark:hover:text-surface-200 transition-all duration-200"${ssrRenderAttr("title", `Tema: ${unref(theme2) === "light" ? "Terang" : unref(theme2) === "dark" ? "Gelap" : "Sistem"}`)} aria-label="Toggle theme">`);
      if (unref(theme2) === "light") {
        _push(`<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else if (unref(theme2) === "dark") {
        _push(`<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`);
      }
      _push(`</button>`);
      if (open.value) {
        _push(`<div class="absolute right-0 top-full mt-2 w-40 py-1.5 rounded-xl bg-white dark:bg-surface-800 shadow-xl shadow-surface-900/10 dark:shadow-surface-950/30 border border-surface-200 dark:border-surface-700 z-50"><!--[-->`);
        ssrRenderList(options, (opt) => {
          _push(`<button class="${ssrRenderClass([unref(theme2) === opt.value ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40" : "text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-700", "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors"])}">`);
          if (opt.icon === "sun") {
            _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (opt.icon === "moon") {
            _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          if (opt.icon === "monitor") {
            _push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<span class="font-medium">${ssrInterpolate(opt.label)}</span></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileOpen = ref(false);
    const scrolled = ref(false);
    const route = useRoute$1();
    watch(() => route.path, () => {
      mobileOpen.value = false;
    });
    const navLinks = [
      { to: "/", label: "Beranda", icon: "home" },
      { to: "/pelatihan", label: "Daftar Pelatihan", icon: "book" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ThemeToggle = _sfc_main$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-300", scrolled.value ? "bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl shadow-sm border-b border-surface-200/50 dark:border-surface-700/50" : "bg-transparent"]
      }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16 lg:h-18">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2.5 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow"${_scopeId}><svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg></div><div class="flex flex-col"${_scopeId}><span class="text-lg font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent"${_scopeId}> Pinter </span><span class="text-[10px] font-medium text-surface-500 dark:text-surface-400 -mt-1 tracking-widest uppercase"${_scopeId}> Kemenag </span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow" }, [
                (openBlock(), createBlock("svg", {
                  class: "w-5 h-5 text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  })
                ]))
              ]),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("span", { class: "text-lg font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent" }, " Pinter "),
                createVNode("span", { class: "text-[10px] font-medium text-surface-500 dark:text-surface-400 -mt-1 tracking-widest uppercase" }, " Kemenag ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex items-center gap-1"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: ["relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200", _ctx.$route.path === link.to || _ctx.$route.path.startsWith(link.to) && link.to !== "/" ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50" : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-800"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`<button class="md:hidden p-2 rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors" aria-label="Toggle menu">`);
      if (!mobileOpen.value) {
        _push(`<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div></div></div>`);
      if (mobileOpen.value) {
        _push(`<div class="md:hidden bg-white/95 dark:bg-surface-900/95 backdrop-blur-xl border-b border-surface-200 dark:border-surface-700"><div class="px-4 py-3 space-y-1"><!--[-->`);
        ssrRenderList(navLinks, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.to,
            to: link.to,
            class: ["block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200", _ctx.$route.path === link.to ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50" : "text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800"]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="flex flex-col md:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center"><svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><span class="text-sm font-semibold text-surface-700 dark:text-surface-300"> Pinter Kemenag </span></div><p class="text-xs text-surface-500 dark:text-surface-500"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Pinter Kemenag. Platform pelatihan online Kementerian Agama. </p><div class="flex items-center gap-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-xs text-surface-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Beranda `);
      } else {
        return [
          createTextVNode(" Beranda ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/pelatihan",
    class: "text-xs text-surface-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Pelatihan `);
      } else {
        return [
          createTextVNode(" Pelatihan ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = _sfc_main$2;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-surface-50 dark:bg-surface-950 text-surface-800 dark:text-surface-100 transition-colors" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B-bHHwA7.mjs.map
