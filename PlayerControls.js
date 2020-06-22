"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
// import icons
var ti_1 = require("react-icons/ti");
// import './styles/styles.css';
var PlayerControls = /** @class */ (function (_super) {
    __extends(PlayerControls, _super);
    function PlayerControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerControls.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "player-controls" },
            this.props.currentEpisode ?
                react_1.default.createElement("div", { className: "currently-playing-title" }, this.props.currentEpisode.title) :
                react_1.default.createElement("div", { className: "currently-playing-title" }, "Waiting..."),
            react_1.default.createElement("div", { className: "seek-bar" },
                this.props.formatTime(this.props.currentTime) || "0:00",
                react_1.default.createElement("input", { type: "range", className: "seek-bar", value: (this.props.currentTime / this.props.currentEpisodeDuration) || 0, max: "1", min: "0", step: "0.01", onChange: this.props.handleTimeChange }),
                this.props.formatTime(this.props.currentEpisodeDuration - this.props.currentTime) || "-:--"),
            react_1.default.createElement("div", { className: "buttons" },
                react_1.default.createElement(ti_1.TiMediaRewind, { className: "skip-back", onClick: this.props.handleSkipBackwards15Seconds }),
                react_1.default.createElement("button", { className: "play-pause", onClick: function () { return _this.props.handleEpisodeClick(_this.props.currentEpisode); } }, this.props.isPlaying ? react_1.default.createElement("div", null,
                    react_1.default.createElement(ti_1.TiMediaPause, { className: "pause-button" })) : react_1.default.createElement("div", null,
                    react_1.default.createElement(ti_1.TiMediaPlay, { className: "play-button" }))),
                react_1.default.createElement(ti_1.TiMediaFastForward, { className: "skip-forward", onClick: this.props.handleSkipForward15Seconds })),
            react_1.default.createElement("div", { className: "volume-bar" },
                react_1.default.createElement("i", { className: "fas fa-volume-down" }),
                react_1.default.createElement("input", { type: "range", className: "volume-bar", value: this.props.volume, max: "1", min: "0", step: "0.01", onChange: this.props.handleVolumeChange }),
                react_1.default.createElement("i", { className: "fas fa-volume-up" }))));
    };
    return PlayerControls;
}(react_1.Component));
exports.default = PlayerControls;
