# Production-ready Vue Authentication

![](vuecolors.jpg)

## Part 1 - Using the AWS Amplify Vue Component

> For part 2 (custom authentication), check out the part2 branch

How to implement a real user authentication flow in Vue with Vue Router & AWS Amplify.

This repository goes along with the tutorial on [Dev.to](https://dev.to/) located [here](https://dev.to/dabit3/how-to-build-production-ready-vue-authentication-23mk).

### To deploy this app - Amplify Console

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/username/repository)

To run locally, follow these steps

1. Download the project

```sh
git clone https://github.com/dabit3/production-ready-vue-authentication.git
```

2. Install the dependencies
```sh
yarn

# or

npm install
```

3. Initialize the amplify project & create the service

```sh
amplify init

# answer the questions from the prompt

amplify push
```

4. Run the app

```sh
npm run serve
```
