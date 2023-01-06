window.ladi_viewport = function () {
    var screen_width = window.ladi_screen_width || window.screen.width;
    var width = window.outerWidth > 0 ? window.outerWidth : screen_width;
    var widthDevice = width;
    var is_desktop = width >= 768;
    var content = "";
    if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
        window.ladi_is_desktop = is_desktop;
    }
    if (!is_desktop) {
        widthDevice = 420;
    } else {
        widthDevice = 1200;
    }
    content = "width=" + widthDevice + ", user-scalable=no";
    var scale = 1;
    if (!is_desktop && widthDevice != screen_width && screen_width > 0) {
        scale = screen_width / widthDevice;
    }
    if (scale != 1) {
        content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;
    }
    var docViewport = document.getElementById("viewport");
    if (!docViewport) {
        docViewport = document.createElement("meta");
        docViewport.setAttribute("id", "viewport");
        docViewport.setAttribute("name", "viewport");
        document.head.appendChild(docViewport);
    }
    docViewport.setAttribute("content", content);
};
window.ladi_viewport();
window.ladi_fbq_data = [];
window.ladi_fbq = function (track_name, conversion_name, data, event_data) {
    window.ladi_fbq_data.push([track_name, conversion_name, data, event_data]);
};
