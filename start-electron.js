const electron = require('electron-prebuilt');
//const electron = window.require('electron')
const proc = require('child_process');
const child = proc.spawn(electron, ['.']);
