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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// import Components
var FeedItem_1 = __importDefault(require("./FeedItem"));
var PlayerControls_1 = __importDefault(require("./PlayerControls"));
require("./styles/styles.css");
// Instantiate RSS-Parser to convert RSS feeds into JSON.
var RSSParser = require("rss-parser");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            feedData: [],
            allEpisodes: [],
            currentEpisode: "",
            isPlaying: false,
            volume: 80,
            currentTime: 0,
            currentEpisodeDuration: 0,
            currentEpisodeDescription: "",
        };
        _this.audioElement = document.createElement("audio");
        _this.rssParser = new RSSParser();
        return _this;
    }
    Player.prototype.componentWillMount = function () {
        this.fetchDataFromRssFeed(this.props.url);
    };
    Player.prototype.play = function () {
        var _this = this;
        this.audioElement.play();
        this.setState({ isPlaying: true });
        this.interval = setInterval(function () { return _this.setState({ currentTime: _this.audioElement.currentTime }); }, 1000);
    };
    Player.prototype.pause = function () {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
        clearInterval(this.interval);
    };
    Player.prototype.setEpisode = function (episode) {
        this.audioElement.src = episode.enclosure.url;
        this.setState({ currentEpisode: episode });
    };
    Player.prototype.handleEpisodeClick = function (episode) {
        var isSameEpisode = this.state.currentEpisode === episode;
        if (this.state.isPlaying && isSameEpisode) {
            this.pause();
        }
        else {
            if (!isSameEpisode) {
                this.changeCurrentEpisode(episode);
                this.setEpisode(episode);
            }
            this.play();
        }
    };
    Player.prototype.handleTimeChange = function (e) {
        var newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    };
    Player.prototype.handleVolumeChange = function (e) {
        var newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({ volume: newVolume });
    };
    Player.prototype.changeCurrentEpisode = function (episode) {
        this.setState({
            currentEpisode: episode,
            currentEpisodeDuration: episode.enclosure.length,
            currentEpisodeDescription: episode.contentSnippet,
        });
    };
    Player.prototype.handleSkipForward15Seconds = function (e) {
        var newTime = this.audioElement.currentTime + 15;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    };
    Player.prototype.handleSkipBackwards15Seconds = function (e) {
        var newTime = this.audioElement.currentTime - 15;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
    };
    Player.prototype.fetchDataFromRssFeed = function (url) {
        var _this = this;
        this.setState({ isLoading: true });
        var proxyurl = "";
        "https://cors-anywhere.herokuapp.com/";
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var feed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rssParser.parseURL(proxyurl + url)];
                    case 1:
                        feed = _a.sent();
                        this.setState({
                            feedData: feed,
                            allEpisodes: feed.items,
                            currentEpisode: feed.items[0],
                            currentEpisodeDuration: feed.items[0].enclosure.length,
                            currentEpisodeDescription: feed.items[0].contentSnippet,
                        });
                        this.setState({ isLoading: false });
                        this.audioElement.src = this.state.currentEpisode.enclosure.url;
                        return [2 /*return*/];
                }
            });
        }); })().catch(alert);
    };
    Player.prototype.formatTime = function (time) {
        if (!time) {
            return;
        }
        // Cleanse time input depending on in seconds or full format
        if (time.length >= 7) {
            if (time[1] === "0") {
                return time.slice(3);
            }
            else if (time[0] === "0") {
                return time.slice(1);
            }
        }
        else {
            if (isNaN(time)) {
                return "-:--";
            }
            var hours = Math.floor(time / 3600);
            var minutes = Math.floor((time - hours * 3600) / 60);
            var seconds = Math.floor(time % 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (hours > 0) {
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                return hours + ":" + minutes + ":" + seconds;
            }
            else {
                return minutes + ":" + seconds;
            }
        }
    };
    Player.prototype.render = function () {
        var _this = this;
        var mainStyles = {
            maxWidth: this.props.maxWidth,
        };
        var playerStyles = {
            color: this.props.playerTextColor,
            backgroundColor: this.props.playerColor,
        };
        var feedStyles = {
            maxHeight: this.props.feedMaxHeight,
            backgroundColor: this.props.feedColor,
            color: this.props.feedTextColor,
        };
        var allEpisodes = this.state.allEpisodes.map(function (podcast) {
            return (react_1.default.createElement(FeedItem_1.default, { key: podcast.guid, podcast: podcast, handleEpisodeClick: function () { return _this.handleEpisodeClick(podcast); }, isPlaying: _this.state.isPlaying, currentEpisode: _this.state.currentEpisode === podcast, changeCurrentEpisode: function () { return _this.changeCurrentEpisode(podcast); }, formatTime: function (time) { return _this.formatTime(time); } }));
        });
        var emptyPlayer = "";
        if (!this.state.currentEpisode) {
            emptyPlayer = (react_1.default.createElement("div", { className: "player-top-section" },
                react_1.default.createElement("div", { className: "empty-player" },
                    react_1.default.createElement("div", { className: "podcast-title empty-player empty-player-message" }, "No media found. Enter an RSS feed to get started."))));
        }
        else {
            emptyPlayer = (react_1.default.createElement("div", { className: "player-top-section" },
                react_1.default.createElement("div", { className: "podcast-info" },
                    react_1.default.createElement("div", { className: "podcast-image" },
                        react_1.default.createElement("img", { alt: "Podcast Logo", src: this.state.feedData.image.url })),
                    react_1.default.createElement("div", { className: "podcast-title" },
                        this.state.feedData.title,
                        " "),
                    react_1.default.createElement("div", { className: "podcast-author" }, this.state.feedData.author))));
        }
        return (react_1.default.createElement("div", { className: "main", style: mainStyles },
            react_1.default.createElement("div", { className: "player-container", style: playerStyles },
                react_1.default.createElement("section", { className: "player" },
                    emptyPlayer,
                    react_1.default.createElement("div", { className: "player-controls-section", style: { backgroundColor: this.props.playerControlsColor } },
                        react_1.default.createElement(PlayerControls_1.default, { isPlaying: this.state.isPlaying, currentEpisode: this.state.currentEpisode, volume: this.audioElement.volume, handleEpisodeClick: function () { return _this.handleEpisodeClick(_this.state.currentEpisode); }, currentTime: this.audioElement.currentTime, currentEpisodeDuration: this.audioElement.duration, handleTimeChange: function (e) { return _this.handleTimeChange(e); }, handleVolumeChange: function (e) { return _this.handleVolumeChange(e); }, handleSkipForward15Seconds: function (e) { return _this.handleSkipForward15Seconds(e); }, handleSkipBackwards15Seconds: function (e) { return _this.handleSkipBackwards15Seconds(e); }, formatTime: function (time) { return _this.formatTime(time); } })),
                    react_1.default.createElement("div", { className: "player-bottom-section" },
                        react_1.default.createElement("div", { className: "current-episode" },
                            react_1.default.createElement("div", { className: "current-episode-description" }, this.state.currentEpisodeDescription))))),
            react_1.default.createElement("div", { className: "feed-container" },
                react_1.default.createElement("section", { className: "feed-section", style: feedStyles }, allEpisodes))));
    };
    return Player;
}(react_1.Component));
exports.default = Player;
