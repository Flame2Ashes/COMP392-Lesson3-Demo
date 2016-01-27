var config;
(function (config) {
    var Screen = (function () {
        function Screen() {
        }
        Screen.HEIGHT = 480;
        Screen.WIDTH = 640;
        Screen.RATIO = 1.333333;
        return Screen;
    })();
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map