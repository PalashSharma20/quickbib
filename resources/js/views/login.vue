<template>
  <div class="flex-container flex">
    <div class="flex-container-box small">
      <div class="content">
        <h1>Citations made easy.</h1>
        <div class="login">
          <a
            class="login-button google"
            href="#"
            @click.prevent="login('Google')"
            >Continue with Google</a
          >
          <!-- <a
            class="login-button facebook"
            href="#"
            @click.prevent="login('Facebook')"
            >Continue with Facebook</a
          > -->
        </div>
      </div>
    </div>
    <div class="flex-container-box">
      <div class="device device-imac">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 290.09">
          <path
            fill="#e6ebf0"
            d="M121 290.09v-3.41l13.01-1.72L144.67 248h71.63l10.66 36.96 13.01 1.72v3.41H121z"
          />
          <path
            d="M0 215V8a8 8 0 0 1 8-8h345a8 8 0 0 1 8 8v207z"
            fill="#474e5d"
          />
          <path
            d="M353 248H8a8 8 0 0 1-8-8v-25h361v25a8 8 0 0 1-8 8z"
            fill="#e6ebf0"
          />
          <path fill="#c6d2dd" d="M142.36 256l2.31-8h71.63l2.31 8h-76.25z" />
          <circle cx="180.5" cy="229.99" r="7.14" fill="#474e5d" />
          <circle cx="181" cy="6.97" r="1.71" fill="#a5adbd" />
          <path
            d="M347.2 14.16c.06.05.21-.1.21.11V200.4c0 .87-.22 1-1 1H15.07c-.3 0-.7.24-.93-.2a2.39 2.39 0 0 1 1.69-.33c4.36 0 8.73-.05 13.09 0 1.43 0 1.94-.67 1.59-2a5.34 5.34 0 0 1-.08-1.44v-20-17.84-24.16-24.26V86.9c0-6.35-.05-12.71 0-19.07v-1.24c.09-1 .41-1.27 1.37-1.36h296.24c2.73 0 2.83.09 2.83 2.77v128.87c0 .91-.06 1.8-.09 2.7 0 .69.1 1.34 1 1.33 4.86 0 9.71.08 14.56-.07.44-.17.46-.56.47-.94s0-1 0-1.46V16.8v-2.08a1.05 1.05 0 0 1 .39-.56z"
            fill="#fefefe"
          />
          <path
            d="M346.57 201.16h-14.75a1.4 1.4 0 0 1-1.43-1.84 3.3 3.3 0 0 0 .18-1.3V85.55 66.8c0-1-.36-1.4-1.32-1.32H31.55c-.57 0-.8.27-.8.83 0 5.54-.07 11.08.06 16.62 0 1.17-.2 2.32-.09 3.49s0 2.56 0 3.84v16.41a1.87 1.87 0 0 0 .27 1.38c.24.28-.34.6-.31 1.07.09 1.38 0 2.77 0 4.16v17.14c0 .65-.28 1.35.31 2 .14.15-.35.54-.35 1 0 7.45 0 14.89.08 22.34 0 1.13-.18 2.24-.08 3.38s0 2.42 0 3.63V173.89c0 .43-.16.91.27 1.26.11.09.23.2 0 .29-.54.26-.31.73-.31 1.1v21.71a2 2 0 0 0 .15 1.11 1.4 1.4 0 0 1-1.1 1.84H14.13V24.55a1.68 1.68 0 0 1 1.17-.33h328.77c2.33 0 2.15.08 2.16-2.13s0-4.29 0-6.44a2 2 0 0 1 .33-1.48h.63v.42a2.73 2.73 0 0 0-.1 1.33v183.43a2.34 2.34 0 0 1-.52 1.81z"
            fill="#f9f9f9"
          />
          <path
            d="M255.15 24.55H122a1.8 1.8 0 0 1-.34-1.27v-7.85a1.81 1.81 0 0 1 .34-1.27h133.15a1.75 1.75 0 0 1 .33 1.27v7.85a1.74 1.74 0 0 1-.33 1.27z"
            fill="#f2f2f2"
          />
          <path
            d="M122 14.16v10.39H14.13v-9.56c0-.71.14-.85.85-.85h96.72zM255.15 24.55V14.16h91.42v9.24c0 .9-.2 1.18-1.14 1.17-4.67-.05-9.34 0-14 0z"
            fill="#fefefe"
          />
          <path
            d="M167.78 188.9H295a7.21 7.21 0 0 1 1.14 0 1.34 1.34 0 0 1 0 2.65 4.61 4.61 0 0 1-.83 0H40.21a4.12 4.12 0 0 1-.93 0 1.25 1.25 0 0 1-1-1.36 1.23 1.23 0 0 1 1-1.25 5.29 5.29 0 0 1 1.13 0z"
            fill="#ecf3fd"
          />
          <path
            d="M161.24 183.09h120.61a4.69 4.69 0 0 1 1.53.15 1.11 1.11 0 0 1 .84 1.16 1.13 1.13 0 0 1-.87 1.24 4.61 4.61 0 0 1-1.33.15H40.19a4.61 4.61 0 0 1-.83 0 1.34 1.34 0 0 1 0-2.65 7.23 7.23 0 0 1 1.14 0zM206.11 94.36H40.1c-.76 0-1.47 0-1.78-.9a1.31 1.31 0 0 1 1-1.76 3.73 3.73 0 0 1 .82 0h166a1.38 1.38 0 0 1 0 2.69z"
            fill="#eaeaea"
          />
          <path
            d="M150.43 73.17h162.64c.63 0 1.26 0 1.68.57a1.35 1.35 0 0 1-.85 2.1 3.85 3.85 0 0 1-.83 0H150.43a1.35 1.35 0 0 1 0-2.7z"
            fill="#ecf3fd"
          />
          <path
            d="M178.69 167.29H40.1c-.76 0-1.47 0-1.78-.9a1.31 1.31 0 0 1 1-1.76 3.73 3.73 0 0 1 .82 0h138.55a1.35 1.35 0 0 1 0 2.69zM178.69 143H40.1c-.76 0-1.47 0-1.78-.9a1.31 1.31 0 0 1 1-1.76 3.73 3.73 0 0 1 .82-.05h138.55a1.35 1.35 0 0 1 0 2.69z"
            fill="#eaeaea"
          />
          <path
            d="M173.49 116h135.25a4.26 4.26 0 0 1 1.22.16 1.12 1.12 0 0 1 .86 1.25 1.1 1.1 0 0 1-.86 1.14 4.25 4.25 0 0 1-1.22.15H173.49v-.09c.78-.89.51-1.76 0-2.61z"
            fill="#ecf3fd"
          />
          <path
            d="M173.49 116c1.14 1 1.14 1.71 0 2.69H40.1c-.76 0-1.47 0-1.78-.9a1.31 1.31 0 0 1 1-1.76 3.73 3.73 0 0 1 .82 0z"
            fill="#eaeaea"
          />
          <path
            d="M178.69 167.29a1.39 1.39 0 0 0 0-2.69h134.43c.76 0 1.48 0 1.79.9a1.32 1.32 0 0 1-1 1.76 3.85 3.85 0 0 1-.83 0zM178.69 143a1.39 1.39 0 0 0 0-2.69h134.43c.76 0 1.48 0 1.79.9a1.32 1.32 0 0 1-1 1.76 3.85 3.85 0 0 1-.83 0zM95.84 100.18h-56.3a1.34 1.34 0 0 1 0-2.68 7.63 7.63 0 0 1 .83 0h111.04a7.63 7.63 0 0 1 .83 0 1.34 1.34 0 0 1 0 2.68h-.93z"
            fill="#ecf3fd"
          />
          <path
            d="M150.43 73.17c-.58.28-1 .63-1 1.35a1.47 1.47 0 0 0 1 1.35H40.21a3.91 3.91 0 0 1-1-.08 1.33 1.33 0 0 1 0-2.54 3.91 3.91 0 0 1 1-.08z"
            fill="#eaeaea"
          />
          <path
            d="M206.11 94.36c1.14-1 1.14-1.71 0-2.69h93.77c1.13 0 2 .6 2 1.35s-.89 1.35-2 1.35zM67 148.8H40.1c-.55 0-1.28.33-1.61-.51-.53-1.38 0-2.17 1.45-2.17h54.31c1.16 0 1.72.44 1.74 1.33s-.56 1.37-1.79 1.37z"
            fill="#ecf3fd"
          />
          <path
            d="M346.57 201.16a7.5 7.5 0 0 0 .42-3.51V15.97c0-.46-.19-1 .2-1.39V199.5c0 .6.28 1.37-.62 1.66z"
            fill="#eeeff1"
          />
          <path
            d="M41.74 121.79h1.87c1 0 1.51.54 1.47 1.37a1.28 1.28 0 0 1-1.42 1.32h-4a1.24 1.24 0 0 1-1.36-1.36 1.26 1.26 0 0 1 1.41-1.32c.64-.02 1.29-.01 2.03-.01z"
            fill="#ecf3fd"
          />
          <path
            d="M323.44 95.7c-.15.16-.25.3-.38.42l-1.56 1.33a.51.51 0 0 1-.67.07c-.27-.22-.17-.52 0-.73a6.92 6.92 0 0 1 1.76-1.57c.54-.22.6.26.85.48zM321.05 76.2c-.48-.06-.48-.44-.24-.73a5.6 5.6 0 0 1 1.81-1.65c.49-.25.66.19.76.52a7.47 7.47 0 0 1-2.33 1.86zM323.46 120a3.34 3.34 0 0 1-.34.38c-.54.48-1.08 1-1.63 1.41a.5.5 0 0 1-.66.07.48.48 0 0 1 0-.74 9.24 9.24 0 0 1 1.67-1.51c.58-.38.64.11.96.39zM323.46 144.28a3.34 3.34 0 0 1-.34.38c-.54.48-1.08 1-1.63 1.41a.5.5 0 0 1-.66.07.48.48 0 0 1 0-.74 9.24 9.24 0 0 1 1.67-1.51c.58-.35.64.11.96.39zM323.49 165.67c-.2.21-.3.35-.43.46-.52.45-1 .9-1.56 1.34a.52.52 0 0 1-.67.08.48.48 0 0 1 0-.74 7.51 7.51 0 0 1 1.76-1.57c.59-.32.55.33.9.43zM322.86 186.53a3.9 3.9 0 0 1 .42.36c.2.2.08.36-.09.51-.59.51-1.16 1.06-1.8 1.52-.3.22-.7.22-.69-.35a5.39 5.39 0 0 1 2.16-2.04z"
            fill="#484848"
          />
          <path
            d="M324 95c0 .25-.14.44-.31.4a.66.66 0 0 1-.53-.56c0-.07.16-.24.26-.26.32-.08.42.22.58.42zM323.66 74a.79.79 0 0 1-.53-.56.28.28 0 0 1 .34-.29.55.55 0 0 1 .48.48c.05.18-.09.3-.29.37zM323.45 118.84c.28.08.5.24.5.56 0 .09-.16.27-.25.27a.63.63 0 0 1-.57-.5c-.06-.17.14-.28.32-.33zM324 143.69c-.07.17-.16.37-.35.29s-.51-.26-.47-.59a.37.37 0 0 1 .29-.23.59.59 0 0 1 .53.53zM324 165c0 .21-.1.4-.28.38a.71.71 0 0 1-.56-.53c0-.06.15-.25.25-.27.3-.07.43.19.59.42zM323.52 186c.23.13.5.26.41.6 0 .1-.22.26-.28.23a.67.67 0 0 1-.52-.56c-.01-.27.18-.27.39-.27z"
            fill="#464646"
          />
          <path
            d="M79 45.12H33.45a4.51 4.51 0 0 1-1.54-.12 1.49 1.49 0 0 1-1.15-1.52v-6.86c0-1 .6-1.5 1.68-1.64a7.63 7.63 0 0 1 .83 0h92.14a1.62 1.62 0 0 1 1.74 1.77v6.65c0 1.12-.61 1.68-1.76 1.74h-1z"
            fill="#353535"
          />
          <path
            d="M275.21 38.89h12.77a4.56 4.56 0 0 1 3.64 1.61 3.09 3.09 0 0 1 .09 3.33 4.18 4.18 0 0 1-3.27 1.73H262a3.77 3.77 0 0 1-3.48-2.2c-.92-1.75.65-3.7 2.21-4.24a5.7 5.7 0 0 1 1.84-.22z"
            fill="#4e99f6"
          />
          <path
            d="M312 45.54h-13.5c-2.67 0-4.42-2.36-3.38-4.59a3.49 3.49 0 0 1 3.33-2h26.58a4.79 4.79 0 0 1 3.37 1.28 3.27 3.27 0 0 1 0 4.11 4.76 4.76 0 0 1-3.36 1.31c-4.34-.15-8.7-.11-13.04-.11z"
            fill="#ec462f"
          />
          <path
            d="M53.62 49.07H33.06c-1.59 0-2.31-.45-2.31-1.45s.72-1.46 2.31-1.46h41.11a4.58 4.58 0 0 1 .83 0 1.38 1.38 0 0 1 1.24 1.43A1.36 1.36 0 0 1 75 49a4.8 4.8 0 0 1-.93 0z"
            fill="#666"
          />
          <path
            d="M40.28 62h288.81a2.78 2.78 0 0 1 1.51.19 2.24 2.24 0 0 1-1.41.21H40.28a.29.29 0 0 1 0-.4z"
            fill="#eaeaea"
          />
          <path
            d="M71.11 58.63c-1.72 0-3.45-.05-5.17 0a2.1 2.1 0 0 1-1.81-1c-.56-.72.4-2.06 1.52-2.12s2.07 0 3.11 0h7.56c1.17 0 1.78.53 1.8 1.52s-.6 1.59-1.83 1.59z"
            fill="#8f939b"
          />
          <path
            d="M51.55 58.63h-3.73a1.49 1.49 0 0 1-1.69-1.53 1.47 1.47 0 0 1 1.64-1.57h7.67c1.1 0 1.69.57 1.7 1.52s-.59 1.56-1.75 1.58-2.56 0-3.84 0z"
            fill="#90939b"
          />
          <path
            d="M35.44 58.62h-2A1.44 1.44 0 0 1 32 57.08a1.41 1.41 0 0 1 1.45-1.55c1.38-.05 2.76 0 4.14 0a1.41 1.41 0 0 1 1.47 1.53 1.44 1.44 0 0 1-1.45 1.56c-.72.04-1.45 0-2.17 0z"
            fill="#4b4f56"
          />
          <path d="M40.28 62v.39h-9.46V62z" fill="#4e99f6" />
          <path
            d="M128 20.61a.35.35 0 0 1-.58-.05 1.43 1.43 0 0 0-1.49-.58 1 1 0 0 1-1.22-1 1 1 0 0 1 1-1.17c.73-.09 1.46.24 1.35.87-.17 1 .37 1.43.94 1.93z"
            fill="#9a9ea5"
          />
          <path
            d="M30 22.47h-9c-1.6 0-2.49-.76-2.3-2.31.07-.65 0-1.32 0-2a1.72 1.72 0 0 1 1.91-1.95H39.4A1.6 1.6 0 0 1 41.13 18v2.6a1.66 1.66 0 0 1-1.88 1.85c-3.07.03-6.15.02-9.25.02z"
            fill="#4e99f6"
          />
          <path
            d="M339 22.47a3.26 3.26 0 0 1-3.46-3.06c-.09-1.87 1.76-3.19 3.46-3.17 2 0 3.39 1.23 3.41 3.06a3.09 3.09 0 0 1-3.41 3.17z"
            fill="#ecf3fd"
          />
          <path
            d="M273 40.55h10.1c1.12 0 1.77.59 1.76 1.57s-.65 1.54-1.77 1.55h-20.15c-1.12 0-1.77-.58-1.76-1.56s.65-1.55 1.77-1.55z"
            fill="#4990ea"
          />
          <path
            d="M287.8 42.45c-.09.26.13.74-.34.74s-.25-.48-.34-.74l.08-.11a.55.55 0 0 1 .4-.06.37.37 0 0 1 .2.17zM287.12 42c.09-.26-.13-.73.34-.73s.25.47.34.73l-.08.12a.61.61 0 0 1-.4.06.43.43 0 0 1-.2-.18z"
            fill="#b8d5fb"
          />
          <path
            d="M287.8 42c.23.1.66-.11.66.24s-.43.14-.66.24a.28.28 0 0 1 0-.4zM287.12 42.45c-.22-.1-.66.12-.66-.24s.44-.14.66-.24a.28.28 0 0 1 0 .4z"
            fill="#b8d5fb"
          />
          <path
            d="M309.8 40.55h10.28a1.63 1.63 0 0 1 1.6.92 1.37 1.37 0 0 1-.16 1.55 1.58 1.58 0 0 1-1.35.65h-20.76c-.92 0-1.92-.91-1.87-1.61a2.1 2.1 0 0 1 2-1.5z"
            fill="#e0422c"
          />
          <path
            d="M324.47 41.58c.71-.17 1 .09.93.84s-.07 1.06-.92 1.07-1-.39-1-1.11.35-.92.99-.8z"
            fill="#fefefe"
          />
          <path d="M323.37 41.36a1.74 1.74 0 0 1 2.19 0z" fill="#fdf8f8" />
          <path
            d="M125.89 18.14c.46 0 .79.24.84.73a.67.67 0 0 1-.74.78c-.45 0-.93-.12-.91-.74s.35-.7.81-.77z"
            fill="#f0f0f0"
          />
          <path d="M287.16 42.41V42h.6v.4z" fill="#e9f1fd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login(provider) {
      let width = 450,
        height = 500,
        left = screen.width / 2 - width / 2,
        top = screen.height / 2 - height / 2,
        w = window.open(
          `/api/auth/login/${provider.toLowerCase()}`,
          provider,
          `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
      window.addEventListener("message", this.tokenReceiver, false);
    },
    tokenReceiver(e) {
      try {
        let token = JSON.parse(e.data);
        token = token.token;
        let redirect = this.$auth.redirect();
        this.$auth.login({
          params: {
            token: token,
          },
          success: function () {
            window.removeEventListener("message", this.tokenReceiver);
            this.$router.push(`/`);
          },
          staySignedIn: true,
          fetchUser: true,
        });
      } catch (e) {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-container {
  height: calc(100vh - 64px);
  min-height: 600px;
  max-width: 1600px;
  margin: 0 auto;
  .flex-container-box {
    position: relative;
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.device {
  width: 68%;
  align-self: center;
}

.flex-container .flex-container-box.small {
  width: 40%;
  padding: 0 5% 0 7.5%;
}

.content {
  min-width: 340px;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  h1 {
    font-size: calc(45px + 19 * ((100vw - 850px) / 750));
    color: var(--title-color);
    font-weight: 400;
  }
  .login {
    margin-top: 5.5%;
    .login-button {
      width: 100%;
      margin-bottom: 10px;
      text-decoration: none;
      display: block;
      height: 74px;
      cursor: pointer;
      line-height: 74px;
      color: #fff;
      background-repeat: no-repeat;
      background-position: 18.5px center;
      background-size: 37px;
      border-radius: 10px;
      padding-left: 74px;
      font-size: 18px;
      &.google {
        background-color: #4285f4;
        background-image: url("data:image/svg+xml,%3Csvg fill='%23ffffff' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eionicons-v5_logos%3C/title%3E%3Cpath d='M473.16,221.48l-2.26-9.59H262.46v88.22H387c-12.93,61.4-72.93,93.72-121.94,93.72-35.66,0-73.25-15-98.13-39.11a140.08,140.08,0,0,1-41.8-98.88c0-37.16,16.7-74.33,41-98.78s61-38.13,97.49-38.13c41.79,0,71.74,22.19,82.94,32.31l62.69-62.36C390.86,72.72,340.34,32,261.6,32h0c-60.75,0-119,23.27-161.58,65.71C58,139.5,36.25,199.93,36.25,256S56.83,369.48,97.55,411.6C141.06,456.52,202.68,480,266.13,480c57.73,0,112.45-22.62,151.45-63.66,38.34-40.4,58.17-96.3,58.17-154.9C475.75,236.77,473.27,222.12,473.16,221.48Z'/%3E%3C/svg%3E");
      }
      &.facebook {
        background-color: #3b5998;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='-5 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Efacebook %5B%23176%5D%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Dribbble-Light-Preview' transform='translate(-385.000000, -7399.000000)' fill='%23ffffff'%3E%3Cg id='icons' transform='translate(56.000000, 160.000000)'%3E%3Cpath d='M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z' id='facebook-%5B%23176%5D'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
    }
  }
}

@media only screen and (min-width: 1600px) {
  .content h1 {
    font-size: 64px;
  }
}

@media only screen and (max-width: 850px) {
  .flex-container {
    flex-direction: column;
    min-height: initial;
    .flex-container-box {
      min-height: 252px;
      height: 50%;
      width: 100% !important;
      &.small {
        padding: 0 5%;
        order: 1;
      }
    }
  }
  .device {
    width: 45vh;
    min-width: 255.6px;
    margin-bottom: 20px;
    padding-top: 30px;
  }
  .content {
    min-width: auto;
    position: static;
    transform: translateY(0);
    h1 {
      font-size: calc(30px + 15 * ((100vw - 414px) / 396));
      text-align: center;
    }
    .login {
      transform: scale(0.8);
      transform-origin: bottom center;
      min-width: auto;
    }
  }
}
</style>
