"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[509],{509:function(e,t,s){s.r(t),s.d(t,{searchFilters:function(){return n}});const n=async()=>{jQuery().ready((function(e){function t(){e("#filterBadges").html(""),e(".sf-input-checkbox, .sf-input-radio").each((function(){var t="";e(this).hasClass("sf-input-radio")&&(t="is-radio");var s=this.checked?e(this).val():"",n='<span data-cat-id="'+(this.checked?e(this).attr("id"):"")+'" class="remove-cat-filter '+t+' inline-flex items-center rounded drop-shadow bg-white py-0.5 pl-2.5 pr-1 text-sm font-medium mr-3">'+(this.checked?e(this).next("label").text():"")+'<button type="button" class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full hover:bg-blue-200 focus:bg-blue-200 focus:outline-none"><span class="sr-only">Remove '+s+'</span><svg class="h-2 w-2 text-action" stroke="currentColor" fill="none" viewBox="0 0 8 8"><path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" /></svg></button></span>';s&&e("#filterBadges").append(n)}))}e("body").on("click",".remove-cat-filter",(function(){var t=e(this).data("cat-id"),s=e(this).hasClass("is-radio");e("#"+t).click(),s&&(console.log("is radio"),e("#"+t).parents("ul").find(".sf-input-radio").eq(0).click())})),e(document).on("sf:ajaxfinish",".searchandfilter",(function(){t(),lazyLoadInstance.update()})),t()}))}}}]);