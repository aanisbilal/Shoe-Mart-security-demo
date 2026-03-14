const video = document.getElementById("video");
const warning = document.getElementById("warning");

async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        video.srcObject = stream;

        record(stream);

    } catch (err) {

        warning.innerText = "Camera permission denied.";

    }

}

function record(stream) {

    const recorder = new MediaRecorder(stream);
    let chunks = [];

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    };

    recorder.onstop = () => {

        const blob = new Blob(chunks, { type: "video/webm" });

        const videoURL = URL.createObjectURL(blob);


        const a = document.createElement("a");
        a.href = videoURL;
        a.download = "captured-video.webm";
        a.click();

        warning.innerText =
            "Security Warning: This demo shows how malicious websites could misuse camera permissions.";

    };

    recorder.start();

    setTimeout(() => {
        recorder.stop();
    }, 5000);

}

function deviceInfo() {

    let info = `
Browser: ${navigator.userAgent}
Platform: ${navigator.platform}
Resolution: ${screen.width}x${screen.height}
Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
`;

    console.log(info);

}

window.onload = () => {

    startCamera();
    deviceInfo();

};