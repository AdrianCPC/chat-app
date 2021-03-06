import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="mesgs">
            {/*Historia inicio */}
            <div className="msg_history">
                {msgs.map((msgs) =>
                    msgs % 2 ? (
                        <IncomingMessage key={msgs} />
                    ) : (
                        <OutgoingMessage key={msgs} />
                    )
                )}
            </div>
            {/*Historia Fin */}

            <SendMessage />
        </div>
    );
};
