import { useState } from "react";
import { MinusIcon } from "../svg/Minus";
import { PlusIcon } from "../svg/Plus";

export default function (props) {
    const [isShowing, setIsShowing] = useState(props.isShowing);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div className="accordion">
            <button className={isShowing ? "accordion-btn-active mb-5" : "accordion-btn"}
                onClick={toggle}
                type="button"
            >
                <p className={isShowing ? "accordion-title-active" : "accordion-title"}>{props.title}</p>
                <div>{isShowing ? <MinusIcon /> : <PlusIcon />}</div>
            </button>
            <div className="accordion-text"
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
    );
}