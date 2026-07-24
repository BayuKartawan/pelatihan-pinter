import { defineComponent, computed, ref, watch, mergeProps, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, useSSRContext } from 'vue';
import { u as useRoute$1, a as useRouter, s as sanitizeTag } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from 'vue/server-renderer';
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

defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[sheetName]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    useRouter();
    computed(() => route.params.sheetName);
    const data = ref(null);
    const loading = ref(true);
    const error = ref("");
    ref(false);
    const allModules = computed(() => {
      if (!data.value) return [];
      const list = [];
      data.value.sections.forEach((sec, si) => {
        sec.modules.forEach((mod, mi) => {
          list.push({ ...mod, sectionIndex: si, moduleIndex: mi, sectionTitle: sec.title });
        });
      });
      return list;
    });
    const activeFlatIndex = ref(0);
    const activeModule = computed(() => allModules.value[activeFlatIndex.value] || null);
    const canPrev = computed(() => activeFlatIndex.value > 0);
    const canNext = computed(() => activeFlatIndex.value < allModules.value.length - 1);
    const isPlaying = ref(false);
    watch(activeModule, () => {
      isPlaying.value = false;
    });
    const progressPercent = computed(() => {
      if (!data.value || !data.value.total_modules) return 0;
      return Math.round(data.value.total_completed / data.value.total_modules * 100);
    });
    const sidebarSections = computed(() => {
      if (!data.value) return [];
      let flatIdx = 0;
      return data.value.sections.map((sec, si) => {
        const items = sec.modules.map((mod, mi) => {
          const idx = flatIdx++;
          return { ...mod, flatIdx: idx, sectionIndex: si, moduleIndex: mi };
        });
        const done = items.filter((m) => m.completed).length;
        return { title: sec.title, items, done, total: items.length };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-16 sm:pt-20 pb-8 sm:pb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8"><button class="inline-flex items-center gap-1.5 text-xs sm:text-sm text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 mb-4 sm:mb-5 transition-colors animate-fade-in"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg><span>Kembali</span></button>`);
      if (loading.value) {
        _push(`<div class="animate-pulse space-y-4"><div class="h-8 bg-surface-200 dark:bg-surface-700 rounded w-2/3"></div><div class="h-64 bg-surface-200 dark:bg-surface-700 rounded-2xl"></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-20"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 dark:bg-red-950/50 flex items-center justify-center"><svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg></div><p class="text-surface-600 dark:text-surface-400 mb-2">${ssrInterpolate(error.value)}</p><button class="text-sm text-primary-600 dark:text-primary-400 hover:underline">Coba lagi</button></div>`);
      } else if (data.value) {
        _push(`<!--[--><div class="flex items-start justify-between gap-4 mb-5 animate-fade-in"><div class="min-w-0"><h1 class="text-lg sm:text-xl md:text-2xl font-bold text-surface-900 dark:text-white line-clamp-2 sm:truncate">${ssrInterpolate(data.value.training_title)}</h1><p class="text-xs text-surface-500 mt-1">${ssrInterpolate(data.value.total_modules)} modul \xB7 ${ssrInterpolate(data.value.total_videos)} video \xB7 ${ssrInterpolate(data.value.total_completed)} selesai</p></div><button class="lg:hidden shrink-0 p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors" aria-label="Buka daftar materi"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg></button></div><div class="mb-6 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": ".05s" })}"><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-medium text-surface-600 dark:text-surface-400">Progress</span><span class="${ssrRenderClass([progressPercent.value === 100 ? "text-emerald-600 dark:text-emerald-400" : "text-primary-600 dark:text-primary-400", "text-xs font-bold"])}">${ssrInterpolate(progressPercent.value)}%</span></div><div class="h-1.5 rounded-full bg-surface-200 dark:bg-surface-700 overflow-hidden"><div class="${ssrRenderClass([progressPercent.value === 100 ? "bg-gradient-to-r from-emerald-500 to-emerald-400" : "bg-gradient-to-r from-primary-500 to-primary-400", "h-full rounded-full transition-all duration-700"])}" style="${ssrRenderStyle({ width: progressPercent.value + "%" })}"></div></div></div><div class="flex flex-col lg:flex-row gap-4 sm:gap-6 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": ".1s" })}"><div class="flex-1 min-w-0">`);
        if (activeModule.value) {
          _push(`<!--[--><div class="rounded-xl sm:rounded-2xl overflow-hidden bg-surface-900 mb-4 sm:mb-5 shadow-xl">`);
          if (activeModule.value.mediaType === "video" && activeModule.value.videoId) {
            _push(`<div class="relative w-full" style="${ssrRenderStyle({ "padding-bottom": "56.25%" })}">`);
            if (isPlaying.value) {
              _push(`<iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${activeModule.value.videoId}?rel=0&autoplay=1`)} class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
            } else {
              _push(`<div class="absolute inset-0 w-full h-full cursor-pointer group"><img${ssrRenderAttr("src", `https://img.youtube.com/vi/${activeModule.value.videoId}/maxresdefault.jpg`)} class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" alt="Video thumbnail"><div class="absolute inset-0 flex items-center justify-center"><div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 transition-transform"><svg class="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div></div></div>`);
            }
            _push(`</div>`);
          } else if (activeModule.value.mediaType === "locked") {
            _push(`<div class="flex flex-col items-center justify-center py-12 sm:py-20 text-surface-500"><svg class="w-12 h-12 mb-3 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg><p class="text-sm font-medium">Materi Terkunci</p><p class="text-xs mt-1 text-surface-600">Selesaikan modul sebelumnya terlebih dahulu</p></div>`);
          } else {
            _push(`<div class="flex flex-col items-center justify-center py-12 sm:py-20 text-surface-500"><svg class="w-12 h-12 mb-3 text-surface-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><p class="text-sm font-medium">Dokumen / File</p></div>`);
          }
          _push(`</div><div class="p-4 sm:p-5 rounded-xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 mb-3 sm:mb-4"><div class="flex items-center gap-2 mb-2"><span class="${ssrRenderClass([{
            "bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400": activeModule.value.mediaType === "video",
            "bg-surface-200 dark:bg-surface-700 text-surface-500": activeModule.value.mediaType === "locked",
            "bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400": activeModule.value.mediaType === "file/document"
          }, "inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"])}">${ssrInterpolate(activeModule.value.mediaType === "video" ? "Video" : activeModule.value.mediaType === "locked" ? "Terkunci" : "Dokumen")}</span>`);
          if (activeModule.value.completed) {
            _push(`<span class="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 uppercase tracking-wide"><svg class="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> Selesai </span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-xs text-surface-500 mb-1">${ssrInterpolate(activeModule.value.sectionTitle)}</p><h2 class="text-base sm:text-lg font-bold text-surface-900 dark:text-white mb-2 sm:mb-3">${ssrInterpolate(activeModule.value.title)}</h2>`);
          if (activeModule.value.description && activeModule.value.description !== ".") {
            _push(`<p class="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed whitespace-pre-line">${ssrInterpolate(activeModule.value.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3"><button${ssrIncludeBooleanAttr(!canPrev.value) ? " disabled" : ""} class="${ssrRenderClass([canPrev.value ? "border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/30 cursor-pointer" : "border-surface-100 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 opacity-50 cursor-not-allowed", "flex-1 flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-200"])}"><svg class="w-4 h-4 shrink-0 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg><div class="min-w-0 text-left"><p class="text-[10px] text-surface-500 uppercase tracking-wide font-medium">Sebelumnya</p>`);
          if (canPrev.value) {
            _push(`<p class="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">${ssrInterpolate((_a = allModules.value[activeFlatIndex.value - 1]) == null ? void 0 : _a.title)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></button><button${ssrIncludeBooleanAttr(!canNext.value) ? " disabled" : ""} class="${ssrRenderClass([canNext.value ? "border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800/50 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-950/30 cursor-pointer" : "border-surface-100 dark:border-surface-800 bg-surface-50 dark:bg-surface-900 opacity-50 cursor-not-allowed", "flex-1 flex items-center justify-end gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-200"])}"><div class="min-w-0 text-right"><p class="text-[10px] text-surface-500 uppercase tracking-wide font-medium">Selanjutnya</p>`);
          if (canNext.value) {
            _push(`<p class="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">${ssrInterpolate((_b = allModules.value[activeFlatIndex.value + 1]) == null ? void 0 : _b.title)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><svg class="w-4 h-4 shrink-0 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg></button></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><aside class="hidden lg:block w-80 xl:w-96 shrink-0"><div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-surface-200 dark:border-surface-700/50 bg-white dark:bg-surface-800/30"><div class="p-4 border-b border-surface-100 dark:border-surface-700/50"><h3 class="text-sm font-semibold text-surface-900 dark:text-white">Daftar Materi</h3><p class="text-xs text-surface-500 mt-0.5">${ssrInterpolate(activeFlatIndex.value + 1)} / ${ssrInterpolate(allModules.value.length)}</p></div><div class="divide-y divide-surface-100 dark:divide-surface-700/30"><!--[-->`);
        ssrRenderList(sidebarSections.value, (sec, si) => {
          _push(`<div><div class="px-4 py-2.5 bg-surface-50 dark:bg-surface-800/50"><p class="text-[11px] font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wide truncate">${ssrInterpolate(sec.title)}</p><p class="text-[10px] text-surface-400">${ssrInterpolate(sec.done)}/${ssrInterpolate(sec.total)} selesai</p></div><!--[-->`);
          ssrRenderList(sec.items, (item) => {
            _push(`<button class="${ssrRenderClass([item.flatIdx === activeFlatIndex.value ? "bg-primary-50 dark:bg-primary-950/40 border-l-2 border-primary-500" : "hover:bg-surface-50 dark:hover:bg-surface-800/40 border-l-2 border-transparent", "w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-colors"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}><div class="shrink-0">`);
            if (item.completed) {
              _push(`<div class="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg></div>`);
            } else if (item.mediaType === "locked") {
              _push(`<div class="w-4 h-4 rounded-full bg-surface-200 dark:bg-surface-700 flex items-center justify-center"><svg class="w-2.5 h-2.5 text-surface-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div>`);
            } else {
              _push(`<div class="w-4 h-4 rounded-full border-2 border-surface-300 dark:border-surface-600"></div>`);
            }
            _push(`</div><div class="min-w-0 flex-1"><p class="${ssrRenderClass([item.flatIdx === activeFlatIndex.value ? "text-primary-700 dark:text-primary-300" : "text-surface-700 dark:text-surface-300", "text-xs font-medium truncate"])}">${ssrInterpolate(item.title)}</p><p class="${ssrRenderClass([{ "opacity-50": item.mediaType === "locked" }, "text-[10px] text-surface-400"])}">${ssrInterpolate(item.mediaType === "video" ? "Video" : item.mediaType === "locked" ? "Terkunci" : "Dokumen")}</p></div>`);
            if (item.mediaType === "video" && item.videoId) {
              _push(`<svg class="w-3 h-3 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</button>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div></div></aside>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pelatihan/[sheetName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_sheetName_-CfuC4Sr7.mjs.map
