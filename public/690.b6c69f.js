"use strict";(self.webpackChunksage=self.webpackChunksage||[]).push([[690],{690:function(e,t,h){h.r(t),h.d(t,{jobFilters:function(){return i}});const i=async()=>{var e;(e=jQuery).expr[":"].containsNoCase=function(t,h,i){var l=i[3];return!!l&&new RegExp(l,"i").test(e(t).text())},e.fn.searchFilter=function(t){var h=e.extend({targetSelector:"",charCount:1},t);return this.each((function(){e(this).keyup((function(){var t=e(this).val();e("#filterBadges").html("");var i=e(h.targetSelector);i.show(),e(".gh-result-row").removeClass("gh-hide"),e(".gh-job-card").removeClass("gh-hide"),t&&t.length>=h.charCount&&i.not(":containsNoCase("+t+")").addClass("gh-hide"),e(".gh-result-row").each((function(t){e(this).find(".gh-job-card:visible").length||e(this).addClass("gh-hide")}))}))}))},jQuery().ready((function(e){e("body").on("click",".remove-cat-filter",(function(){var t=e(this).data("gh-filter");e("#"+t).click(),e(".gh-job-card").removeClass("gh-hide"),e(".gh-result-row").each((function(t){e(this).find(".gh-job-card:not(.gh-hide)").length||e(this).addClass("gh-hide")}));var h=e(".gh-filter-pill").length;e(".gh-filter-pill.filter-office").length,console.log("All pills "+h),h||(e(".gh-result-row").removeClass("gh-hide"),e(".gh-job-card").removeClass("gh-hide"))})),e(".sf-input-checkbox").on("click",(function(){e("#filterBadges").html(""),e(".sf-input-checkbox").each((function(){var t=e(this).data("filter-type"),h=this.checked?e(this).val():"",i='<span data-gh-filter="'+(this.checked?e(this).attr("id"):"")+'" class="gh-filter-pill filter-'+t+' remove-cat-filter inline-flex items-center rounded drop-shadow bg-white py-0.5 pl-2.5 pr-1 text-sm font-medium mr-3">'+(this.checked?e(this).next("label").text():"")+'<button type="button" class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full hover:bg-blue-200 focus:bg-blue-200 focus:outline-none"><span class="sr-only">Remove '+h+'</span><svg class="h-2 w-2 text-action" stroke="currentColor" fill="none" viewBox="0 0 8 8"><path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" /></svg></button></span>';e("#gh-search").val(""),e(".gh-job-card").removeClass("gh-hide"),h&&(e("#filterBadges").append(i),this.checked,e(".gh-filter-pill").each((function(t){var h=e(this).data("gh-filter");e("."+h).removeClass("gh-hide")})),console.log(h));var l=e(this).parent("li");this.checked?l.addClass("sf-option-active"):l.removeClass("sf-option-active")})),e(".gh-result-row").addClass("gh-hide"),e(".gh-filter-pill.filter-department").length||e(".gh-result-row").removeClass("gh-hide"),e(".gh-filter-pill.filter-office").length&&e(".gh-job-card").addClass("gh-hide"),e(".gh-filter-pill.filter-office").each((function(t){var h=e(this).data("gh-filter");console.log(h),e("."+h).removeClass("gh-hide")})),e(".gh-filter-pill").each((function(t){var h=e(this).data("gh-filter");console.log(h),e("."+h).removeClass("gh-hide")})),e(".gh-result-row").each((function(){var t=e(this),h=t.find(".gh-job-card").length,i=t.find(".gh-job-card.gh-hide").length;console.log(" children "+h+" "+i),h===i&&t.addClass("gh-hide")}))})),e("#gh-search").searchFilter({targetSelector:".gh-job-card",charCount:3})}))}}}]);