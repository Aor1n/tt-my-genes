# Getting Started

## Step 0: Install dependencies

```bash
yarn && npx pod-install
```

## Step 0.5: Run /dummy-backend folder

Run in its _own_ terminal.

```bash
cd ../dummy-backend/ && yarn && yarn start
```

## Step 1: Start the Metro Server

Run in its _own_ terminal.

```bash
yarn start
```

## Step 2: Start your Application



### For iOS

```bash
# Preferable way is to run directly via xcode
yarn xcode
```

### For Android

```bash
yarn android
```

### Android connection troubleshooting
```bash
yarn android:reverse_port
# r - reload app in Metro terminal after the command
```
