/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/lecture/lecture-create.js":
/*!************************************************!*\
  !*** ./resources/js/lecture/lecture-create.js ***!
  \************************************************/
/***/ (() => {

eval("function add_platform_field() {\n  var result = \"<div class='form-group row'>\";\n  result += add_platform_by_field('platform_name') + add_platform_by_field('price') + add_platform_by_field('url') + add_platform_by_field('watch_time') + add_platform_by_field('end_time') + platform_cancel();\n  result += '</div>';\n  return result;\n}\n\nfunction add_platform_by_field(field) {\n  var kor_field = '';\n  var html = '';\n  var id = null;\n  var placeholder = '';\n\n  switch (field) {\n    case 'platform_name':\n      kor_field = '플랫폼이름';\n      break;\n\n    case 'price':\n      kor_field = '가격';\n      break;\n\n    case 'url':\n      kor_field = 'url';\n      break;\n\n    case 'watch_time':\n      kor_field = '시청가능기간(숫자)';\n      placeholder = '0이면 평생 시청';\n      break;\n\n    case 'end_time':\n      kor_field = '강의 종료시간';\n      id = 'datetimepicker';\n      break;\n\n    default:\n      break;\n  }\n\n  html += '<div class=\"col-md-2\">' + kor_field + '<input type=\"text\" class=\"form-control\"' + (id ? 'id=\"' + id + '\"' : '') + 'name=\"' + field + '[]\"' + (placeholder ? 'placeholder=\"' + placeholder + '\"' : '') + '>' + '</div>';\n  return html;\n}\n\nfunction platform_cancel() {\n  return '<div class=\"col-md-2\">' + '<button type=\"button\" class=\"btn btn-outline-danger\" style=\"hegiht:100%;padding:17px;\" id=\"delete\">삭제</button>' + '</div>';\n}\n\nwindow.loadfile = function (event) {\n  var preview = document.getElementById('output_image');\n  preview.src = URL.createObjectURL(event.target.files[0]);\n\n  preview.onload = function () {\n    URL.revokeObjectURL(preview.src); // free memory\n  };\n\n  $.ajaxSetup({\n    headers: {\n      'X-CSRF-TOKEN': $('meta[name=\"csrf-token\"]').attr('content')\n    }\n  });\n  event.preventDefault();\n  var formData = new FormData();\n  formData.append('upload', event.target.files[0]);\n  $.ajax({\n    type: 'POST',\n    url: '/file/lectureImageUpload',\n    data: formData,\n    cache: false,\n    contentType: false,\n    processData: false,\n    success: function success(response) {\n      $('.file_id').val(response);\n    },\n    error: function error(response) {\n      alert('File Fail');\n    }\n  });\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  $(document).on('click', \"#add_platform\", function () {\n    $('.add_platform_place').append(add_platform_field());\n    $(\"input[name='end_time[]']\").datetimepicker({\n      dateFormat: 'Y-m-d H:i:s'\n    });\n  });\n  $(document).on('click', \"#delete\", function () {\n    $(this).parent().parent().remove();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbGVjdHVyZS9sZWN0dXJlLWNyZWF0ZS5qcz9kZGY5Il0sIm5hbWVzIjpbImFkZF9wbGF0Zm9ybV9maWVsZCIsInJlc3VsdCIsImFkZF9wbGF0Zm9ybV9ieV9maWVsZCIsInBsYXRmb3JtX2NhbmNlbCIsImZpZWxkIiwia29yX2ZpZWxkIiwiaHRtbCIsImlkIiwicGxhY2Vob2xkZXIiLCJ3aW5kb3ciLCJsb2FkZmlsZSIsImV2ZW50IiwicHJldmlldyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZCIsInJldm9rZU9iamVjdFVSTCIsIiQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInZhbCIsImVycm9yIiwiYWxlcnQiLCJhZGRFdmVudExpc3RlbmVyIiwib24iLCJkYXRldGltZXBpY2tlciIsImRhdGVGb3JtYXQiLCJwYXJlbnQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGtCQUFULEdBQTZCO0FBQ3pCLE1BQUlDLE1BQU0sR0FBRyw4QkFBYjtBQUNBQSxFQUFBQSxNQUFNLElBQ05DLHFCQUFxQixDQUFDLGVBQUQsQ0FBckIsR0FDQUEscUJBQXFCLENBQUMsT0FBRCxDQURyQixHQUVBQSxxQkFBcUIsQ0FBQyxLQUFELENBRnJCLEdBR0FBLHFCQUFxQixDQUFDLFlBQUQsQ0FIckIsR0FJQUEscUJBQXFCLENBQUMsVUFBRCxDQUpyQixHQUtBQyxlQUFlLEVBTmY7QUFRQUYsRUFBQUEsTUFBTSxJQUFHLFFBQVQ7QUFDQSxTQUFPQSxNQUFQO0FBQ0g7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QTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQ3BEcEIsRUFBQUEsQ0FBQyxDQUFDVCxRQUFELENBQUQsQ0FBWThCLEVBQVosQ0FBZSxPQUFmLEVBQXVCLGVBQXZCLEVBQXVDLFlBQVU7QUFDN0NyQixJQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk8sTUFBekIsQ0FBZ0M3QixrQkFBa0IsRUFBbEQ7QUFDQXNCLElBQUFBLENBQUMsQ0FBRSwwQkFBRixDQUFELENBQWdDc0IsY0FBaEMsQ0FBK0M7QUFBRUMsTUFBQUEsVUFBVSxFQUFDO0FBQWIsS0FBL0M7QUFDSCxHQUhEO0FBSUF2QixFQUFBQSxDQUFDLENBQUNULFFBQUQsQ0FBRCxDQUFZOEIsRUFBWixDQUFlLE9BQWYsRUFBdUIsU0FBdkIsRUFBaUMsWUFBVTtBQUN2Q3JCLElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdCLE1BQVIsR0FBaUJBLE1BQWpCLEdBQTBCQyxNQUExQjtBQUNILEdBRkQ7QUFHSCxDQVJEIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkX3BsYXRmb3JtX2ZpZWxkKCl7XHJcbiAgICB2YXIgcmVzdWx0ID0gXCI8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIHJvdyc+XCI7XHJcbiAgICByZXN1bHQgKz1cclxuICAgIGFkZF9wbGF0Zm9ybV9ieV9maWVsZCgncGxhdGZvcm1fbmFtZScpICsgXHJcbiAgICBhZGRfcGxhdGZvcm1fYnlfZmllbGQoJ3ByaWNlJykgKyBcclxuICAgIGFkZF9wbGF0Zm9ybV9ieV9maWVsZCgndXJsJykgKyBcclxuICAgIGFkZF9wbGF0Zm9ybV9ieV9maWVsZCgnd2F0Y2hfdGltZScpICtcclxuICAgIGFkZF9wbGF0Zm9ybV9ieV9maWVsZCgnZW5kX3RpbWUnKSArIFxyXG4gICAgcGxhdGZvcm1fY2FuY2VsKCk7XHJcblxyXG4gICAgcmVzdWx0ICs9JzwvZGl2Pic7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRfcGxhdGZvcm1fYnlfZmllbGQoZmllbGQpe1xyXG4gICAgdmFyIGtvcl9maWVsZD0gJyc7XHJcbiAgICB2YXIgaHRtbCA9ICcnO1xyXG4gICAgdmFyIGlkID0gbnVsbDtcclxuICAgIHZhciBwbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgc3dpdGNoKGZpZWxkKXtcclxuICAgICAgICBjYXNlICdwbGF0Zm9ybV9uYW1lJzpcclxuICAgICAgICAgICAga29yX2ZpZWxkID0gJ+2UjOueq+2PvOydtOumhCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3ByaWNlJzpcclxuICAgICAgICAgICAga29yX2ZpZWxkID0gJ+qwgOqyqSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgIGtvcl9maWVsZCA9ICd1cmwnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd3YXRjaF90aW1lJzpcclxuICAgICAgICAgICAga29yX2ZpZWxkID0gJ+yLnOyyreqwgOuKpeq4sOqwhCjsiKvsnpApJztcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAnMOydtOuptCDtj4nsg50g7Iuc7LKtJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW5kX3RpbWUnOlxyXG4gICAgICAgICAgICBrb3JfZmllbGQgPSAn6rCV7J2YIOyiheujjOyLnOqwhCc7XHJcbiAgICAgICAgICAgIGlkID0gJ2RhdGV0aW1lcGlja2VyJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBodG1sICs9ICAnPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+JytcclxuICAgICAgICAgICAgICAgIGtvcl9maWVsZCArXHJcbiAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIicrIFxyXG4gICAgICAgICAgICAgICAgKGlkID8gJ2lkPVwiJytpZCsnXCInIDogJycpICsgXHJcbiAgICAgICAgICAgICAgICAnbmFtZT1cIicrIGZpZWxkICsnW11cIicrIFxyXG4gICAgICAgICAgICAgICAgKHBsYWNlaG9sZGVyID8gJ3BsYWNlaG9sZGVyPVwiJytwbGFjZWhvbGRlcisnXCInIDogJycpICsgXHJcbiAgICAgICAgICAgICAgICAnPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXRmb3JtX2NhbmNlbCgpe1xyXG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj4nK1xyXG4gICAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiIHN0eWxlPVwiaGVnaWh0OjEwMCU7cGFkZGluZzoxN3B4O1wiIGlkPVwiZGVsZXRlXCI+7IKt7KCcPC9idXR0b24+JytcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbn1cclxuXHJcbndpbmRvdy5sb2FkZmlsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIHZhciBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dF9pbWFnZScpO1xyXG4gICAgcHJldmlldy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICBwcmV2aWV3Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwocHJldmlldy5zcmMpIC8vIGZyZWUgbWVtb3J5XHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4U2V0dXAoe1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZCcsZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6J1BPU1QnLFxyXG4gICAgICAgIHVybDogJy9maWxlL2xlY3R1cmVJbWFnZVVwbG9hZCcsXHJcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgY2FjaGU6ZmFsc2UsXHJcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCcuZmlsZV9pZCcpLnZhbChyZXNwb25zZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICBhbGVydCgnRmlsZSBGYWlsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJyxcIiNhZGRfcGxhdGZvcm1cIixmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5hZGRfcGxhdGZvcm1fcGxhY2UnKS5hcHBlbmQoYWRkX3BsYXRmb3JtX2ZpZWxkKCkpO1xyXG4gICAgICAgICQoIFwiaW5wdXRbbmFtZT0nZW5kX3RpbWVbXSddXCIgKS5kYXRldGltZXBpY2tlcih7IGRhdGVGb3JtYXQ6J1ktbS1kIEg6aTpzJyB9KTsgIFxyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLFwiI2RlbGV0ZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcbn0pXHJcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbGVjdHVyZS9sZWN0dXJlLWNyZWF0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/lecture/lecture-create.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/lecture/lecture-create.js"]();
/******/ 	
/******/ })()
;