import { _ as __nuxt_component_0 } from './nuxt-link-zZtc0U2Q.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/hero-illustration.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        icon: "play",
        title: "Video Pembelajaran",
        desc: "Akses video materi pelatihan langsung dari YouTube, terorganisir per modul dan section."
      },
      {
        icon: "layers",
        title: "Terstruktur & Bertahap",
        desc: "Materi disusun secara sistematis dalam section dan modul agar mudah diikuti."
      },
      {
        icon: "chart",
        title: "Pantau Progress",
        desc: "Lihat progress penyelesaian setiap pelatihan secara real-time."
      },
      {
        icon: "globe",
        title: "Akses Kapan Saja",
        desc: "Belajar di mana saja dan kapan saja melalui browser, tanpa install aplikasi."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative min-h-[90vh] sm:min-h-[92vh] flex items-center overflow-hidden"><div class="absolute inset-0 overflow-hidden"><div class="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/10 blur-3xl animate-float"></div><div class="absolute -bottom-32 -left-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-accent-400/15 to-accent-500/5 blur-3xl animate-float" style="${ssrRenderStyle({ "animation-delay": "3s" })}"></div><div class="absolute top-1/3 left-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-br from-primary-300/10 to-accent-400/5 blur-3xl animate-float" style="${ssrRenderStyle({ "animation-delay": "1.5s" })}"></div><div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", "background-size": "40px 40px" })}"></div></div><div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full"><div class="flex items-center gap-12 lg:gap-16"><div class="flex-1 max-w-2xl"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 mb-5 sm:mb-6 animate-fade-in"><span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span><span class="text-xs font-medium text-primary-700 dark:text-primary-300">Platform Pelatihan Online</span></div><h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up"><span class="text-surface-900 dark:text-white">Belajar Lebih </span><span class="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 dark:from-primary-400 dark:via-primary-300 dark:to-primary-500 bg-clip-text text-transparent"> Pinter </span><br><span class="text-surface-900 dark:text-white">Bersama </span><span class="bg-gradient-to-r from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 bg-clip-text text-transparent"> Kemenag </span></h1><p class="text-base sm:text-lg lg:text-xl text-surface-600 dark:text-surface-400 leading-relaxed mb-6 sm:mb-8 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.15s" })}"> Platform akses materi pelatihan online Kementerian Agama. Pelajari kurikulum, modul, dan video pembelajaran secara terstruktur, mudah, dan gratis. </p><div class="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.25s" })}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pelatihan",
        class: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Lihat Pelatihan</span><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, "Lihat Pelatihan"),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
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
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#tentang" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-surface-700 dark:text-surface-300 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"> Pelajari Lebih Lanjut </a></div><div class="flex gap-6 sm:gap-8 mt-10 sm:mt-12 animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.35s" })}"><!--[-->`);
      ssrRenderList([
        { value: "Gratis", label: "Tanpa Biaya" },
        { value: "24/7", label: "Setiap Saat" },
        { value: "Mobile", label: "Responsive" }
      ], (stat) => {
        _push(`<div class="flex flex-col"><span class="text-xl sm:text-2xl font-bold text-surface-900 dark:text-white">${ssrInterpolate(stat.value)}</span><span class="text-[11px] sm:text-xs text-surface-500 mt-0.5">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:block flex-shrink-0 w-[400px] xl:w-[480px] animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}"><div class="relative"><div class="absolute -inset-4 bg-gradient-to-br from-primary-200/30 to-accent-200/20 dark:from-primary-800/20 dark:to-accent-800/10 rounded-3xl blur-2xl"></div><img${ssrRenderAttr("src", _imports_0)} alt="Ilustrasi pelatihan online" class="relative w-full h-auto rounded-2xl"></div></div></div></div></section><section id="tentang" class="py-16 sm:py-20 lg:py-28 bg-white dark:bg-surface-900/50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-2xl mx-auto text-center mb-10 sm:mb-16"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-3">Tentang Platform</span><h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-white mb-4"> Mengapa Pinter Kemenag? </h2><p class="text-sm sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed"> Pinter Kemenag hadir untuk mempermudah akses pelatihan online bagi seluruh pegawai dan guru di lingkungan Kementerian Agama. Semua materi dapat diakses secara gratis dan terstruktur. </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children"><!--[-->`);
      ssrRenderList(features, (feat) => {
        _push(`<div class="group relative p-5 sm:p-6 rounded-2xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/5"><div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">`);
        if (feat.icon === "play") {
          _push(`<svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (feat.icon === "layers") {
          _push(`<svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (feat.icon === "chart") {
          _push(`<svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (feat.icon === "globe") {
          _push(`<svg class="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h3 class="text-sm sm:text-base font-semibold text-surface-900 dark:text-white mb-1.5 sm:mb-2">${ssrInterpolate(feat.title)}</h3><p class="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">${ssrInterpolate(feat.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 sm:py-20 lg:py-28"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-2xl mx-auto text-center mb-10 sm:mb-16"><span class="inline-block text-xs font-semibold tracking-widest uppercase text-accent-600 dark:text-accent-400 mb-3">Cara Kerja</span><h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-white mb-4"> Mulai Belajar dalam 3 Langkah </h2><p class="text-sm sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed"> Proses sederhana untuk mengakses materi pelatihan dari platform Pintar Kemenag. </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8"><!--[-->`);
      ssrRenderList([
        { num: "01", title: "Pilih Pelatihan", desc: "Telusuri daftar pelatihan yang tersedia dan pilih yang ingin Anda pelajari." },
        { num: "02", title: "Jelajahi Materi", desc: "Buka detail pelatihan untuk melihat seluruh section, modul, dan video yang tersedia." },
        { num: "03", title: "Tonton & Belajar", desc: "Putar video pembelajaran langsung di browser dan pantau progress Anda." }
      ], (step, i) => {
        _push(`<div class="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700/50 group hover:border-accent-300 dark:hover:border-accent-700 transition-all duration-300 hover:-translate-y-1"><span class="text-4xl sm:text-5xl font-black text-surface-100 dark:text-surface-800 group-hover:text-accent-100 dark:group-hover:text-accent-900/30 transition-colors absolute top-4 right-6">${ssrInterpolate(step.num)}</span><div class="relative"><div class="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-950/50 flex items-center justify-center mb-4"><span class="text-sm font-bold text-accent-600 dark:text-accent-400">${ssrInterpolate(step.num)}</span></div><h3 class="text-base sm:text-lg font-semibold text-surface-900 dark:text-white mb-2">${ssrInterpolate(step.title)}</h3><p class="text-xs sm:text-sm text-surface-600 dark:text-surface-400 leading-relaxed">${ssrInterpolate(step.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 sm:py-20 lg:py-28"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 sm:p-10 lg:p-16 text-center"><div class="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div><div class="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-accent-400/10 translate-x-1/3 translate-y-1/3"></div><div class="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-accent-300/30"></div><div class="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/15"></div><div class="relative"><h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4"> Siap Memulai Pelatihan? </h2><p class="text-primary-100/80 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed"> Jelajahi berbagai materi pelatihan yang telah tersedia dan tingkatkan kompetensi Anda. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pelatihan",
        class: "inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-primary-700 font-semibold text-sm hover:bg-accent-50 shadow-lg shadow-primary-900/30 transition-all duration-300 hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Jelajahi Pelatihan</span><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", null, "Jelajahi Pelatihan"),
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
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
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CNvdLyrR.mjs.map
