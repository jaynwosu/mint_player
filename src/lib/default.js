import { remote } from 'electron'

export default {
  musicPath: remote.app.getPath('music') + '/cover',
  allowKeys: [
    '.aif',
    '.aifc',
    '.aiff',
    '.au',
    '.flac',
    '.funk',
    '.gsd',
    '.gsm',
    '.it',
    '.jam',
    '.kar',
    '.la',
    '.lam',
    '.lma',
    '.m2a',
    // ".m3u",
    '.mid',
    '.midi',
    '.mjf',
    '.mod',
    '.mp3',
    '.mpa',
    '.mpga',
    '.my',
    '.ogg',
    '.pfunk',
    '.qcp',
    '.ra',
    '.ram',
    '.rm',
    '.rmi',
    '.rmm',
    '.rmp',
    '.rpm',
    '.s3m',
    '.sid',
    '.snd',
    '.tsi',
    '.tsp',
    '.voc',
    '.vox',
    '.vqe',
    '.vqf',
    '.vql',
    '.wav',
    '.xm'
  ]
}
