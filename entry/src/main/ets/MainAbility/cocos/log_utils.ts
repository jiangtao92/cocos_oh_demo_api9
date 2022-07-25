import hilog from '@ohos.hilog';

const DOMAIN = 0x00000
const TAG = 'HMG_LOG'
const PREFIX = 'JsApp '

export function log(...args: string[]) {
    hilog.info(DOMAIN, TAG, PREFIX + args.join(' '));
}

export class Logger {
    private tag: string = TAG;

    constructor(tag?: string) {
        if (tag) {
            this.tag = tag;
        }
    }

    log(...args: any) {
        hilog.info(DOMAIN, this.tag, PREFIX + args.join(' '))
    }

    debug(...args: any) {
        hilog.debug(DOMAIN, this.tag, PREFIX + args.join(' '))
    }

    info(...args: any) {
        hilog.info(DOMAIN, this.tag, PREFIX + args.join(' '))
    }

    warn(...args: any) {
        hilog.warn(DOMAIN, this.tag, PREFIX + args.join(' '))
    }

    error(...args: any) {
        hilog.error(DOMAIN, this.tag, PREFIX + args.join(' '))
    }

    fatal(...args: any) {
        hilog.fatal(DOMAIN, this.tag, PREFIX + args.join(' '))
    }
}

export default new Logger(TAG)
