(function () {
    var run = function () {
        if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined ||
            typeof window.ladi == "undefined" || window.ladi == undefined) {
            setTimeout(run, 100);
            return;
        }
        window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
        window.LadiPageScript.runtime.ladipage_id = '637227e5873762004f8600bb';
        window.LadiPageScript.runtime.publish_platform = 'LADIPAGEDNS';
        window.LadiPageScript.runtime.is_mobile_only = false;
        window.LadiPageScript.runtime.version = '1668572877531';
        window.LadiPageScript.runtime.cdn_url = 'https://w.ladicdn.com/v2/source/';
        window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["i-healthy.asia"];
        window.LadiPageScript.runtime.DOMAIN_FREE = ["ldp.page"];
        window.LadiPageScript.runtime.bodyFontSize = 12;
        window.LadiPageScript.runtime.store_id = "5ca34d96d64a251500bcf254";
        window.LadiPageScript.runtime.time_zone = 7;
        window.LadiPageScript.runtime.currency = "VND";
        window.LadiPageScript.runtime.convert_replace_str = true;
        window.LadiPageScript.runtime.desktop_width = 1200;
        window.LadiPageScript.runtime.mobile_width = 420;
        window.LadiPageScript.runtime.tracking_button_click = true;
        window.LadiPageScript.run(true);
        window.LadiPageScript.runEventScroll();
    };
    run();
})();