# React WASM Rust

Experimental project that connects React TypeScript app, with WASM library built in Rust. The library then is used as a calculator module inside of a custom hook.

## Installation


### `yarn`

Installs the required dependencies.

### `cargo install wasm-pack`

Installs wasm-pack library.

### `yarn build:wasm`

Compiles Rust code to WASM

### `yarn add ./wasm-lib/pkg`

Adds compiled WASM bundle to the React App

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tested on

* Node v18.7.0
* Cargo 1.64.0
