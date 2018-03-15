const host = window.location.hostname;

const hosts = {
    'dev': ['localhost', '127.0.0.1'],
    'public': [
        '',
        ''
    ]
};

const root = {
    'dev': '',
    'public': ''
}

export const apiLinks = {
    dev: 'http://localhost:1300/',
    public: 'https://boriscooper.maximarkets.site/bc-calendar/api/index.php'
};

export let currentHost;

for (let key in hosts) {
    if (hosts[key].includes(host)) currentHost = key;
}

export let rootFolder = root[currentHost];
