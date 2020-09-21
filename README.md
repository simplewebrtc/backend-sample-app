# SimpleWebRTC Sample App with User Data Backend

This repo is provided as an example only and may not be appropriate for your use case.

You can retrieve your API key by visiting [https://accounts.simplewebrtc.com](https://accounts.simplewebrtc.com).

## Backend

The backend here signs a JSON object with an API Secret creating a JWT. The entirety of the backend lives here in [the index.js file](https://github.com/simplewebrtc/backend-sample-app/blob/master/index.js#L18)

## Using the Backend

The backend is invoked by retrieving some JSON data from the `/generateUserData` route.

The result of this request is parsed as JSON and then set to the `userData` attribute of the `App` Component. See [the docs](https://docs.simplewebrtc.com/#/User_Data?id=_2-configure-simplewebrtc-with-correct-config-url-and-the-user-data-token) for more info on how to retrieve the data from peers to use in your app.

In this example the `userId` key from user data is [rendered in the `PeerGridItem`](https://github.com/simplewebrtc/backend-sample-app/blob/master/client/src/components/PeerGridItem.tsx#L248).

## Running locally

1. `npm i`
2. `SWRTC_API_KEY=<YOUR_API_KEY> npm run build:app`
4. `SWRTC_API_SECRET=<YOUR_SECRET_KEY> npm start`
5. Go to [https://localhost:5000/](https://localhost:5000)

## Running with Docker

1. Ensure that docker is [installed on your host](https://docs.docker.com/get-docker/)
2. `docker build --build-args SWRTC_API_KEY=<YOUR_API_KEY> --tag <your-tag> .`
3. `docker push <your-tag>`
4. `docker run -e SWRTC_API_SECRET=<YOUR_API_SECRET> <your-tag>`

_Note: `docker run` may require you to map the internal port with `-p 5000:5000` or `--net=host` depending on your host configuration_


## Sound Configuration

Sound effects for peers joining/leaving, messages, and sound output testing can be configured.

Put your audio files into the `/public` directory, and uncomment the desired `<meta />` tags in `/public/index.html`, setting the `content` attribute to the URL of the audio file:

```html
<meta name="simplewebrtc-sound-message-receive" content="/url-of-mp3-file" />
<meta name="simplewebrtc-sound-message-send" content="/url-of-mp3-file" />
<meta name="simplewebrtc-sound-peer-enter" content="/url-of-mp3-file" />
<meta name="simplewebrtc-sound-peer-exit" content="/url-of-mp3-file" />
<meta name="simplewebrtc-sound-test-output" content="/url-of-mp3-file" />
```
