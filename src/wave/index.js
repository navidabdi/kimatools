import wavery from './wave.js';

export function waveInit(data) {
    let w = wavery(data);
    let svg = w.generateSvg();

    return svg;
}