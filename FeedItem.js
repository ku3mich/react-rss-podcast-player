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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
// import icons
var ti_1 = require("react-icons/ti");
require("./styles/styles.css");
var FeedItem = /** @class */ (function (_super) {
    __extends(FeedItem, _super);
    function FeedItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hover: false
        };
        return _this;
    }
    FeedItem.prototype.onMouseEnter = function () {
        this.setState({ hover: true });
    };
    FeedItem.prototype.onMouseLeave = function () {
        this.setState({ hover: false });
    };
    FeedItem.prototype.render = function () {
        var _this = this;
        // Render play or pause button depending on player conditions
        var playOrPause = '';
        if (this.props.currentEpisode && this.props.isPlaying) {
            playOrPause = react_1.default.createElement(ti_1.TiMediaPause, { className: "item-pause" });
        }
        else if (this.state.hover && !this.props.currenEpisode) {
            playOrPause = react_1.default.createElement(ti_1.TiMediaPlay, { className: "item-play" });
        }
        return (react_1.default.createElement("div", { className: "feed-item", onMouseEnter: function () { return _this.onMouseEnter(); }, onMouseLeave: function () { return _this.onMouseLeave(); }, onClick: function () { return _this.props.handleEpisodeClick(_this.props.podcast); } },
            react_1.default.createElement("div", { className: "feed-item-play" }, playOrPause),
            react_1.default.createElement("div", { className: "feed-item-title" }, this.props.podcast.title),
            react_1.default.createElement("div", { className: "feed-item-info" },
                react_1.default.createElement("small", null,
                    react_1.default.createElement("p", null, moment_1.default(this.props.podcast.pubDate).format("MMM Do YY"))),
                react_1.default.createElement("small", null,
                    react_1.default.createElement("p", null, this.props.formatTime(this.props.podcast.itunes.duration))))));
    };
    return FeedItem;
}(react_1.Component));
exports.default = FeedItem;
