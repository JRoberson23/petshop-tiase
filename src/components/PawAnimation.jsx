"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function PawAnimation() {
    return (
        <div className="paw-animation -ml-5">
            <DotLottieReact
                src="/animations/paw.lottie"
                loop
                autoplay
            />
        </div>
    );
}