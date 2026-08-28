document.addEventListener("DOMContentLoaded", function() {
    const aplayer = new APlayer({
        container: document.getElementById("my-aplayer"),
        fixed: true,
        autoplay: false,
        theme: "#ffc848",
        loop: "all",
        order: "list",
        preload: "metadata",
        volume: 0.8,
        mutex: true,
        listFolded: true,
        audio: [
            
            { name: "Unwelcome Windows", url: "/music/Unwelcome Windows.mp3", cover: "" },
            { name: "游京", url: "/music/游京.mp3", cover: "" },
            { name: "Call Me Now", url: "/music/Call Me Now.mp3", cover: "" },
            { name: "Drown", url: "/music/Drown (feat. Clinton Kane).mp3", cover: "" },
            { name: "Go Again", url: "/music/Go Again.aac", cover: "" },
            { name: "hey! hey!", url: "/music/hey! hey! - TWS.mp3", cover: "" },
            { name: "Move Your Body", url: "/music/Move Your Body (Alan Walker Remix).mp3", cover: "" },
            { name: "Overturn", url: "/music/Overturn(反转进行曲).mp3", cover: "" },
            { name: "Shots", url: "/music/Shots (Broiler Extended Club Remix) - Imagine Dragons.mp3", cover: "" },
            { name: "SODA SODA", url: "/music/SODA SODA - TWS.mp3", cover: "" },
            { name: "The King", url: "/music/The King.mp3", cover: "" },
            { name: "The Other Side of Paradise", url: "/music/The Other Side Of Paradise (Explicit) - Glass Animals.mp3", cover: "" },
            { name: "TIRED OF PROBLEMS", url: "/music/TIRED OF PROBLEMS (Explicit) - NUEKI&TOLCHONOV&Glichery.aac", cover: "" },
            { name: "wasted", url: "/music/wasted.mp3", cover: "" },
            { name: "YMCA", url: "/music/YMCA (Original Version 1978) - Village People.mp3", cover: "" },
            { name: "hey! hey!", url: "/music/hey! hey! - TWS.mp3", cover: "" },
            { name: "plot twist", url: "/music/첫 만남은 계획대로 되지 않아 (plot twist) - TWS.mp3", cover: "" }
        ]
    });
});

























