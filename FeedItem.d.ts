export default FeedItem;
declare class FeedItem extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        hover: boolean;
    };
    onMouseEnter(): void;
    onMouseLeave(): void;
    render(): JSX.Element;
}
import React from "react";
