import Vue from "vue";
import $_message from '@/lib/message'
import ClipboardJS from "clipboard"

Vue.directive("copy", {
  bind(el) {
    var clipboard = new ClipboardJS(el);
    clipboard.on('success', function (e) {
      e.clearSelection();
    });
  },
  inserted(el) {
    el.addEventListener("click", function () {
      $_message({
        text: "成功复制到剪贴板",
        color: "success"
      })
    })
  },
  update() { },
  componentUpdated() { },
  unbind() { },
});
