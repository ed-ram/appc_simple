// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function changeDay(evt) {
    console.log(`event source : ${JSON.stringify(evt.source)}`)
    $.scrollableView.currentPage = evt.source.index
};

function pageChange(evt) {
  console.log(`event into shedule.js pageChange function: ${JSON.stringify(evt)}`)
  $.dayView.index = evt.source.currentPage;
};
