const requestMerch ="js/biz.json";
fetch(requestMerch)
.then(function (response) {
  return response.json();
})
.then(function (jsObject) {
  const biz = jsObject["businesses"];
  console.log(biz);
})