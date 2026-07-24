import { _ as __nuxt_component_0 } from './nuxt-link-zZtc0U2Q.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const trainings = ref([]);
    const loading = ref(true);
    const error = ref("");
    const search = ref("");
    const filtered = computed(() => {
      if (!search.value.trim()) return trainings.value;
      const q = search.value.toLowerCase();
      return trainings.value.filter(
        (t) => t.trainingName.toLowerCase().includes(q) || t.sheetName.toLowerCase().includes(q)
      );
    });
    function formatDate(str) {
      return str || "-";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16 sm:pt-20 pb-12 sm:pb-16" }, _attrs))}><div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"><div class="max-w-2xl mb-8 sm:mb-10 animate-fade-in"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">Pelatihan</span><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-white mb-2 sm:mb-3"> Daftar Pelatihan </h1><p class="text-sm sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed"> Pilih pelatihan yang ingin Anda pelajari. Setiap pelatihan berisi modul dan video pembelajaran yang terstruktur. </p></div><div class="mb-6 sm:mb-8 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"><div class="relative max-w-md"><svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><input${ssrRenderAttr("value", search.value)} type="text" placeholder="Cari pelatihan..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm text-surface-900 dark:text-surface-100 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"></div></div>`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<div class="p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 animate-pulse"><div class="h-4 bg-surface-200 dark:bg-surface-700 rounded w-3/4 mb-3"></div><div class="h-3 bg-surface-100 dark:bg-surface-700/50 rounded w-full mb-2"></div><div class="h-3 bg-surface-100 dark:bg-surface-700/50 rounded w-1/2"></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-20"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><p class="text-surface-600 dark:text-surface-400 mb-2">${ssrInterpolate(error.value)}</p><button class="text-sm text-primary-600 dark:text-primary-400 hover:underline"> Coba lagi </button></div>`);
      } else if (filtered.value.length === 0) {
        _push(`<div class="text-center py-20"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center"><svg class="w-8 h-8 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><p class="text-surface-600 dark:text-surface-400">${ssrInterpolate(search.value ? "Tidak ada pelatihan yang cocok dengan pencarian." : "Belum ada pelatihan tersedia.")}</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 stagger-children"><!--[-->`);
        ssrRenderList(filtered.value, (training) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: training.sheetName,
            to: `/pelatihan/${training.sheetName}`,
            class: "group relative p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="absolute top-0 left-6 right-6 h-0.5 rounded-b bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"${_scopeId}></div><div class="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/40 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300"${_scopeId}><svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg></div><h3 class="text-base font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2"${_scopeId}>${ssrInterpolate(training.trainingName)}</h3><div class="flex items-center gap-1.5 text-xs text-surface-500 dark:text-surface-500"${_scopeId}><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg><span${_scopeId}>Diperbarui: ${ssrInterpolate(formatDate(training.scrapeTime))}</span></div><div class="absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"${_scopeId}><svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"${_scopeId}></path></svg></div>`);
              } else {
                return [
                  createVNode("div", { class: "absolute top-0 left-6 right-6 h-0.5 rounded-b bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" }),
                  createVNode("div", { class: "w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/40 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors",
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
                  createVNode("h3", { class: "text-base font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2" }, toDisplayString(training.trainingName), 1),
                  createVNode("div", { class: "flex items-center gap-1.5 text-xs text-surface-500 dark:text-surface-500" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-3.5 h-3.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])),
                    createVNode("span", null, "Diperbarui: " + toDisplayString(formatDate(training.scrapeTime)), 1)
                  ]),
                  createVNode("div", { class: "absolute bottom-6 right-6 w-8 h-8 rounded-lg bg-surface-100 dark:bg-surface-700/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" }, [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 text-primary-600 dark:text-primary-400",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M13 7l5 5m0 0l-5 5m5-5H6"
                      })
                    ]))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pelatihan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CpwZbZA7.mjs.map
