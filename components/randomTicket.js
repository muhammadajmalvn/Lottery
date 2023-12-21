import React, { useState } from "react";
import { useEffect } from "react";
import TicketDisplay from "./ticketDisplay";
let interval;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
export default function RandomTicket() {
    let [couponNumber, setCouponNumber] = useState("");
    useEffect(() => {
        interval = setInterval(() => {
            let random = getRandomInt(1000000000, 9999999999);
            setCouponNumber(random.toString());
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <TicketDisplay ticketNumber={couponNumber} />
        </>
    );
}